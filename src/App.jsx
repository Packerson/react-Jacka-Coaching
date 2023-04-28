import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import MainPage from './pages/MainPage'
import Footer from './components/Footer';

import LoginPage from "./pages/LoginPage"
import HeaderNew from './components/HeaderNew'
import MainPageNew from "./components/MainPageNew"
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
