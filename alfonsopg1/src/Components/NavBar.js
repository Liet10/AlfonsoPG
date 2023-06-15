import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.Modules.css';
import logo from '../img/logo1.webp';
import {AiOutlineMenu, AiFillCloseSquare} from 'react-icons/ai'

export const NavBar = () => {
    // Me quede pendiente el mobile mediaqueries
    const [isMobile, setIsMobile] = useState(false);
    const [navBarOpen, setNavBarOpen] = useState(false);
     
   const showMenu = ()=>{
    setNavBarOpen(!navBarOpen)
   }
    const Links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'Servicios'
        },
        {
            id: 3,
            link: 'Porqué Nosotros'
        },
        {
            id: 4,
            link: 'Quienes Somos'
        },
        
    ]
  return (
    <div className={navBarOpen === false? 'navBar' : 'navBarOpen'}>
        {!navBarOpen && <img src={logo} alt='img/logo' className='imgLogo' width={150} height={150}/>}        
        {!navBarOpen ? <AiOutlineMenu size={30} className='menuMenu' onClick={showMenu}/> : <AiFillCloseSquare size={30} className= 'closeButton' onClick={showMenu}/>}       
        {
            navBarOpen && 
            <ul>
            {Links.map((link)=>{
                return (
                    <div>
                        <Link
                        onClick={()=> setNavBarOpen(false)}
                        to={link.link}
                        smooth
                        duration={500}
                        className='navBarLink'>
                            {link.link === 'Porqué Nosotros' ? 'Porqué Nosotros' : link.link}</Link>
                    </div>
                )
            })}
           </ul>
        }
    </div>
  )
}
