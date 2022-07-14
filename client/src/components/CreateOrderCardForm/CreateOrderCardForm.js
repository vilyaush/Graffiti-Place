import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderCardThunk, getOrderCardThunk } from '../../redux/action/orderCard';

function CreateOrderCardForm() {
  const [form, setForm] = useState({});

  const userId = useSelector((state) => state.user.id);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', form.city);
    formData.append('description', form.description);
    // formData.append("img", form.img)
    formData.append('customer_id', userId);
    formData.append('file', form.file);
    formData.append('status', false);

    // console.log(Object.fromEntries(formData));

    dispatch(createOrderCardThunk(formData));
    setForm({});
    e.target.reset();
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

  return (
    <div className="registerCard">
      <form className="create-form" onSubmit={handleSubmit}>
        <input className="registration-card-input" type="text" value={form.city || ''} name="city" onChange={handleChange} placeholder="В каком городе хотели бы нарисовать" />
        <textarea className="registration-card-input" value={form.description || ''} name="description" onChange={handleChange} placeholder="Описапие проекта" />
        <input className="registration-card-input" type="file" value={form.img || ''} name="img" onChange={handleChange} placeholder="Фото пустой стены" />
        <button className="regButton" type="submit">Создать</button>
      </form>

    </div>
  );
}

export default CreateOrderCardForm;
