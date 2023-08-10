import React, { useState } from 'react'
import './AdminLayout.css'
// import { Link } from "react-router-dom";
import AdminSidebar from '../Sidebar/AdminSidebar'
import Navbar from '../AdminNavbar/Navbar';

 function AdminLayout({children}) {


  const [isOpen , setIsOpen] = useState(false);


  return (
    <>
     
      <div className='row'>
      <Navbar  setIsOpen={setIsOpen}  isOpen={isOpen}/>
        <div className={`col-sm-4 col-md-3 col-lg-2 side p-0 ${isOpen && 'd-none'}`}>

        <AdminSidebar/>
        
           
        </div>
        <div className= {` p-0 ${!isOpen? 'col-sm-8 col-md-9  col-lg-10' : 'col-sm-12'}`}>{children}</div>
      </div>
    </>
  )
}

export default AdminLayout