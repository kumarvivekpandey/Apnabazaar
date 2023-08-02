import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';

function App() {
  return (
    <div className="App">
      <h1> hello this a ecommerce application which will be known as Apnabazaar</h1>
      <ProductList />
    </div>
  );
}

export default App;
