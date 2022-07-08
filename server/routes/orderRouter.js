const router = require('express').Router();
const upload = require('../middleWare/uploadMiddle');
const { Orders } = require('../db/models');

router.route('/')
  .post(upload.single('img'), async (req, res) => {
    console.log('000000000000000000000000000',req.body)
    const newOrder = await Orders.create(
      {
        painter_id: req.body.painter_id,
        title: req.body.title,
        img: req.file?.filename,
        description: req.body.description,
        status: req.body.status,
        castomer_id: req.session.user.userId,
      },
    );
    res.json({ newOrder });
  });

module.exports = router;
