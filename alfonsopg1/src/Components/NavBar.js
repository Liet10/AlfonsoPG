// import { Link } from 'react-scroll';
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import './NavBar.Modules.css';
import logo1 from '../img/logo1.webp';
import logo2 from '../img/logo3.png';
import {AiOutlineMenu, AiFillCloseSquare} from 'react-icons/ai'
import { useScrollPosition } from './Hooks/ScrollPosition';
import React, { useEffect, useState } from 'react';
import { Home } from '../Screens/Home';
// import { Services } from '../Screens/Services';



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
    // const Links = [
    //     {
    //         id: 1,
    //         link: 'inicio',
    //         name: 'Inicio',
    //         component: 'Home'
            
    //     },
    //     {
    //         id: 2,
    //         link: 'servicios',
    //         name: 'Servicios',
    //         component: 'Services'
            

    //     },
    //     {
    //         id: 3,
    //         link: 'porque-osotros',
    //         name: 'Porqué Nosotros'            

    //     },
    //     {
    //         id: 4,
    //         link: 'quienes-somos',
    //         name: 'Quiénes Somos'
    //     },
        
    // ]
   
     const scrollPosition = useScrollPosition()
  return (
    <>
    <BrowserRouter>
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
              <li>
                <NavLink to = '/Home' className='navBarLink'>Inicio</NavLink>
              </li>
              <li>
                <NavLink to = 'servicios' className='navBarLink'>Servicios</NavLink>
              </li>
              <li>
                <NavLink to = 'beneficios' className='navBarLink'>Beneficios</NavLink>
              </li>
              <li>
                <NavLink to = 'contacto' className='navBarLink'>Contacto</NavLink>
              </li>
              {/* {Links.map((link)=>{
                return (                    
                        <li key={link.id}
                        // onClick={()=> setNavBarOpen(false)}
                        className='navBarLink'>
                            {link.link}
                        </li>                      
                   
                )
            })} */}
           </ul>            
        }
       
    </div> 
        ) : (
            <div className={scrollPosition > 0 ? 'navOnScroll' : 'navBar'}>
             <img src={imgLogo} alt='img/logo' className='imgLogo' width={150} height={150}/>   
            {/* <ul className='navBarDesktop'>
            {Links.map((link)=>{
                return (                  
                       
                    <li key={link.id}
                      // onClick={()=> setNavBarOpen(false)}
                      className='navBarLink'>
                      <NavLink to={link.link}>{link.name}</NavLink>
                    </li>               
                )
            })}
           </ul>  */}
           </div> 
        )}   
        {/* <Routes>
          {Links.map(link=>{
              return <Route key={link.id} path={`/${link.link}`} element={<link.component/>}/>
          })}
          
        </Routes>       */}
         <Routes>          
               <Route path="/Home" element={<Home/>}/>           
         </Routes>  
                 
    </BrowserRouter>   
        
    </>
   
    
  )
}
