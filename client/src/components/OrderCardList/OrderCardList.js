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
      <div className="trics">
        {user?.roles_id === 2 && <CreateOrderCardForm /> }
      </div>
      <div className="trics2">
        {orderCards.map((el) => (
          <div className="table-card">
            <div className="solo-card" key={nanoid()}>
              <p>{el.title}</p>
              <p>{el.description}</p>
              <img alt="Сдесь должна быть фотография" className="card-img" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} />
              <button className="cardButton">
                <Link to={`/user/${el.customer_id}`}> О заказчике</Link>
              </button>
              {user.roles_id === 1 ? (
                <button className="cardButton" type="button" onClick={() => handleResponse(el.id, user.id)}>
                  Откликнуться
                </button>
              ) : null}
              {/* <button className="cardButton" type="submit" onClick={() => handleDelete(el.id)}>Удалить</button> */}
              {/* <button className="cardButton" type="submit" onClick={() => handleResponse(el.id, user.id)}>Редактировать</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(OrderCardList);
