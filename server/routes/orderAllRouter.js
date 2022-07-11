const router = require('express').Router();
const { Orders } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    console.log("get of orderAll router")
    const cards = await Orders.findAll({ order: [['createdAt', 'DESC']], raw: true });
    res.json(cards);
  });

module.exports = router;
