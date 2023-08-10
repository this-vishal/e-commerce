import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './adminSidebar.css';
export default function AdminSidebar() {


  const [icon, setIcon] = useState();





  return (
    <>
      <div className='admin-bar'>


       

        <ul className='list-item'>


          <li><Link to={'/admin/add-product'}>Add Product</Link></li>
          <li><Link to={'/admin/product-details'}>Product Details</Link></li>
          <li><Link to={'/admin/user-details'}>User details</Link></li>
         
        </ul>

      </div>



    </>
  )
}
