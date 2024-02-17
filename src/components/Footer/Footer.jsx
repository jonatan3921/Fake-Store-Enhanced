import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer-container'>
        <p>Made with <AiFillHeart className='heart-icon' /> by Jonatan</p>
        <Link to='/contactus'>Contact Us</Link>
    </div>
  )
}

export default Footer