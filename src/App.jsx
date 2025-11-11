import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Products from "./pages/Product/Products.jsx"
import ProductDetails from './pages/productdetails/Productdetails.jsx'
import Cart from './pages/cart/Cart.jsx'
import About from "./pages/About/About"
import WrongPage from './pages/wrongpage/WrongPage'
import EmptyCart from './pages/cart/Emptycart.jsx'
import Navbar from './components/navbar/Navbar1'
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact/Contact'
import Checkout from './pages/checkout/Checkout.jsx'
import ProtectedRoute from './components/Protectedroute.jsx'
import Login from './pages/login/Login.jsx'

function App() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid p-0 mt-1 mb-1" style={{minHeight:"100vh"}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/emptycart" element={<EmptyCart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={
          <ProtectedRoute>
            <Checkout/>
          </ProtectedRoute>
         }/>
        <Route path="*" element={<WrongPage/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App