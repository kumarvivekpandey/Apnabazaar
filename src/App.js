import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './features/product-list/ProductList';
import Navbar from './features/navbar/Navbar';



function App() {
  return(
    <div className="App">
      <h1> hello this  ecommerce application which will be known as Apnabazaar</h1>
     <Navbar/>
 <ProductList/>
    
    </div>
  
  );
}

export default App;
