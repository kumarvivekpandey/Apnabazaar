import React from 'react'
import Navbar from '../features/product-list/navbar/Navbar'
import ProductList from '../features/product-list/ProductList'


function Home() {
  return (
    <div>
        <Navbar />
        <ProductList />
    </div>
  )
}

export default Home