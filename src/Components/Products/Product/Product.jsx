import React,{useState,useEffect,} from 'react'
import BannerImg from "./keyboard.png";
import './Product.scss';
import {NavLink, Link, useNavigate} from 'react-router-dom'
import axios from 'axios';


function Product(props) {

 const { id } = props;
  const navigate =useNavigate();
  const[product,setProduct] =useState();

  useEffect(()=>{
 axios.get('https://fakestoreapi.com/products')
    .then(res=>{setProduct(res.data)})

    .catch(err=> console.log(err))
  }, [])
  
  
  return (
    <>

    {
     product && product.map((r,i)=>(
<div  className='Product-cart'key={r.id} 

>
    
  <Link to={`product/${r.id}`}>    <div className="thumbnail">
    <img src={r.image}  alt="" srcset="" />
    </div>   </Link>
    <div className="product-details">
        <span className="name" >
          {r.title} 
 <br />
        </span>
        <span className="price" >
        ${r.price}
        </span>
    
    </div>
    </div>
      )
      )
    
    }
   
    </>
  )
}

export default Product
