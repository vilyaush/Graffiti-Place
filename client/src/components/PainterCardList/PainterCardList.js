import React, {
  useEffect, useCallback, memo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPainterCardThunk, deletePainterCardThunk } from '../../redux/action/painterCard';
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
  console.log(painterCards, '00000000000000000000000000000');

  useEffect(() => {
    dispatch(getPainterCardThunk());
  }, []);

  const handleDelete = (id) => {
    dispatch(deletePainterCardThunk(id));
  };

  console.log('887777', user);
  return (
    <div className="card">
      <div className="trics">
        {user?.roles_id === 1 && <CreatePainterCardForm /> }
      </div>
      <div className="trics2">
        {painterCards.map((el) => (
          <div className="table-card">
            <div className="solo-card" key={nanoid()}>
              <p>{el.city}</p>
              <p>{el.description}</p>

              <img className="card-img" alt="Сдесь должна быть фотография" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} />

              <button className="cardButton">
                {' '}
                <Link to={`/user/${el.user_id}`}>О художнике</Link>
                {' '}
              </button>
              {/* <button className="cardButton" onClick={() => handleDelete(el.id)} type="submit">Удалить</button> */}
              {/* <Button type="button" onClick={() => handleDelete(el.id)}>DEL</Button> */}
            </div>
          </div>

        ))}
      </div>
    </div>

  );
}

export default memo(PainterCardList);
