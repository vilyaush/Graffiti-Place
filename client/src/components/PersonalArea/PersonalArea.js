import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './PersonalArea.css'
import { getRolesThunk } from '../../redux/action/roles'
import { authUserThunk } from '../../redux/action/user'

const PersonalArea = () => {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(authUserThunk())
  // }, [])


  const dispatch = useDispatch();
  const roles = useSelector((s) => s.roles);
  useEffect(() => {
    dispatch(getRolesThunk())
  }, [])

  const rolesCheck = roles.filter(el => el.id === user.roles_id)
  console.log(rolesCheck);


  const user = useSelector((s) => s.user); // при повторном обновлении страницы личного кабинета, получаем null и страница крашится, надо пофиксить
  console.log(user, 'PERSONAL_AREA')

  return (
    <div className='area'>
      <ul>
        <h2>Личный кабинет</h2>
        <h3>Мои данные:</h3>
        <li>Мое айди: {user.id}</li>
        <li>Имя: {user.name}</li>
        <li>Почта: {user.email}</li>
        <li>Моя роль: {rolesCheck[0].roles}</li>
        <li>Аккаунт создан: {user.createdAt.slice(0, 10)}</li>
        <h3>Мои заказы</h3>
        <li>типа заказы</li>
      </ul>
    </div>
  )
}

export default PersonalArea
