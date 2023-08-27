import React from 'react'
import { useState , useEffect } from 'react'
import './Searchbar.scss'
import './SearchResult'
import axios from 'axios'
import {AiOutlineCloseCircle} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import SearchResult from './SearchResult';

function Searchbar() {
const [query,setQuery]= useState("");
const [data,setData]=useState([]);
 const navigate = useNavigate();
 
 
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products')
     .then(res=>{setData(res.data)})
 
     .catch(err=> console.log(err))
   }, [])
console.log(data)
  return (
 <>
 <div className="search-bar">
<input type="text"  className='input' placeholder='   Start typing to see products you are looking for.' onChange={ (e)=>setQuery(e.target.value)}/>
<span className='close' onClick={()=>navigate("/")}>
<AiOutlineCloseCircle/>
</span>
</div>


{
data.filter((value)=>{
  if(!query.length){
return value = null;
  }
 else if(value.title.toLowerCase().includes(query.toLowerCase())
  ){
return value;
}
})

.map((item)=>

<table className='table cart-table mb-0 table-responsive-sm' onClick={()=>navigate(`product/${item.id}`)}>
    <thead>
        <tr>
            <th>Image</th>
            
            <th>Name</th>
            <th>Price</th>
            
           
        </tr>
    </thead>
    <tbody>
    
            
                  
                        <tr>
                            
                            <td><div className='product-img'> <img src={item.image} alt="" srcset="" /></div></td>
                            <td><div className='product-name'><p>{item.title}</p></div></td>
                            <td>${item.price}</td>
                            <td>
                             
                            </td>
                      
                        </tr>
                    
            
                    
    </tbody>
   
</table>

)



}




 
 </>
  )
}
export default Searchbar
