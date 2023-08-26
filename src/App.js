import React from 'react'

import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'
import Header from './Components/Header/Header'
import Category from './Components/Category/Category'
import About from './Components/Home/About'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'

import {useEffect,useState} from "react"
import AiOutlineHeart from './Components/Login/AiOutlineHeart'
import { productData } from './Api'
import axios from 'axios'


import ProductDetail from './Components/Products/Detail/ProductDetail'
import Cart from './Components/Cart/Cart'
import HeaderDetails from './Components/Header/HeaderDetails'

function App() {
 
return (
<>
<Router>
<Header/>

<Routes>
<Route exact path="/" element={<Home />}  />
<Route exact path="/About" element={<About />} />
<Route exact path="/Category" element={<Category/>} />
<Route
          path="/product/:pid"
          element=
       {<ProductDetail/>}    
    
        />

<Route exact path='/Login' element={<AiOutlineHeart />}/>
<Route exact path="/cart" element={<Cart/>} />
<Route exact path="/details" element={<HeaderDetails/>} />
</Routes>
</Router>


</>


  )
}

export default App

