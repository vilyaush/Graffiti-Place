import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPainterCardThunk } from '../../redux/action/painterCard';

function CreatePainterCardForm() {
  const [form, setForm] = useState({});

  const userId = useSelector((state) => state.user.id);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('city', form.city);
    formData.append('description', form.desc);
    // formData.append("img", form.img)
    formData.append('user_id', userId);
    formData.append('file', form.file);

    //  console.log(Object.fromEntries(formData))
    dispatch(createPainterCardThunk(formData));
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
        <input className="registration-card-input" type="text" value={form.city || ''} name="city" onChange={handleChange} placeholder="Город в котором был выполнен проект" />
        <textarea className="registration-card-input" value={form.desc || ''} name="desc" onChange={handleChange} placeholder="Описапие проекта" />
        <input className="registration-card-input" type="file" value={form.img || ''} name="img" onChange={handleChange} placeholder="Фото проекта" />
        <button className="regButton" type="submit">Отправить</button>
      </form>

    </div>
  );
}

export default CreatePainterCardForm;
