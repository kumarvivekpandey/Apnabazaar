import React from 'react'
import Navbar from '../features/navbar/Navbar';
import ProductList from '../features/product-list/ProductList';
// import Login from '../features/Auth/Login';


function Home() {
  return (
    <div>
        <Navbar />
        <ProductList />
            {/* <Login /> */}
        
    </div>
  )
}

export default Home