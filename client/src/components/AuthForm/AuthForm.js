import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { regUserThunk, logOutUserThunk } from '../../redux/action/user'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    if (form.name && form.email && form.password) {
      dispatch(regUserThunk(form, role));
      setForm({})
      event.target.reset()
    }
  }

  const handleLogout = () => {
    dispatch(logOutUserThunk())
  }

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handlePainter = () => {
    setPainterToggle(!painterToggle);
  }

  const role = painterToggle ? 1 : 2

  return (
    //   <div><form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     value={form.name || ""}
    //     name="name"
    //     disabled={loginToggle}
    //     onChange={handleChange}
    //     placeholder="Name"
    //   />
    //   <input
    //     type="text"
    // value={form.email || ""}
    // name="email"
    // onChange={handleChange}
    //     placeholder="Email"
    //   />
    //   <input
    //     type="password"
    //     value={form.password || ""}
    //     name="password"
    //     onChange={handleChange}
    //     placeholder="Password"
    //   />
    //   <button type="submit">{loginToggle ? "Login" : "Register"}</button>
    // </form>
    // <label>
    //   <input type="checkbox" onChange={handleForm} />
    //   <span>Вы уже зарегистрированны?</span>
    // </label>
    // <label hidden={loginToggle}>
    //   <input type="checkbox" onChange={handlePainter} />
    //   <span>Зарегистрироваться как художник</span>
    // </label>
    // <button type="submit" onClick={handleLogout}>LOGOUT</button>
    // </div>

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" value={form.name || ""} name="name"
          disabled={loginToggle} onChange={handleChange}
          placeholder="Enter name" />
        <Form.Text className="text-muted">
          Enter login
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" value={form.email || ""}
          name="email"
          onChange={handleChange} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={form.password || ""}
          name="password"
          onChange={handleChange} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        {loginToggle ? "Login" : "Register"}
      </Button>

      <Form.Label>
        <Form.Control type="checkbox" onChange={handleForm} />
        <Form.Text className="text-muted">
          Вы уже зарегистрированы?
        </Form.Text>
      </Form.Label>

      <Form.Label hidden={loginToggle}>
        <Form.Control type="checkbox" onChange={handlePainter} />
        <Form.Text className="text-muted">
          Зарегистрироваться как художник
        </Form.Text>
      </Form.Label>
      <Button type="submit" onClick={handleLogout}>
        Logout
      </Button>
    </Form>
  );
}

export default AuthForm;
