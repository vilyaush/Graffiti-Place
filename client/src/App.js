import './App.css';
import React from 'react';
import MyNavbar from './components/Navbar/MyNavbar';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import AuthForm from './components/AuthForm/AuthForm';


function App() {
  return (
    <div className="App">
        <MyNavbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </div>
  );
}

export default App;
