import React,{useEffect, useCallback, memo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPainterCardThunk, deletePainterCardThunk} from '../../redux/action/painterCard'
import './PainterCardList.css'
import {Card, Button} from 'react-bootstrap'
import { nanoid } from 'nanoid'

const PainterCardList = () => {
  const dispatch = useDispatch()
  const painterCards = useSelector((state)=> state.painterCard)


 
  useEffect(() => {
    dispatch(getPainterCardThunk())
  }, [])

  const handleDelete = (id) => {
    dispatch(deletePainterCardThunk(id))
  }

console.log('887777',painterCards)
  return (
    <div >
      {painterCards.map((el) => 
        <Card key={nanoid()} style={{ width: '18rem' }}>
         <Card.Img variant="top" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} />
          <Card.Body>
            <Card.Title>{el.city}</Card.Title>
            <Card.Text>
              {el.discription}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            <Button type="button" onClick={() => handleDelete(el.id)}>DEL</Button>
         </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default memo(PainterCardList)