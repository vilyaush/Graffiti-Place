import React,{useEffect}from 'react'
import './OrderCardList.css'
import { useDispatch, useSelector } from 'react-redux'
import {Card, Button} from 'react-bootstrap'
import { getOrderCardThunk } from '../../redux/action/orderCard'


const OrderCardList = () => {


  const dispatch = useDispatch()
  const orderCards = useSelector((state)=> state.orderCard)
  console.log(orderCards)

  useEffect(() => {
    dispatch(getOrderCardThunk())
  }, [])
  
  return (
    <div>
      {orderCards.map((el) => 
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default OrderCardList