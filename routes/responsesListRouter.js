const router = require('express').Router();
const { Responses, Users } = require('../db/models');

router
.route('/:id')

.get(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Responses.findAll({where:{'order_id': id},
    include: Users
  })
  res.json(result);
  } catch(err) {
    console.log(err); 
  }

})

module.exports = router;