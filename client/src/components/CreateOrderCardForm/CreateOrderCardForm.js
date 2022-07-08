import React, {useState} from 'react'
import './CreatePainterCardForm.css'
import { useDispatch } from 'react-redux'

const CreateOrderCardForm = () => {

const [form, setForm] = useState({}) 
 
const dispatch = useDispatch()

const handleChange = (e) => setForm((prev) => ({...prev, [e.target.name]: e.target.value}))

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={form.city || ''} name='city' onChange={handleChange} placeholder="Город в котором был выполнен проект" />
        <textarea value={form.desc || ''} name="desc" onChange={handleChange} placeholder="Описапие проекта" />
        <input type='file' value={form.img || ''} name="img" onChange={handleChange} placeholder="Фото проекта" />
      </form>

    </div>
  )
}

export default CreateOrderCardForm