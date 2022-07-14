const router = require('express').Router();
const { CardsPaintes, Orders, Users } = require('../db/models');



router
.route('/:id')
.get(async (req,res) => {
  const id = req.params.id;
  // console.log(id,'444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555')
  try {
    const user = await Users.findOne({where:{id}})
    console.log(user,'/////////////////////////*******************************')
    if(user.dataValues.roles_id === 2) {
      const result = await Orders.findAll({where:{'customer_id':id}})
      res.json(result)    
    } else {
      const result = await CardsPaintes.findAll({where:{'user_id':id}}) 
      res.json(result)  }
  } catch (err) {
    console.log(err)
  }


  // console.log(req.params,'********************************************')
  



})
module.exports = router;