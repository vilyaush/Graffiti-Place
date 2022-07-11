import './App.css';
import React from 'react';
import MyNavbar from './components/Navbar/MyNavbar';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import AuthForm from './components/AuthForm/AuthForm';
import CreateOrderCardForm from './components/CreateOrderCardForm/CreateOrderCardForm';
import CreatePainterCardForm from './components/CreatePainterCardForm/CreatePainterCardForm';
import PainterCardList from './components/PaiterCardList/PainterCardList';
import OrderCardList from './components/OrderCardList/OrderCardList';

function App() {
  return (
    <div className="App">
        <MyNavbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/1" element={<CreateOrderCardForm />} />
        <Route path="/2" element={<CreatePainterCardForm />} />
        <Route path="/ihavepaint" element={<PainterCardList />} />
        <Route path="/ihavewall" element={<OrderCardList />} />

      </Routes>
    </div>
  );
}

export default App;
