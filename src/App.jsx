import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginPage from "./pages/LoginPage"
import Header from './components/Header'
import MainPage from "./pages/MainPage"
import Footer from './components/Footer';
import PrivateRoutes from './components/PrivateRoutes';

const App = () => {
  return (
   <>
    <Router>
      <Header/>
      <Routes>
        {/* private routes check if user is authenticate */}
        <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<MainPage/>} />
        </Route>
        
        <Route path="login/" element={<LoginPage/>} />
      </Routes>
      <Footer/>
    </Router>

   </>
  );
}

export default App;
