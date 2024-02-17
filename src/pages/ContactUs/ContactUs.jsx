import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='contactus-container'>
        <form>
            <label>Contact Us</label>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
            <textarea placeholder='Write your message here'/>
            <button className='contactus-btn' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactUs