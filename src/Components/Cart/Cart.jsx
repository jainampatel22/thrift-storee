import React, { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { useNavigate } from "react-router-dom"
import {useParams} from "react-router-dom"
import CartItems from "./CartIems/CartItems";
import "./Cart.scss";
import axios from "axios";
import { useEffect } from "react";
import { useCart } from "./CartContext";
const Cart = () => {
 
  
    
  const [showCart,setShowCart]=useState(false)
const navigate = useNavigate();
function backToHome(){
    navigate('/')
    
}

 
    return (
        


                <>
                    <CartItems />

                  
                </>

         
    );
};

export default Cart;