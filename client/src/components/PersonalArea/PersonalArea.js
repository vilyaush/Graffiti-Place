import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRolesThunk } from '../../redux/action/roles';
import { authUserThunk } from '../../redux/action/user';

const avatar = '../../../public//icon__user_account.png';
console.log('AVATAR', avatar);

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
            <img
              className="card-img"
              src={`${process.env.REACT_APP_serverApi}/img/${user?.img} || onError="../../../public/icon__user_account.png" `}
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
          </div>
        </div>
      </div>
      {/* <h3>Мои заказы</h3>
      <li>типа заказы</li> */}
    </div>
  );
}

export default PersonalArea;
