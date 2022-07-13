import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getOneUserThunk } from '../../redux/action/oneUser';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './OneUser.css';

function OneUser() {
  const person = useSelector((state) => state.oneUser);
  const params = useParams();
  // console.log(params.id,'PARAMSSSSSSSSSSSSSS')
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneUserThunk(params.id));
  }, []);

  console.log(person, 'oneUserCOMPONENTS');

  return (
    <div>
      <h2>{person?.name}</h2>
      <p>{person?.title}</p>
      <p>{person?.discription}</p>
      {person?.Orders.map((el) => (
        <Card className="card" key={nanoid()} style={{ width: '18rem' }}>
          <img className="card-img" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
              {el.description}
            </Card.Text>

          </Card.Body>
        </Card>
      ))}

      <Link to="/ihavewall">Назад</Link>

    </div>
  );
}

export default memo(OneUser);
