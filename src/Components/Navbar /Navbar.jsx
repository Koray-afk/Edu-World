import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'


const Navbar = ()=>{

  const[sticky,setSticky]=useState(false)

  const[mobilemenu,setMobilemenu]=useState(false)

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY > 500 ? setSticky(true):setSticky(false)
  })
},[])

  function Togglemenu(){
    mobilemenu ? setMobilemenu(false):setMobilemenu(true)
  }
  return (
    <nav className={`container ${sticky?'dark-nav' : '' }`}>
        {/* <img className='logo' src=" ]" alt="Logo" /> */}
        <h1>LearnHub</h1>
        <ul className={mobilemenu ? '': 'hamburger'}>
            <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='Program'smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about'smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='experience' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link  to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={Togglemenu}/>
    </nav>
  )
}

export default Navbar

// We have to use dark-nav dynamically so we have to use the logic here 

