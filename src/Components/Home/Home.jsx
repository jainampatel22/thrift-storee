import React,{useState,useEffect} from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'

import axios from 'axios'

function Home() {



  return (
    <div>


  <Banner/>
 <Products/>
    </div>
  )
}

export default Home
