import React, { useEffect, useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { getOrderCardThunk, deleteOrderCardThunk } from '../../redux/action/orderCard';
import CreateOrderCardForm from '../CreateOrderCardForm/CreateOrderCardForm';

function OrderCardList() {
  const user = useSelector((state) => state.user);

  // console.log('ORDERCARDLIST', user);

  const dispatch = useDispatch();
  const orderCards = useSelector((state) => state.orderCard);
  // console.log(orderCards, 'карта для вытаскивания id');

  useEffect(() => {
    dispatch(getOrderCardThunk());
  }, []);

  const handleResponse = useCallback((orderId, userId) => {
    console.log(orderId, userId);
    fetch(`${process.env.REACT_APP_serverApi}/response`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ orderId, userId }),
    });
  }, []);

  if (!user) return null;

  return (
    <div className="card">
      {user?.roles_id === 2 && <CreateOrderCardForm /> }

      {orderCards.map((el) => (
        <div className="card" key={nanoid()} style={{ width: '18rem' }}>
          <img alt="Сдесь должна быть фотография" className="card-img" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} />

          <div>
            <div>{el.title}</div>
            <div>
              {el.description}
            </div>
            <Link to={`/user/${el.customer_id}`}>Подробнее о заказчике</Link>

            {user.roles_id === 1 ? <button type="button" onClick={() => handleResponse(el.id, user.id)}>response</button> : null}

          </div>
        </div>

      ))}
    </div>
  );
}

export default memo(OrderCardList);
