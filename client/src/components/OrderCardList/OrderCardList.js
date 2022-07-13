import React, { useEffect, useCallback, memo } from 'react';
import './OrderCardList.css';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { getOrderCardThunk, deleteOrderCardThunk } from '../../redux/action/orderCard';
import CreateOrderCardForm from '../CreateOrderCardForm/CreateOrderCardForm';

function OrderCardList() {
  const user = useSelector((state) => state.user);

  console.log('ORDERCARDLIST', user);

  const dispatch = useDispatch();
  const orderCards = useSelector((state) => state.orderCard);
  console.log(orderCards, 'карта для вытаскивания id');

  useEffect(() => {
    dispatch(getOrderCardThunk());
  }, []);

  const handleDelete = useCallback((id) => {
    dispatch(deleteOrderCardThunk(id))
      .catch(console.log);
  }, []);

  return (
    <div>
      {user?.roles_id === 2 && <CreateOrderCardForm /> }

      {orderCards.map((el) => (
        <Card className="card" key={nanoid()} style={{ width: '18rem' }}>
          <img alt="Сдесь должна быть фотография" className="card-img" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
              {el.description}
            </Card.Text>
            <Link to={`/user/${el.customer_id}`}>Подробнее о заказчике</Link>
            <button type="button" onClick={() => handleDelete(el.id)}>DEL</button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default memo(OrderCardList);
