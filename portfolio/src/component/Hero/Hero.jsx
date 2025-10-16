import React from 'react'
import './Hero.css';
import Nitesh from '../../assets/nitesh.png';
const Header = () => {
  return (
    <div className='hero'>
      <img src={Nitesh} alt="" />
        <h1> <span> I'm Nitesh Chaurasiya,</span>   frontend developer based in INDIA.</h1>     
        <p>I'm a Frontend developer, web designer, and a fresher. I love to create beautiful and functional websites.</p>
        <p>, web designer, and a fresher. I love to create beautiful and functional websites.</p>
        <div classNmae='hero-action'>

             <button className="hero-connect">Connect With Me</button>
             <button className="hero-resume">My Resume</button>
         </div>
    </div>
       
  )
}

export default Header