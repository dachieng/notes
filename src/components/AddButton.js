import React from 'react'
import { Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";



function AddButton() {
  return (
    <Link to={"/notes/new/"} className="floating-button">
        <BsFillPlusCircleFill className='add-button'/>
    </Link>
  )
}

export default AddButton
