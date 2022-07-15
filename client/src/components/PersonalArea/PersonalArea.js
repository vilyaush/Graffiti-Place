/* eslint-disable max-len */
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRolesThunk } from '../../redux/action/roles';
import { authUserThunk } from '../../redux/action/user';
import Message from '../Message/Message';
import getPainterResponseThunk from '../../redux/action/painterResponse';
import getUserCardsThunk from '../../redux/action/userCards';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { deletePainterCardThunk } from '../../redux/action/painterCard';
import { deleteOrderCardThunk } from '../../redux/action/orderCard';
import { render } from 'react-dom';

const avatar = '../../../public//icon__user_account.png';
// console.log('AVATAR', avatar);

function PersonalArea() {
  // useEffect(() => {
  //   dispatch(authUserThunk());
  // }, []);

  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  const roles = useSelector((s) => s.roles);
  const userResponse = useSelector((state) => state.painterResponse);
  const userCard = useSelector((state) => state.userCards);

  // console.log(userCard, 'USERCARDSPERSONALAREA===========================================');
  // console.log('PersonalAreaRESPONSES', userResponse);

  useEffect(() => {
    dispatch(authUserThunk());
    dispatch(getRolesThunk());
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(getPainterResponseThunk(user.id));
      dispatch(getUserCardsThunk(user.id));
    }
  }, [user]);

  const handlePainterDelete = (id) => {
    dispatch(deletePainterCardThunk(id));
    dispatch(getRolesThunk());
    dispatch(getPainterResponseThunk(user.id));
    dispatch(getUserCardsThunk(user.id));
  };
  const handleOrderDelete = useCallback((id) => {
    console.log(id);
    dispatch(deleteOrderCardThunk(id));
    dispatch(getRolesThunk());
    dispatch(getPainterResponseThunk(user.id));
    dispatch(getUserCardsThunk(user.id));
  }, []);

  const rolesCheck = roles.filter((el) => el.id === user?.roles_id);
  // console.log(userResponse, 'PERSONAL_AREA_USERRESPONSE');

  const renderPainterUser = (response, uCard) => (
    <div className="ternar-cabinet-area">
      <h2>Заказы на которые я откликнулся:</h2>
      <div className="trics2">
        {response.map((el) => (
          <div className="table-card">
            <div className="solo-card" key={nanoid()}>
              <img alt="Сдесь должна быть фотография" className="card-img" src={`${process.env.REACT_APP_serverApi}/img/${el.Order.img}`} />
              <p>{el.Order.title}</p>
              <p>{el.Order.description}</p>
              <button className="cardButton">
                <Link to={`/user/${el.Order.customer_id}`}> О заказчике</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2>Мои работы:</h2>
      <div className="trics2">
        {uCard.map((el) => (
          <div className="table-card">
            <div className="solo-card" key={nanoid()}>

              <img className="card-img" alt="Сдесь должна быть фотография" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} />
              <p>{el.city}</p>
              <p>
                {' '}
                {el.description}
              </p>
              <button className="cardButton" type="button" onClick={() => handlePainterDelete(el.id)}>Удалить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderOrdersUser = (userOrderCard) => (
    <div className="ternar-cabinet-area">
      <h2>Мои заказы:</h2>
      <div className="trics2">
        {userOrderCard.map((el) => (
          <div className="table-card">
            <div className="solo-card" key={nanoid()}>
              <img alt="Сдесь должна быть фотография" className="card-img" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} />

              <p>{el.title}</p>

              <p>
                {' '}
                {el.description}
              </p>
              <div className="btn-flex">
                <button className="cardButton">
                  <Link to={`/responselist/${el.id}`}>Отклики</Link>
                </button>
                <button className="cardButton" type="button" onClick={() => handleOrderDelete(el.id)}>Удалить</button>
              </div>
            </div>

          </div>

        ))}
      </div>
    </div>
  );
  if (!user) return null;

  return (
    <div className="area">
      <div className="areaDiv1">
        <h1>Личный кабинет</h1>
        <div className="obj">
          <div className="areaPhoto">

            <img
              className="card-img-cabinet"
              src={`${process.env.REACT_APP_serverApi}/img/${user?.img}`}
              alt=""
            />
          </div>
          <div className="areaDiv">
            <h2>Мои данные:</h2>
            <ul>
              <li>
                Моя роль:
                {rolesCheck[0]?.roles}
              </li>
              <li>
                Имя:
                {user?.name}
              </li>
              <li>
                Мое айди:
                {user?.id}
              </li>
              <li>
                Почта:
                {user?.email}
              </li>
              {/* <li>
                Аккаунт создан:
                {user?.createdAt.slice(0, 10)}
              </li> */}
            </ul>

          </div>
          <Message />
        </div>
        <div className="ternar-cabinet-area">
          {user.roles_id === 1 ? renderPainterUser(userResponse, userCard) : renderOrdersUser(userCard)}
        </div>
      </div>
      {/* <h3>Мои заказы</h3>
      <li>типа заказы</li> */}
    </div>
  );
}

export default PersonalArea;
