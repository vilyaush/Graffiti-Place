const router = require('express').Router();
const Bcrypt = require('../utils/bcrypt');
const { Users, CardsPaintes, Orders } = require('../db/models');
const mailer = require('../utils/mail');
const upload = require('../middleWare/uploadMiddle');

router.route('/register')
  .post(upload.single('file'), async (req, res) => {
    // console.log('registerpen', req.body);
    try {
      const {
        email, password, name, discription, title, roles_id,
      } = req.body;
      // console.log(email, title, name, discription, roles_id);

      const message = {
        to: req.body.email, // это адрес, который клиент указал в инпуте email
        subject: 'Вы зарегистрировались!', // тема письма
        html: `
        <h2>Поздравляем, Вы успешно зарегистрировались на нашем сайте!</h2>
        <i>Данные Вашей учетной записи:</i>
        <ul>
          <li>Имя: ${req.body.name}</li>
          <li>Почта: ${req.body.email}</li>
          <li>Пароль: ${req.body.password}</li>

        <p>Данное письмо не требует ответа.</p>
        `,
      };

      // const roles_id = req.body.role;

      const pass = await Bcrypt.hash(password);

      const result = await Users.create({
        email, password: pass, name, roles_id, title, discription, img: req.file?.filename,
      });
      // console.log(result, 'nnnnnnnnnnnnnnnn');
      console.log('-----------------------------');
      if (result.id) {
        req.session.userId = result.id;
        req.session.userName = result.name;
        req.session.roles_id = result.roles_id;
        req.session.email = result.email;
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
    // console.log('999999999999999999');
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
        req.session.userId = user.id;
        req.session.userName = user.name;
        req.session.roles_id = user.roles_id;
        req.session.email = user.email;
        
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
      // console.log('REQEST AUTH-----------------------------------------------------------',req.session);
      const result = await Users.findByPk(req.session.userId);
      // console.log( 'RESPONSE AUTH', result);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  });

router.route('/:id')
.get(async(req, res) => {
  const id = req.params.id
  try{
  const user = await Users.findOne({where:{id}})
  // console.log(user.dataValues.roles_id,'Ручка /user/id-----------------------------------')
  if(user.dataValues.roles_id === 2){
    const result = await Users.findOne({ where: {id}, 
      include: Orders})
       res.json(result)
  } else {
    const result = await Users.findOne({ where: {id}, 
    include: CardsPaintes})
    res.json(result)
  
    // console.log(JSON.parse(JSON.stringify(result)))
  }
  }catch(e){
    console.log(e)}

})

module.exports = router;
