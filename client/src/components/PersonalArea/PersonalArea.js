import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRolesThunk } from '../../redux/action/roles';
import { authUserThunk } from '../../redux/action/user';

function PersonalArea() {
  const user = useSelector((s) => s.user);
  // при повторном обновлении страницы личного кабинета, получаем null и страница крашится,
  // надо пофиксить
  // console.log(user, 'PERSONAL_AREA')
  const roles = useSelector((s) => s.roles);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authUserThunk())
  // }, [])

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalArea;
