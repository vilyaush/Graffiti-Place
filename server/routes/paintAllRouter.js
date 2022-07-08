const router = require('express').Router();
const { CardsPaintes } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const cards = await CardsPaintes.findAll({ order: [['createdAt', 'DESC']], raw: true });
    res.json(cards);
  });

module.exports = router;
