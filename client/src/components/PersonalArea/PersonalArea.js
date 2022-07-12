import React from 'react'
import { useSelector } from 'react-redux'
import './PersonalArea.css'

const PersonalArea = () => {

  const user = useSelector((s) => s.user); // при повторном обновлении страницы личного кабинета, получаем null и страница крашится, надо пофиксить

  return (
    <div className='area'>
      <ul>
        <h2>Личный кабинет</h2>
        <h3>Мои данные:</h3>
        <li>Мое айди: {user.id}</li>
        <li>Имя: {user.name}</li>
        <li>Почта: {user.email}</li>
        <li>Моя роль: {user.roles_id}</li>
        {/* <li>Аккаунт создан: {user.createdAt.slice(0,10)}</li> */}
        <h3>Мои заказы</h3>
        <li>типа заказы</li>
      </ul>

      <div>
      <input placeholder='text'></input>
      <button type="submit">отправить</button>
      <input type="hidden" value={user.id}></input>
      </div>
    </div>
  )
}

export default PersonalArea
