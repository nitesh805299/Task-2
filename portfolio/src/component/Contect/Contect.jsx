import React from 'react'
import './Contect.css'
import theme_pattern from "../../assets/theme_pattern.svg";
const Contect = () => {
  return (
    <div className='contact'> 
    <div className="contact-title">
        <h1>Contact</h1> 
        <img src={theme_pattern} alt="pattern" />
    </div>
      
      <div className='form'>
        <input type="text" id="name" placeholder="Name"></input>
        <input type="email" id="email" placeholder="Email"></input>
        <input type="text" id="contact" placeholder="Contact Number"></input>
        <input type="message" placeholder="Type the message here"></input>
        <button type="submit">Register</button>
    </div>
        </div>
  )
}

export default Contect
