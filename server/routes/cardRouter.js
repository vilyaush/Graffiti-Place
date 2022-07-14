const router = require('express').Router();
const { CardsPaintes } = require('../db/models');



router
.route('/:id')
.get(async (req,res) => {
  // console.log(req.params,'********************************************')
  const result = await CardsPaintes.findAll({where: {user_id: req.params.id}}) 
    // console.log(result);
  res.json(result)  



})
module.exports = router;