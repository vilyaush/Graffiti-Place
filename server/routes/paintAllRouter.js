const router = require('express').Router();
const { CardsPaintes } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const cards = await CardsPaintes.findAll({ order: [['createdAt', 'DESC']], raw: true });
    console.log(cards);
    res.json(cards);
  });

module.exports = router;
