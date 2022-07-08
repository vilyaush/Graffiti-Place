const router = require('express').Router();
const upload = require('../middleWare/uploadMiddle');
const { Photos } = require('../db/models');

router.route('/')
  .post(upload.single('img'), async (req, res) => {
    const newPost = await Photos.create(
      {
        city: req.body.city,
        img: req.file?.filename,
        desc: req.body.desc,
        userId: req.session.user.userId,
      },
    );
    res.json({ newPost });
  });

module.exports = router;
