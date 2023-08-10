import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './components/AdminLayout/AdminLayout';

import ProductDetails from './components/ProductDetails/ProductDetails';
import AddProduct from './components/AddProduct/AddProduct';
// import Navbar from './components/AdminNavbar/Navbar';
import UserDetails from './components/UserDetails/UserDetails';
import AdminLogin from '../User/pages/AdminLogin/AdminLogin';

function AdminRoutes() {









  return (
    <>

      <AdminLayout>
        <Routes>


          <Route path='/product-details' element={<ProductDetails />}></Route>
          <Route path='/add-product' element={<AddProduct />}></Route>
          <Route path='/user-details' element={<UserDetails/>}> </Route>

        </Routes>
      </AdminLayout>
    </>
  )
}

export default AdminRoutes;
