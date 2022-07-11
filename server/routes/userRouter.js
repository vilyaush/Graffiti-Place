const router = require('express').Router();
const Bcrypt = require('../utils/bcrypt');
const { Users } = require('../db/models');
const mailer = require('../utils/mail');

router.route('/register')
  .post(async (req, res) => {
    try {
      const {
        email, password, name,
      } = req.body.body;
      const message = {
        to: req.body.body.email, // это адрес, который клиент указал в инпуте email
        subject: 'Вы зарегистрировались!', // тема письма
        html: `
        <h2>Поздравляем, Вы успешно зарегистрировались на нашем сайте!</h2>
        <i>Данные Вашей учетной записи:</i>
        <ul>
          <li>Имя: ${req.body.body.name}</li>
          <li>Почта: ${req.body.body.email}</li>
          <li>Пароль: ${req.body.body.password}</li>

        <p>Данное письмо не требует ответа.</p>
        `,
      };
      const roles_id = req.body.role;

      const pass = await Bcrypt.hash(password);

      const result = await Users.create({
        email, password: pass, name, roles_id,
      });
      console.log(result, 'nnnnnnnnnnnnnnnn');
      console.log('-----------------------------');
      if (result.id) {
        req.session.userName = result.name;
        req.session.userId = result.id;
        mailer(message);
        // res.send(`<p> Регистрация прошла успешно! Данные учетной записи отправлены на email: <b>${req.body.email}</b></p><button><a href="/">Main page</a></button>`);
        return res.json(result);
      }
      throw Error(result);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  });

router.route('/logout')
  .get(async (req, res) => {
    console.log('999999999999999999');
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
    console.log('singin999999999999');
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
          userName: user.name,
          email: user.email,
        };
        return res.json(user);
      }
      return res.json({ text: 'PasswordsDoNotMatch' });
    } catch (err) {
      return res.status(500).end();
    }
  });
router.route('/auth')
  .get(async (req, res) => {
    try {
      console.log('AUTH------------------------------------------------------------------------------');
      console.log(req.session);
      const result = await Users.findByPk(req.session.user.userId);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  });

module.exports = router;
