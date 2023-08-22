import React from 'react';
import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Sighnin from './pages/Sighnin';
import Signup from './pages/Signup';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';




function App() {
  return(
    <div className="App">
    <Routes>
    
    <Route path="/" element={ <Home/> } />
    <Route path="signin" element={<Sighnin  />}/>
    <Route path="signup" element={<Signup />}/>
    <Route path="About" element={<About />}/> 
    <Route path="/cart" element={<Cart />}/> 
    <Route path="/Checkout" element={<Checkout />}/>
    </Routes>
    
    </div>
  );
}

export default App;
