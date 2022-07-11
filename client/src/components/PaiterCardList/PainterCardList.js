import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPainterCardThunk } from '../../redux/action/painterCard'
import './PainterCardList.css'
import {Card, Button} from 'react-bootstrap'

const PainterCardList = () => {
  const dispatch = useDispatch()
  const painterCards = useSelector((state)=> state.painterCard)


  console.log('888888888888',painterCards.img)
  useEffect(() => {
    dispatch(getPainterCardThunk())
  }, [])
  

  return (
    <div>
      {painterCards.map((el) => 
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={el.img} />
          <Card.Body>
            <Card.Title>{el.city}</Card.Title>
            <Card.Text>
              {el.discription}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default PainterCardList