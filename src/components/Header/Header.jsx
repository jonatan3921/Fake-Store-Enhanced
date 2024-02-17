import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import { SlBasket } from 'react-icons/sl';
import { CartContext } from '../../context/CartContext';

function Header() {
  //Call the global state from the context
  const {cartItems} = useContext(CartContext)

  let counter = cartItems.length;
  console.log(counter)


  return (
    <div className='header-container'>
        <Link to='/'><h1>Fake Store</h1></Link>
        <div className='icon-container'>
          <Link to='/checkout'><SlBasket className='basket-icon'/></Link>
          <p className='counter'>{counter}</p>
        </div>
    </div>
  )
}

export default Header