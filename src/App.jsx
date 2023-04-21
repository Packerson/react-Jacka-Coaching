import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import HeaderNew from './components/HeaderNew'
import MainPage from './pages/MainPage'
import Footer from './components/Footer';


const App = () => {
  return (
   <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
      <Footer/>
    </Router>

   </>
  );
}

export default App;
