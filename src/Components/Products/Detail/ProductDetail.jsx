import React,{useState, useEffect, useContext}from 'react'
import axios from 'axios';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import keyboard from './keyboard.png'
import "./ProductDetail.scss";
import vector from './Vector.png';
import {useParams} from "react-router-dom"
import Product from "../Product/Product"
import { Link } from 'react-router-dom';
import { addToCart } from '../../../store/cartSlice';
import { useDispatch } from 'react-redux';


function ProductDetail({handleclick} ) {
  const dispatch = useDispatch();

  const clicked= (e)=>{
dispatch(addToCart(e))
  }
const {pid} = useParams();

const[item,setItem] =useState({
  title: '',
  description: '',
  image: ''
});
console.log(pid);

 
useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${pid}`)
  .then(res=>{setItem(res.data)})

  .catch(err=> console.log(err))
   }, [])

  
  return (
<>
<div>
    <div className="single-product-main-content">
     <div className="layout">
       <div className="single-product-page">
         <div className="left">
 <img src={item.image} alt="" srcset="" />
         </div>
        
         <div className="right">
         <span className="name">{item.title}</span> <br /> 
   <span className="price">${item.price}</span> <br />
     <span className="desc">
{item.description}
 </span>
 <Link to={'/cart'} > <button  onClick={()=>clicked(item)}>add to cart</button> </Link>
       
           
         </div>
       </div>


     </div>
    </div>
     </div>

</>
  
      
   
  
  )
}





export default ProductDetail