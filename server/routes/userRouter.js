const router = require('express').Router();
const Bcrypt = require('../utils/bcrypt');
const { Users } = require('../db/models');

router.route('/register')
  .post(async (req, res) => {
    try {
      const {
        email, password, name, roles_id,
      } = req.body;
      const result = await Users.create({
        email, password: await Bcrypt.hash(password), name, roles_id,
      });
      if (result.id) {
        req.session.userName = result.name;
        req.session.userId = result.id;
        res.json(result);
      }
    } catch (error) {
      res.json(error);
    }
  });

router.route('/logout')
  .get(async (req, res) => {
    try {
      req.session.destroy();
      res.clearCookie('cook');
      res.sendStatus(200);
    } catch (error) {
      res.json(error);
    }
  });

router.route('/signin')
  .post(async (req, res) => {
    const { email, pass } = req.body;
    if (!email) {
      return res.json({ text: 'EmptyFieldFailure', field: 'email' });
    }
    if (!pass) {
      return res.json({ text: 'EmptyFieldFailure', field: 'pass' });
    }
    try {
      const user = await Users.findOne({
        where: { email },
        raw: true,
      });
      if (!user) {
        return res.json({ text: 'UserDoesntExistFailure' });
      }
      const result = await Bcrypt.compare(pass, user.pass);
      if (result) {
        req.session.user = {
          userId: user.id,
          userName: user.username,
          email: user.email,
        };
        return res.json({ text: 'Success' });
      }
      return res.json({ text: 'PasswordsDoNotMatch' });
    } catch (err) {
      return res.status(500).end();
    }
  });

module.exports = router;