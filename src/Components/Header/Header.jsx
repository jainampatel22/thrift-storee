import React from 'react'
import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import {NavLink, useNavigate} from "react-router-dom"
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import {useState} from 'react'
import { useSelector } from 'react-redux';
function Header() {
  const {carts} = useSelector((state)=>state.allCart);
console.log(carts)
const navigate = useNavigate();
  const [showCart,setShowCart]=useState(false);
 function onclick(){
  navigate('/cart')
 }
  return (
    <>
 <div className="main-header">
  <div className="header-content">



    <ul className='left'>
    <NavLink to="/">   <li> Home</li></NavLink>
    <NavLink to="/About">   <li> About</li></NavLink>
    <NavLink to="/Category">   <li>Category</li></NavLink>
    </ul>
 



  <div className="center">
    Thrift-Store
  </div>
  <div className="right">
  <TbSearch />
                       
                        <span
                            className="cart-icon"
                            onClick={onclick}
                        >  
                          <CgShoppingCart />  
                           
                        </span>
                  
                     
  </div>

 </div>
 </div>
{ showCart && <Cart/>}
    </>
  )
}

export default Header