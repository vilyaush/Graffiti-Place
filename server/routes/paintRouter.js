const router = require('express').Router();
const upload = require('../middleWare/uploadMiddle');
const { CardsPaintes } = require('../db/models');
console.log(CardsPaintes);
router.route('/')
  .post(upload.single('img'), async (req, res) => {
    
    const newCard = await CardsPaintes.create(
      {
        city: req.body.city,
        img: req.file?.filename,
        discription: req.body.desc,
        user_id: req.body.userId,
      },
    );
    res.json({ newCard });
  });

module.exports = router;
