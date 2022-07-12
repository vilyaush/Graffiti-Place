import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MyNavbar from './components/Navbar/MyNavbar';
import MainPage from './components/MainPage/MainPage';
import AuthForm from './components/AuthForm/AuthForm';
import PainterCardList from './components/PaiterCardList/PainterCardList';
import OrderCardList from './components/OrderCardList/OrderCardList';
import { authUserThunk } from './redux/action/user';
import PersonalArea from './components/PersonalArea/PersonalArea';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUserThunk());
  }, []);
  const location = useLocation();
  console.log('44444444444444444444444444444', location);

  const color = location.pathname === '/' ? '#7F00FF' : '#222222';

  return (
    <div style={{ 'background-color': color }}>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/ihavepaint" element={<PainterCardList />} />
        <Route path="/ihavewall" element={<OrderCardList />} />
        <Route path="/personalarea" element={<PersonalArea />} />
      </Routes>
      <div className="footer">
        <div className="logofooter" />
      </div>
    </div>
  );
}

export default App;
