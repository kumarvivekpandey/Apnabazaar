import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sighnin from './pages/Sighnin';




function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/signin" exact component={<Sighnin />} /> 
       
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
