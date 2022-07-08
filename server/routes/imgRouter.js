const router = require('express').Router();

const { Photos } = require('../db/models');


router.route('/')
  .get(async (req, res) => {
    const cards = await Photos.findAll({ order: [['createdAt', 'DESC']], raw: true });
    res.json(cards);
  });

module.exports = router;
