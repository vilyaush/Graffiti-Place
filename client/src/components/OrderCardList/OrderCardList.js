import React,{useEffect, useCallback}from 'react'
import './OrderCardList.css'
import { useDispatch, useSelector } from 'react-redux'
import {Card, Button} from 'react-bootstrap'
import { getOrderCardThunk, deleteOrderCardThunk } from '../../redux/action/orderCard'


const OrderCardList = () => {


  const dispatch = useDispatch()
  const orderCards = useSelector((state)=> state.orderCard)
  console.log(orderCards)

  useEffect(() => {
    dispatch(getOrderCardThunk())
  }, [])

  const handleDelete = useCallback((id) => {
    dispatch(deleteOrderCardThunk(id))
    .catch(console.log)
  }, [])
  
  return (
    <div>
      {orderCards.map((el) => 
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
            {el.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            <Button type="button" onClick={() => handleDelete(el.id)}>DEL</Button>
         </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default OrderCardList