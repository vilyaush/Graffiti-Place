const router = require('express').Router();
const upload = require('../middleWare/uploadMiddle');
const { Orders, Users } = require('../db/models');
const { checkUser } = require('../middleWare/userMiddle');

router
  .route('/')
  .get(async (req, res) => {
    const cards = await Orders.findAll({ order: [['createdAt', 'DESC']], raw: true });
    const users = await Users.findAll({ order: [['createdAt', 'DESC']], raw: true });
    const cardsWithEmails = cards.map(card => {
      const res = users.find(user => user.id === card.customer_id )
      if (res) {
        return {...card, customer_email: res.email}
      }
    })
    res.json(cardsWithEmails);
  })

  .post(upload.single('file'), async (req, res) => {
    // console.log('4444', req.body);
    const newOrder = await Orders.create(
      {
        painter_id: req.body.painter_id,
        title: req.body.title,
        img: req.file?.filename,
        description: req.body.description,
        status: req.body.status,
        customer_id: req.body.customer_id,
      },
    );
    res.json({ newOrder });
  });

router.route('/:id')
  .delete(checkUser, async (req, res) => {
    await Orders.destroy({ where: { id: req.params.id } });
    res.sendStatus('200');
  });

module.exports = router;
