import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PersonalArea.css';
import { getRolesThunk } from '../../redux/action/roles';
// import { authUserThunk } from '../../redux/action/user';
import Message from '../Message/Message';

const avatar = '../../../public//icon__user_account.png';
console.log('AVATAR', avatar);

function PersonalArea() {
  // useEffect(() => {
  //   dispatch(authUserThunk())
  // }, [])

  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  const roles = useSelector((s) => s.roles);

  console.log('PersonalAreaUSER', user);

  useEffect(() => {
    dispatch(getRolesThunk());
  }, []);

  const rolesCheck = roles.filter((el) => el.id === user?.roles_id);
  // console.log(rolesCheck);

  return (

    <div className="area">
      <div className="areaDiv1">
        <h1>Личный кабинет</h1>
        <div className="obj">
          <div className="areaPhoto">
            <img
              className="card-img"
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
              <li>
                Аккаунт создан:
                {user?.createdAt.slice(0, 10)}
              </li>
            </ul>
            <Message />
          </div>
        </div>
      </div>

      {/* <h3>Мои заказы</h3>
      <li>типа заказы</li> */}

    </div>
  );
}

export default PersonalArea;
