import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './PersonalArea.css'
import { authUserThunk } from '../../redux/action/user'

const PersonalArea = () => {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(authUserThunk())
  // }, [])

  const user = useSelector((s) => s.user); // при повторном обновлении страницы личного кабинета, получаем null и страница крашится, надо пофиксить
  console.log(user, 'PERSONAL_AREA')
  return (
    <div className='area'>
      <ul>
        <h2>Личный кабинет</h2>
        <h3>Мои данные:</h3>
        <li>Мое айди: {user?.id}</li>
        <li>Имя: {user?.name}</li>
        <li>Почта: {user?.email}</li>
        <li>Моя роль: {user?.roles_id}</li>
        <li><img className='card-img' style={{ width: '200px' }} src={`${process.env.REACT_APP_serverApi}/img/${user.img}`} /></li>
        <li>Аккаунт создан: {user?.createdAt.slice(0,10)}</li>
        <h3>Мои заказы</h3>
        <li>типа заказы</li>

      </ul>
      </div>
  )
}

export default PersonalArea
