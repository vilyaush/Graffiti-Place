import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../AuthForm/auth.css';
import { regUserThunk, logOutUserThunk, logInUserThunk } from '../../redux/action/user'


const AuthForm = () => {
  const [loginToggle, setLoginToggle] = useState(false);
  const [painterToggle, setPainterToggle] = useState(false);
  const [form, setForm] = useState({})

  const user = useSelector((state) => state.user)


  const dispatch = useDispatch()

  const handleForm = () => {
    setLoginToggle(!loginToggle);
  };


  const handleSubmit = (event) => {
    event.preventDefault()

    if (loginToggle && form.email && form.password) {
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
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handlePainter = () => {
    setPainterToggle(!painterToggle);
  }

  const role = painterToggle ? 1 : 2

  return (
    <Card style={{ width: '100%' }}>
      <Card.Header>Auth</Card.Header>
      <ListGroup variant="flush">
        <div className='formAuth'>
          <Form onSubmit={handleSubmit}>
            <ListGroup.Item>
              <Form.Group className="mb-2" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={form.name || ""} name="name"
                  disabled={loginToggle} onChange={handleChange}
                  placeholder="Enter name" />
                <Form.Text className="text-muted">
                  Введите логин
                </Form.Text>
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" value={form.email || ""}
                  name="email"
                  onChange={handleChange} placeholder="Enter email" />
                <Form.Text className="text-muted">
                  Введите почту
                </Form.Text>
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={form.password || ""}
                  name="password"
                  onChange={handleChange} placeholder="Password" />
                <Form.Text className="text-muted">
                  Введите пароль
                </Form.Text>
              </Form.Group>
            </ListGroup.Item>


            <ListGroup.Item>
              <Form.Group className="position-relative mb-2">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  required
                  name="file"
                />
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item>
              <Form.Group className="mb-3" >
                <Form.Label >
                  Enter sex
                </Form.Label>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="sex"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="sex"
                  id="formHorizontalRadios2"
                />
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item>
              <Form.Group className="mb-2" controlId="formBasicName">
                <Form.Label>title</Form.Label>
                <Form.Control type="text" name="title"
                  placeholder="Enter title" />
                <Form.Text className="text-muted">
                  Введите title
                </Form.Text>
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item>
              <Form.Group className="mb-2" controlId="formBasicName">
                <Form.Label>discription</Form.Label>
                <Form.Control type="text" name="discription"
                  placeholder="Enter discription" />
                <Form.Text className="text-muted">
                  Введите discription
                </Form.Text>
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item>
              <Form.Group className="mb-2">
                <Form.Label>
                  <Form.Text className="text-muted">
                    Вы уже зарегистрированы?
                  </Form.Text>
                  <Form.Check aria-label="option 1" onChange={handleForm} />
                </Form.Label>
              </Form.Group>
              </ListGroup.Item>

              <ListGroup.Item>
                <Form.Group className="mb-2">
                  <Form.Label hidden={loginToggle}>
                    <Form.Text className="text-muted">
                      Зарегистрироваться как художник
                    </Form.Text>
                    <Form.Check aria-label="option 1" onChange={handlePainter} />
                  </Form.Label>
                </Form.Group>
              </ListGroup.Item>

              <ListGroup.Item>
                <Form.Group className="mb-2">
                  <Button variant="primary" type="submit">
                    {loginToggle ? "Login" : "Register"}
                  </Button>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Button type="submit" onClick={handleLogout}>
                    Logout
                  </Button>
                </Form.Group>
              </ListGroup.Item>
          </Form>
        </div>
      </ListGroup>
    </Card >
  );
}

export default AuthForm;
