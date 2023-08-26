import React from 'react'
import { useState } from 'react'
function Searchbar() {
    const [post, setPost] = useState([]);
    const [SearchResults, setSearchResults] = useState([]);
const handleSearch =(e)=>{
const resultsArray =post.filter(post=>post.title.includes(e.target.values))
setSearchResults(resultsArray)
}
  return (
 <>
 <div className="search-bar">
    <input type="text" id='input'
    onChange={handleSearch}/>
 </div>
 
 </>
  )
}

export default Searchbar
