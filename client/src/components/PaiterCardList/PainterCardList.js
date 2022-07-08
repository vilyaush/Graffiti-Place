import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPainterCardThunk } from '../../redux/action/painterCard'
import './PainterCardList.css'
import {Card, Button} from 'react-bootstrap'

const PainterCardList = () => {
  const dispatch = useDispatch()
  const painterCards = useSelector((state)=> state.painterCard)

  useEffect(() => {
    dispatch(getPainterCardThunk())
  }, [])
  

  return (
    <div>
      {painterCards.map((el) => 
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

export default PainterCardList