const router = require('express').Router();
const upload = require('../middleWare/uploadMiddle');
const { cardPaintes } = require('../db/models');

router.route('/')
  .post(upload.single('img'), async (req, res) => {
    console.log("ручка добовления painterCard")
    const newCard = await cardPaintes.create(
      {
        city: req.body.city,
        img: req.file?.filename,
        desc: req.body.desc,
        userId: req.session.user.userId,
      },
    );
    res.json({ newCard });
  });

module.exports = router;
