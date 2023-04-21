import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import HeaderNew from './components/HeaderNew'
import MainPage from './pages/MainPage'
import Footer from './components/Footer';
import LoginPage from "./pages/LoginPage"


const App = () => {
  return (
   <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="login/" element={<LoginPage/>} />
      </Routes>
      <Footer/>
    </Router>

   </>
  );
}

export default App;
