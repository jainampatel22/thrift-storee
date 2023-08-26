import React,{useState,useEffect} from 'react'
import Product from './Product/Product';
import './Products.scss'
import axios from 'axios';
function Products() {

  
  return (
    <div className="products-container">
    <div className="sec-heading">
    Popular Products
    </div>
      <div className="products">
<Product/>
     
      </div>
   
   
  </div>
  )
}

export default Products
