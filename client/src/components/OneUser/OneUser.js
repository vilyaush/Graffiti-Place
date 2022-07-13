import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import getOneUserThunk from '../../redux/action/oneUser';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './OneUser.css';

function OneUser() {
  const person = useSelector((state) => state.oneUser);
  const params = useParams();// console.log(params.id,'PARAMSSSSSSSSSSSSSS');
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(person.Orders);
    dispatch(getOneUserThunk(params.id));
  }, []);

  const renderOrders = (orders) => (
    <>
      {orders.map((el) => (
        <Card className="card" key={nanoid()} style={{ width: '18rem' }}>
          <img className="card-img" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} alt="orders" />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
              {el.description}
            </Card.Text>

          </Card.Body>
        </Card>
      ))}

      <Link to="/ihavewall">Назад</Link>

    </>
  );

  const renderPainterCard = (painters) => (
    <>

      {painters.map((el) => (
        <Card className="card" key={nanoid()} style={{ width: '18rem' }}>
          <img className="card-img" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} alt="orders" />
          <Card.Body>
            <Card.Title>{el.city}</Card.Title>
            <Card.Text>
              {el.description}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      <Link to="/ihavepaint">Назад</Link>

    </>
  );

  // console.log(person, 'oneOrderUserCOMPONENTS');
  // {person.roles_id === 1 && }
  // if (person.roles_id === 2)
  return (
    <div>

      <h2>{person?.name}</h2>
      <p>{person?.title}</p>
      <p>{person?.discription}</p>
      <p>{person?.email}</p>

      {person.Orders && renderOrders(person.Orders)}

      {person.CardsPaintes && renderPainterCard(person.CardsPaintes)}

    </div>

  );
}

export default memo(OneUser);
