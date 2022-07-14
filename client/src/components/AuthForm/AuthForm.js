import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { regUserThunk, logOutUserThunk, logInUserThunk } from '../../redux/action/user';

function AuthForm() {
  const [loginToggle, setLoginToggle] = useState(false);
  const [painterToggle, setPainterToggle] = useState(false);

  const [form, setForm] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  // console.log(user);

  const handleForm = () => {
    setLoginToggle(!loginToggle);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loginToggle && form.email && form.password) {
      dispatch(logInUserThunk(form));

      setForm({});
      event.target.reset();
      navigate('/');
    } else if (form.name && form.email && form.password) {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('password', form.password);
      formData.append('file', form.file);
      formData.append('discription', form.discription);
      formData.append('roles_id', role);

      // console.log(Object.fromEntries(formData))
      dispatch(regUserThunk(formData));

      setForm({});
      event.target.reset();
      if (painterToggle) {
        navigate('/ihavewall');
      } else {
        navigate('/ihavepaint');
      }
    }
  };

  const handleLogout = () => {
    dispatch(logOutUserThunk());
  };

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        file: e.target.files[0],
      }));
    } else {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handlePainter = () => {
    setPainterToggle(!painterToggle);
  };

  const role = painterToggle ? 1 : 2;

  return (
    <div className="fon">
      <div className="formAuth">
        <h1>Регистрация</h1>
        <form className="formAuth" onSubmit={handleSubmit}>
          <input
            className="input"
            hidden={loginToggle}
            value={form.name || ''}
            name="name"
            onChange={handleChange}
            placeholder="Имя и Фамилия"
          />

          <input
            className="input"
            type="text"
            value={form.email || ''}
            name="email"
            onChange={handleChange}
            placeholder="Ваш email"
          />

          <input
            className="input"
            type="password"
            value={form.password || ''}
            name="password"
            onChange={handleChange}
            placeholder="Ваш пароль"
          />

          <input
            className="input"
            hidden={loginToggle}
            type="file"
            value={form.img || ''}
            name="img"
            onChange={handleChange}
          />

          <input
            className="input"
            hidden={loginToggle}
            type="text"
            value={form.title || ''}
            name="title"
            onChange={handleChange}
            placeholder="Введите город"
          />

          <input
            className="input"
            hidden={loginToggle}
            type="text"
            value={form.discription || ''}
            name="discription"
            onChange={handleChange}
            placeholder="Описание"
          />

          <label className="container">
            Уже зарегестрированы?
            <input className="check" type="checkbox" onChange={handleForm} />
          </label>
          <label className="container">
            Зарегистрироваться как художник
            <input className="check" type="checkbox" hidden={loginToggle} onChange={handlePainter} />
          </label>

          <button className="regButton" type="submit">{loginToggle ? 'Войти' : 'Зарегистрироваться'}</button>
          {/* <button className="regButton" type="submit" onClick={handleLogout}> Выйти</button> */}
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
