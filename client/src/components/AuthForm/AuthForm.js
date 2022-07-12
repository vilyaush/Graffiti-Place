import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate()

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
      if (painterToggle) {
        navigate('/ihavewall')
      } else {navigate('/ihavepaint')}

    } else if (form.name && form.email && form.password) {

      const formData = new FormData()
      formData.append('title', form.title)
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('password', form.password)
      formData.append('file', form.file)
      formData.append('discription', form.discription)
      formData.append('roles_id', role)

      // console.log(Object.fromEntries(formData))
      dispatch(regUserThunk(formData));
      setForm({})
      event.target.reset()
      if (painterToggle) {
        navigate('/ihavewall')
      } else {navigate('/ihavepaint')}
    }
  }

  const handleLogout = () => {
    dispatch(logOutUserThunk())
  }

  const handleChange =(e)=> {
    if (e.target.type === 'file') {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        file: e.target.files[0],
      }));
    } else {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  }

  const handlePainter = () => {
    setPainterToggle(!painterToggle);
  }

  const role = painterToggle ? 1 : 2

  return (
    <Card style={{ width: '100%' }}>
      <Card.Header>Регистрация</Card.Header>
      <ListGroup variant="flush">
        <div className='formAuth'>
          <Form onSubmit={handleSubmit}>

            <ListGroup.Item hidden={loginToggle}>
              <Form.Group className="mb-2" controlId="formBasicName">
                <Form.Label>Ваше Имя и Фамилия</Form.Label>
                <Form.Control type="text" value={form.name || ""} name="name"
                  onChange={handleChange}
                  placeholder="Имя и Фамилия" />
                <Form.Text className="text-muted">
                 
                </Form.Text>
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Ваш email</Form.Label>
                <Form.Control type="text" value={form.email || ""}
                  name="email"
                  onChange={handleChange} placeholder="Ваш email" />
                <Form.Text className="text-muted">
                  
                </Form.Text>
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Введите пароль</Form.Label>
                <Form.Control type="password" value={form.password || ""}
                  name="password"
                  onChange={handleChange} placeholder="Ваш пароль" />
                <Form.Text className="text-muted">
                 
                </Form.Text>
              </Form.Group>
            </ListGroup.Item>


            <ListGroup.Item hidden={loginToggle}>
              <Form.Group className="position-relative mb-2">
                <Form.Label>Добавьте Ваше фото</Form.Label>
                <Form.Control type='file' value={form.img || ''}
                 name="img"
                 onChange={handleChange}
                  
                />
              </Form.Group>
            </ListGroup.Item>


            <ListGroup.Item hidden={loginToggle}>
              <Form.Group className="mb-2" controlId="formBasicName">
                  
                <Form.Label>Введите город</Form.Label>
                <Form.Control type="text" value={form.title || ""}
                  name="title"
                  onChange={handleChange}
                  placeholder="Введите город" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item hidden={loginToggle}>
              <Form.Group className="mb-2" controlId="formBasicName">
                <Form.Label>Немного о себе...</Form.Label>
                <Form.Control type="text" value={form.discription || ""}
                  name="discription"
                  onChange={handleChange}
                  placeholder="Расскажи о себе" />
                <Form.Text className="text-muted">
                  
                </Form.Text>
              </Form.Group>
            </ListGroup.Item> 

            <ListGroup.Item>
              <Form.Group className="mb-2">
                <Form.Label>
                  <Form.Text className="text-muted">
                    Войти?
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
                    {loginToggle ? "Войти" : "Зарегистрироваться"}
                  </Button>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Button type="submit" onClick={handleLogout}>
                    Выйти
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
