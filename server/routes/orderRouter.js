const router = require('express').Router();
const upload = require('../middleWare/uploadMiddle');
const { Orders } = require('../db/models');
const { checkUser } = require('../middleWare/userMiddle');

router
  .route('/')
  .get(async (req, res) => {
    const cards = await Orders.findAll({ order: [['createdAt', 'DESC']], raw: true });
    res.json(cards);
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
