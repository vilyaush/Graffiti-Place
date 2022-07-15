const router = require('express').Router();
const { Responses, Orders, Users } = require('../db/models');
const mailer = require('../utils/mail');

router
  .route('/')
  .post(async (req, res) => {
    console.log(req.body, 'CREATE_RESPONSES_ROUTES')
    const newResponse = await Responses.create(
      {
        order_id: req.body.orderId,
        user_id: req.body.userId
      }
    );
    // const cards = await Orders.findAll({ order: [['createdAt', 'DESC']], raw: true });
    // const users = await Users.findAll({ order: [['createdAt', 'DESC']], raw: true });
    // const cardsWithEmails = cards.map(card => {
    //   const res = users.find(user => user.id === card.customer_id)
    //   if (res) {
    //     return { ...card, name: res.name }
      // }
      const message = {
        to: req.body.email, // это адрес, который клиент указал в инпуте email
        subject: 'Ваш заказ принят!', // тема письма
        html: `
      <h2>Поздравляем, Ваш заказ принят!</h2>
      <i>Данные Вашего художника:</i>
      <ul>
        <li>Имя: ${req.session.userName}</li>
        <li>Почта: ${req.session.email}</li>

      <p>Данное письмо не требует ответа.</p>
    `,
      };
      mailer(message);
      res.json(newResponse);
    })

    router
      .route('/:id')
      .get(async (req, res) => {
        // console.log(req.params,'********************************************')
        try {
          const result = await Responses.findAll({
            where: { user_id: req.params.id },
            include: Orders
          })
          res.json(result)
        } catch (err) { console.error('Error response router', err) }
        // console.log(result);


      })
    module.exports = router;
