import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import getOneUserThunk from '../../redux/action/oneUser';
import { useParams, useNavigate, Link } from 'react-router-dom';

function OneUser() {
  const person = useSelector((state) => state.oneUser);
  const params = useParams();// console.log(params.id,'PARAMSSSSSSSSSSSSSS');
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(person.Orders);
    dispatch(getOneUserThunk(params.id));
  }, []);

  const renderOrders = (orders) => (
    <div className="ternar-cabinet-area">
      <h2>Другие заказы:</h2>
      <div className="trics2">
        {orders.map((el) => (
          <div className="table-card">
            <div className="solo-card" key={nanoid()}>
              <img className="card-img" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} alt="orders" />
              <p>{el.title}</p>
              <p>
                {el.description}
              </p>
            </div>
          </div>
        ))}
        <button className="regButton">
          <Link to="/ihavewall">Назад</Link>
        </button>
      </div>
    </div>
  );

  const renderPainterCard = (painters) => (
    <div className="ternar-cabinet-area">
      <h2>Выполненые работы:</h2>
      <div className="trics2">
        {painters.map((el) => (
          <div className="table-card">
            <div className="solo-card" key={nanoid()}>
              <img className="card-img" src={`${process.env.REACT_APP_serverApi}/img/${el.img}`} alt="orders" />

              <p>{el.city}</p>
              <p>
                {el.description}
              </p>
            </div>
          </div>
        ))}
        <button className="regButton">
          <Link to="/ihavepaint">Назад</Link>
        </button>
      </div>
    </div>
  );

  // console.log(person, 'oneOrderUserCOMPONENTS');
  // {person.roles_id === 1 && }
  // if (person.roles_id === 2)
  return (
    <div className="area">
      <div className="areaDiv1">
        <h1>Подробная Информация</h1>
        <div className="obj">
          <div className="areaPhoto">
            <img
              className="card-img-cabinet"
              src={`${process.env.REACT_APP_serverApi}/img/${person?.img}`}
              alt=""
            />
          </div>
          <div className="areaDiv">
            <ul>
              <li>
                {' '}
                Имя:
                {' '}
                {person?.name}
              </li>
              <li>
                Город:
                {' '}
                {person?.title}
              </li>
              <li>
                О художнике:
                {' '}
                {person?.discription}
              </li>
              <li>
                Email:
                {' '}
                {person?.email}
              </li>
            </ul>
          </div>
        </div>
        <div className="ternar-cabinet-area">
          {person.Orders && renderOrders(person.Orders)}

          {person.CardsPaintes && renderPainterCard(person.CardsPaintes)}
        </div>
      </div>
    </div>

  );
}

export default memo(OneUser);
