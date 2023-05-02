import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginPage from "./pages/LoginPage"
import HeaderNew from './components/HeaderNew'
import MainPageNew from "./pages/MainPageNew"
import FooterNew from './components/FooterNew';

const App = () => {
  return (
   <>
    <Router>
      <HeaderNew/>
      <Routes>
        <Route path="/" element={<MainPageNew/>} />
        <Route path="login/" element={<LoginPage/>} />
      </Routes>
      <FooterNew/>
    </Router>

   </>
  );
}

export default App;
