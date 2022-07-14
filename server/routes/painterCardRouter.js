const router = require('express').Router();
const upload = require('../middleWare/uploadMiddle');
const { CardsPaintes } = require('../db/models');
const { checkUser } = require('../middleWare/userMiddle');

router.route('/')

  .get(async (req, res) => {
    const cards = await CardsPaintes.findAll({ order: [['createdAt', 'DESC']], raw: true });
    // console.log(cards);
    res.json(cards);
  })

  .post(upload.single('file'), async (req, res) => {

    // console.log(req.body, 'CREATE_PAINTES_CARD')

    const newCard = await CardsPaintes.create(
      {
        city: req.body.city,
        img: req.file?.filename,
        description: req.body.description,
        user_id: req.body.user_id,
      },
    );
    res.json({ newCard });
  });

router.route('/:id')
  .delete(checkUser, async (req, res) => {
    await CardsPaintes.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  });

module.exports = router;
