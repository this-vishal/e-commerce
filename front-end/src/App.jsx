
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './User/components/Navbar/Navbar'
import Home from './User/pages/Home/Home'
import Login from './User/pages/Login/Login'
import Signup from './User/pages/Signup/Signup'
import Seller from './User/pages/Seller/Seller'
import Cart from './User/pages/Cart/Cart'
import Footer from './User/components/Footer/Footer'
// import Main from './Admin/components/Main/Main'
import AdminRoutes from './Admin/AdminRoutes'
// import ProductDetaills from './Admin/components/ProductDetails/ProductDetaills'
import AdminLogin from './User/pages/AdminLogin/AdminLogin'
import { useEffect } from 'react'

function App() {



  const isLogin = localStorage.getItem('isLogin');
  useEffect(()=>{
  const cartProduct = JSON.parse(localStorage.getItem('cartItem'));
  console.log(typeof cartProduct);
    if(cartProduct){
    
        console.log(typeof cartProduct);
    }
    else{
      localStorage.setItem('cartItem' , JSON.stringify([]));
    }
  },[]);



  return (
    <>

      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/seller" element={<Seller />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/admin-login" element={<AdminLogin/>}></Route>
          <Route path="/admin/*" element={isLogin ? <AdminRoutes/> :<AdminLogin />}></Route>

        </Routes>

      </BrowserRouter>
 
    
    </>
  )
}

export default App
