import React, {useState} from 'react'
import './CreateOrderCardForm.css'
import { useDispatch } from 'react-redux'
import { createOrderCardThunk } from '../../redux/action/orderCard'

const CreateOrderCardForm = () => {

const [form, setForm] = useState({}) 
 
const dispatch = useDispatch()

const handleSubmit = (e) => {
  e.preventDefault()  
  dispatch(createOrderCardThunk(form))
  setForm({})
  e.target.reset() 
}
 const handleChange = (e) => setForm((prev) => ({...prev, [e.target.name]: e.target.value}))

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={form.title || ''} name='title' onChange={handleChange} placeholder="В каком городе хотели бы нарисовать" />
        <textarea value={form.description || ''} name="description" onChange={handleChange} placeholder="Описапие проекта" />
        <input type='file' value={form.img || ''} name="img" onChange={handleChange} placeholder="Фото пустой стены" />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default CreateOrderCardForm