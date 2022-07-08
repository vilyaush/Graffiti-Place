const router = require('express').Router();
const upload = require('../middleWare/uploadMiddle');
const { Orders } = require('../db/models');

router.route('/')
  .post(upload.single('img'), async (req, res) => {
    const newOrder = await Orders.create(
      {
        painter_id: req.body.painter_id,
        title: req.body.title,
        img: req.file?.filename,
        status: req.body.status,
        castomer_id: req.session.user.userId,
      },
    );
    res.json({ newOrder });
  });

module.exports = router;
