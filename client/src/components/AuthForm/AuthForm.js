import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {regUserThunk, logOutUserThunk, logInUserThunk} from '../../redux/action/user'


const AuthForm = () => {
  const [loginToggle, setLoginToggle] = useState(false);
  const [painterToggle, setPainterToggle] = useState(false);

const user = useSelector((state) => state.user)
console.log('123', user)

  const [form, setForm] = useState({})
  const dispatch = useDispatch()

  const handleForm = () => {
    setLoginToggle(!loginToggle);
  };


  const handleSubmit = (event) => {
    event.preventDefault()
    if (loginToggle && form.email && form.password){
      dispatch(logInUserThunk(form));
      setForm({})
      event.target.reset()
      } else if (form.name && form.email && form.password) {
      dispatch(regUserThunk(form, role));
      setForm({})
      event.target.reset()
    }   
  }

  const handleLogout = () => {
    dispatch(logOutUserThunk())
  }

  const handleChange = (event) => {
    setForm((prev) => ({...prev, [event.target.name]: event.target.value}))
  }

 const handlePainter = () => {
  setPainterToggle(!painterToggle);
}

  const role = painterToggle ? 1 : 2

  return ( 
    <div><form onSubmit={handleSubmit}>
    <input
      type="text"
      value={form.name || ""}
      name="name"
      disabled={loginToggle}
      onChange={handleChange}
      placeholder="Name"
    />
    <input
      type="text"
      value={form.email || ""}
      name="email"
      onChange={handleChange}
      placeholder="Email"
    />
    <input
      type="password"
      value={form.password || ""}
      name="password"
      onChange={handleChange}
      placeholder="Password"
    />
    <button type="submit">{loginToggle ? "Login" : "Register"}</button>
  </form>
  <label>
    <input type="checkbox" onChange={handleForm} />
    <span>Вы уже зарегистрированны?</span>
  </label>
  <label hidden={loginToggle}>
    <input type="checkbox" onChange={handlePainter} />
    <span>Зарегистрироваться как художник</span>
  </label>
  <button type="submit" onClick={handleLogout}>LOGOUT</button>
  </div>
  )
}

export default AuthForm;