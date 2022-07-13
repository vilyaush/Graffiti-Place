const router = require('express').Router();
const { Responses, Orders } = require('../db/models');

router
  .route('/')
  
  .post(async (req, res) => {
    console.log(req.body, 'CREATE_RESPONSES_ROUTES')
    const newResponse = await Responses.create(
      {
        order_id: req.body.orderId,
        user_id: req.body.userId
    }
    );
   
    res.json(newResponse);
  })

  router
  .route('/:id')
  .get(async (req,res) => {
    // console.log(req.params,'********************************************')
    const result = await Responses.findAll({where: {user_id: req.params.id},
      include: Orders}) 
      // console.log(result);
    res.json(result)  

  
  
  })
module.exports = router;
