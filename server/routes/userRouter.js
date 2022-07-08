const router = require('express').Router();
const Bcrypt = require('../utils/bcrypt');
const { Users } = require('../db/models');

router.route('/register')
  .post(async (req, res) => {
    try {
      const {
        email, password, name,
      } = req.body.body;
      const roles_id = req.body.role;
      console.log('fff', roles_id);
      console.log(req.body.body);
      const pass = await Bcrypt.hash(password);
      const result = await Users.create({
        email, password: pass, name, roles_id,
      });
      console.log(result, 'nnnnnnnnnnnnnnnn');
      console.log('-----------------------------');
      if (result.id) {
        req.session.userName = result.name;
        req.session.userId = result.id;
        return res.json(result);
      }
      throw Error(result);
    } catch (error) {
      return res.json(error);
    }
  });

router.route('/logout')
  .get(async (req, res) => {
    console.log('999999999999999999')
    try {
      req.session.destroy();
      res.clearCookie('sid');
      res.sendStatus(200);
    } catch (error) {
      res.json(error);
    }
  });



router.route('/signin')
.post(async (req, res) => {
  console.log('singin999999999999')
    const { email, password } = req.body.body;
    if (!email) {
      return res.json({ text: 'EmptyFieldFailure', field: 'email' });
    }
    if (!password) {
      return res.json({ text: 'EmptyFieldFailure', field: 'password' });
    }
    try {
      const user = await Users.findOne({
        where: { email },
        raw: true,
      });
      if (!user) {
        return res.json({ text: 'UserDoesntExistFailure' });
      }
      const result = await Bcrypt.compare(password, user.password);
      if (result) {
        req.session.user = {
          userId: user.id,
          userName: user.username,
          email: user.email,
        };
        return res.json(user);
      }
      return res.json({ text: 'PasswordsDoNotMatch' });
    } catch (err) {
      return res.status(500).end();

    }
});

module.exports = router;
