const router = require('express').Router();
const { Orders, CardsPaintes } = require('../db/models');
const { checkUser } = require('../middleWare/userMiddle');

router.route('/:id')
  .delete(checkUser, async (req, res) => {
    await Orders.destroy({ where: { id: req.params.id } });
    res.sendStatus('200');
  });

router.route('/:id')
  .delete(checkUser, async (req, res) => {
    await CardsPaintes.destroy({ where: { id: req.params.id } });
    res.sendStatus('200');
  });

module.exports = router;
