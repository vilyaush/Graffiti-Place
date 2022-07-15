import React, { useEffect, useCallback, memo } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { getOrderCardThunk, deleteOrderCardThunk } from '../../redux/action/orderCard';
import CreateOrderCardForm from '../CreateOrderCardForm/CreateOrderCardForm';

function OrderCardList() {
  // const [sent, setSent] = useState(false);

  const user = useSelector((state) => state.user);

  // console.log('ORDERCARDLIST', user);

  const dispatch = useDispatch();
  const orderCards = useSelector((state) => state.orderCard);
  // console.log(orderCards, 'карта для вытаскивания id');

  useEffect(() => {
    dispatch(getOrderCardThunk());
  }, []);

  // const handleSent = async () => {
  //   setSent(true)
  //   try {
  //     await axios.post(`REACT_APP_serverApi/${send_mail}`)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleResponse = useCallback((orderId, userId, email, name ) => {
    console.log(orderId, userId);
    fetch(`${process.env.REACT_APP_serverApi}/response`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ orderId, userId, email, name }),
    });
  }, []);

  if (!user) return null;

  return (
    <div className="card">
      <div className="trics">
        {user?.roles_id === 2 && <CreateOrderCardForm />}
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
                <button className="cardButton" type="button" onClick={() => handleResponse(el.id, user.id, el.customer_email, el.name)} >
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
