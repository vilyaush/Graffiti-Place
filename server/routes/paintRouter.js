const router = require('express').Router();
const upload = require('../middleWare/uploadMiddle');
const { CardsPaintes } = require('../db/models');



router.route('/')
  .post(upload.single('file'), async (req, res) => {
    console.log('4444',req.body,req.file)

    const newCard = await CardsPaintes.create(
      {
        city: req.body.city,
        img: req.file?.filename,
        discription: req.body.description,
        user_id: req.body.user_id,
      },
    );
    res.json({ newCard });
  });

module.exports = router;
