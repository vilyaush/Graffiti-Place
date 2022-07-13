import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PersonalArea.css';
import { getRolesThunk } from '../../redux/action/roles';
// import { authUserThunk } from '../../redux/action/user';
import Message from '../Message/Message';
import getPainterResponseThunk from '../../redux/action/painterResponse';
import getUserCardsThunk from '../../redux/action/userCards';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { deletePainterCardThunk } from '../../redux/action/painterCard';

function PersonalArea() {
  // useEffect(() => {
  //   dispatch(authUserThunk())
  // }, [])

  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  const roles = useSelector((s) => s.roles);
  const userResponse = useSelector((state) => state.painterResponse);
  const userCard = useSelector((state) => state.userCards);

  console.log(userCard, '===========================================');
  // console.log('PersonalAreaRESPONSES', userResponse);

  useEffect(() => {
    dispatch(getRolesThunk());
    dispatch(getPainterResponseThunk(user.id));
    dispatch(getUserCardsThunk(user.id));
  }, []);
  const handleDelete = (id) => {
    dispatch(deletePainterCardThunk(id));
  };

  const rolesCheck = roles.filter((el) => el.id === user?.roles_id);
  // console.log(userResponse, 'PERSONAL_AREA_USERRESPONSE');

  const renderPainterUser = (response, uCard) => (
    <>
      <h2>Заказы на которые я откликнулся</h2>
      {response.map((el) => (
        <Card className="card" key={nanoid()} style={{ width: '18rem' }}>
          <img alt="Сдесь должна быть фотография" className="card-img" src={`${process.env.REACT_APP_serverApi}/img/${el.Order.img}`} />
          <Card.Body>
            <Card.Title>{el.Order.title}</Card.Title>
            <Card.Text>
              {el.Order.description}
            </Card.Text>
            <Link to={`/user/${el.Order.customer_id}`}>Подробнее о заказчике</Link>

          </Card.Body>
        </Card>
      ))}
      <h2>Мои работы</h2>
      {uCard.map((el) => (
        <Card key={nanoid()} style={{ width: '18rem' }}>

          <img alt="Сдесь должна быть фотография" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} />

          <Card.Body>
            <Card.Title>{el.city}</Card.Title>
            <Card.Text>
              {el.description}
            </Card.Text>
            <Button type="button" onClick={() => handleDelete(el.id)}>DEL</Button>
          </Card.Body>
        </Card>
      ))}

    </>
  );

  return (

    <div className="area">
      <div className="areaDiv1">
        <h1>Личный кабинет</h1>
        <div className="obj">
          <div className="areaPhoto">
            <img className="card-img" style={{ width: '200px', height: '300px' }} src={`${process.env.REACT_APP_serverApi}/img/${user?.img}`} alt="avatar" />
          </div>
          <div className="areaDiv">
            <ul>
              <h3>Мои данные:</h3>
              <li>
                Мое айди:
                {user?.id}
              </li>
              <li>
                Имя:
                {user?.name}
              </li>
              <li>
                Почта:
                {user?.email}
              </li>
              <li>
                Моя роль:
                {rolesCheck[0]?.roles}
              </li>
              <li>
                Аккаунт создан:
                {user?.createdAt.slice(0, 10)}
              </li>
              <h3>Мои заказы</h3>
              <li>типа заказы</li>
            </ul>
            <Message />
          </div>
        </div>

        {renderPainterUser(userResponse, userCard)}

      </div>

    </div>
  );
}

export default PersonalArea;
