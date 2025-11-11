import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home/HomePage.jsx'
import Products from "./pages/Product/ProductsPage.jsx"
import ProductDetails from './pages/productdetails/productdetailsPage.jsx'
import Cart from './pages/cart/CartPage.jsx'
import About from "./pages/About/AboutPage.jsx"
import WrongPage from './pages/WrongPg/WrongPage.jsx'
import EmptyCart from './pages/cart/EmptyPage.jsx'
import Navbar from './components/navbar/Navbar1'
import Footer from './components/Footer/FooterComponent.jsx'
import Contact from './pages/Contact/ContactPage.jsx'
import Checkout from './pages/Checkout/CheckoutPage.jsx'
import ProtectedRoute from './components/protectedroute'
import Login from './pages/login/loginPage.jsx'

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