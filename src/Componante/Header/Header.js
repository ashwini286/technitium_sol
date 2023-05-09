import React, { useState } from 'react'
import './Header.css'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";
import { pic } from './img/pizza hut.png'

function Header() {
  const[shoMediaIcons, setShowMediaIcons] = useState(false)
  return (
    <>
     
      <nav className="main-nav">
      <div className="logo">
          <img src="https://media.istockphoto.com/vectors/pizza-chef-vector-id1182416349" alt="" class="src" />  
        </div>
        {/* 2nd menu bar */}
        <div className={shoMediaIcons ? "menu-link mobile-menu-link" : 'menu-link' }> 
        <ul>
          <li class="item"><a href=''>Home</a></li>
          <li class="item"><a href=''>Service</a></li>
          <li class="item"><a href=''>About Us</a></li>
          <li class="item"><a href=''>Contact US</a></li>
        </ul>
        </div>
        {/* logo */}
        <div className='social-media'> 
        <ul className='social-media-desktop'>
          <li><a className='Facebook'><FaFacebookSquare /></a></li>
          <li><a className='Instragram'><FaInstagramSquare /></a></li>
          <li><a className='Linkedin'><FaLinkedinIn /></a></li>
        </ul>

        <div className='hamburger-menu'>
        <a href='#' onClick={() => setShowMediaIcons(!shoMediaIcons)}> <GiHamburgerMenu /></a>
</div>

        </div>
      </nav>
      {/* hero section */}
      <section>
        <div className='Container'>
        <div className='left-side'>
        <h1>Welcome to pizza hut</h1>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni?<br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni? <br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni?<br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni?</p>
        <button className='btn'>Click me</button>
         </div>  
          
        {/* right side */}
        <div className='right-side'>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/a5/df/42/photo3jpg.jpg" />
        </div>

        </div>
      </section>
    </>
  )
}

export default Header
