const router = require('express').Router();
const upload = require('../middleWare/uploadMiddle')
const { Photos } = require('../db/models');

router.route('/')
  .post(upload.single('img'), async (req, res) => {
    const newPost = await Photos.create(
      { title: req.body.title, img: req.file?.filename, userId: req.session.user.userId },
    );
    res.json({ newPost });
  });

module.exports = router;
