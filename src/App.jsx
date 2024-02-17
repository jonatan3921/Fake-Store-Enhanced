import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContactUs from './pages/ContactUs/ContactUs';
import Details from './pages/Details/Details';
import Homepage from './pages/Homepage/Homepage';
import CartContextProvider from './context/CartContext';
import Checkout from './pages/Checkout/Checkout';

function App() {

  return (
    <BrowserRouter>
    <CartContextProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/contactus' element={<ContactUs />}/>
        <Route path='/details/:productId' element={<Details />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>

      <Footer />
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
