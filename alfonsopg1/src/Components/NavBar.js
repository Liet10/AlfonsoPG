// import { Link } from 'react-scroll';
// import { Link } from "react-router-dom";
import './NavBar.Modules.css';
import logo1 from '../img/logo1.webp';
import logo2 from '../img/logo3.png';
import {AiOutlineMenu, AiFillCloseSquare} from 'react-icons/ai'
import { useScrollPosition } from './Hooks/ScrollPosition';
import React, { useEffect, useState } from 'react';

export const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [imgLogo, setImgLogo] = useState(logo1)
     
   const showMenu = ()=>{
    setNavBarOpen(!navBarOpen);
   }
   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setNavBarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
useEffect(() => {
    const handleLogoHover = () => {
      setImgLogo(logo2);
    };

    const handleLogoLeave = () => {
      setImgLogo(logo1);
    };

    const logoElement = document.querySelector('.imgLogo');
    logoElement.addEventListener('mouseenter', handleLogoHover);
    logoElement.addEventListener('mouseleave', handleLogoLeave);

    return () => {
      logoElement.removeEventListener('mouseenter', handleLogoHover);
      logoElement.removeEventListener('mouseleave', handleLogoLeave);
    };
  }, []);
    const Links = [
        {
            id: 1,
            link: 'Inicio',
            name: 'Inicio'
        },
        {
            id: 2,
            link: 'Servicios',
            name: 'Servicios'

        },
        {
            id: 3,
            link: 'Porqué nosotros',
            name: 'Porqué Nosotros'

        },
        {
            id: 4,
            link: 'Quiénes somos',
            name: 'Quienes Somos'

        },
        
    ]
   
     const scrollPosition = useScrollPosition()
  return (
    <>
     {isMobile ? (
        <div className={ navBarOpen
          ? 'navBarOpen'
          : scrollPosition > 0
          ? 'navOnScroll'
          : 'navBar'}>        
        {!navBarOpen && <img src={logo1} alt='img/logo' className='imgLogo' width={150} height={150}/>}        
        {!navBarOpen ? <AiOutlineMenu size={30} className='menuMenu' onClick={showMenu}/> : <AiFillCloseSquare size={30} className= 'closeButton' onClick={showMenu}/>}       
        {
            navBarOpen &&
            <ul>
              {Links.map((link)=>{
                return (
                    
                        <li key={link.id}
                        // onClick={()=> setNavBarOpen(false)}
                        className='navBarLink'>
                            {link.link}
                            </li>
                        
                   
                )
            })}            
           </ul>
        }
    </div> 
        ) : (
            <div className={scrollPosition > 0 ? 'navOnScroll' : 'navBar'}>
             <img src={imgLogo} alt='img/logo' className='imgLogo' width={150} height={150}/>   
            <ul className='navBarDesktop'>
            {Links.map((link)=>{
                return (
                  
                       
                        <li key={link.id}
                        // onClick={()=> setNavBarOpen(false)}
                        className='navBarLink'>
                            {link.link}
                            </li>                        
                   
                )
            })}
           </ul> 
           </div> 
        )}
    </>
   
    
  )
}
