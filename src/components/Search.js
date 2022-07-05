import React from 'react'
import { MdSearch } from "react-icons/md";

function Search({ handleSearch }) {

    
  return ( 
    <div className='search'>
      <MdSearch className='search-icon' size="1.3em"/>
      <input onChange={handleSearch} type="search" placeholder='type to search'/>
    </div>
  )
}

export default Search
