import React, { useEffect, useCallback, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPainterCardThunk, deletePainterCardThunk } from '../../redux/action/painterCard';
import './PainterCardList.css';
import { Card, Button } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import CreatePainterCardForm from '../CreatePainterCardForm/CreatePainterCardForm';
import { Link } from 'react-router-dom';
// import '../../../public/star.png'

function PainterCardList() {
  const dispatch = useDispatch();
  const painterCards = useSelector((state) => state.painterCard);

  const user = useSelector((state) => state.user);
  const [count, setCount] = useState(0);
  // console.log(user, '000000000');

  useEffect(() => {
    dispatch(getPainterCardThunk());
  }, []);

  const handleDelete = (id) => {
    dispatch(deletePainterCardThunk(id));
  };

  console.log('887777', user);
  return (
    <div>

      {user?.roles_id === 1 && <CreatePainterCardForm />}
      {painterCards.map((el) => (
        <Card key={nanoid()} style={{ width: '18rem' }}>

          <img alt="Здесь должна быть фотография" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} />

          <Card.Body>
            <Card.Title>{el.city}</Card.Title>
            <Card.Text>
              {el.discription}
            </Card.Text>
            <Link to={`/user/${el.user_id}`}>Подробнее о художнике</Link>
            <Button type="button" onClick={() => handleDelete(el.id)}>DEL</Button>
          </Card.Body>
          <div>
            <button className='btn'>1</button>
            <button className='btn'>2</button>
            <button className='btn'>3</button>
            <button className='btn'>4</button>
            <button className='btn'>5</button>
          </div>
        </Card>
      ))
      }
    </div >
  );
}

export default memo(PainterCardList);
