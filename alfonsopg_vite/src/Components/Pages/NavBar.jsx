import React, { useEffect, useState } from 'react';
import logo from '../../assets/Logo/logo5.png'
import { NavLink, useLocation } from 'react-router-dom';
import { RxDropdownMenu } from 'react-icons/rx';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { useScrollPosition } from '../../../Hooks/NavBarScroll';
import { IsDesktop } from '../../../Hooks/IsDesktop';
import { Search } from './Search';


export const NavBar = () => {
    const [openMenu, setOpenMenu ] = useState(false);

    const isDesktop = IsDesktop()
    const location = useLocation()

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [location])
    const showOrHideMenu = ()=>{
          setOpenMenu(!openMenu)
    }
    const scrollPosition = useScrollPosition()
    return (
        <>
            {isDesktop? (
                <nav className={scrollPosition > 0 ? 'navBarOnScroll' : 'navBar'}>
                <div className="logoNavBar">
                    <img src={logo} alt="logo_navBar" width="120" height="120" />
                </div>
                <div className="navBarElement">
                    <ul className="navBarLinks">
                        <li className="navBarLink"><NavLink to='/inicio'>Inicio</NavLink></li>
                        <li className="navBarLink"><NavLink to='/servicios'>Servicios</NavLink></li>
                        <li className="navBarLink"><NavLink to='/acerca'>Nosotros</NavLink></li>
                        <li className="navBarLink"><NavLink to='/contact'>Contacto</NavLink></li>
                    </ul>
                </div>
                <Search/>
                </nav>
            
            ):
            ( 
               <>
                  {!openMenu ? (
                    <>
                     <nav className={scrollPosition > 0 ? 'navBarOnScroll' : 'navBar'}>
                       <div className="logoNavBar">
                           <img src={logo} alt="logo_navBar" width="120" height="120" />
                       </div> 
                       <h3><BsFillPhoneVibrateFill/>609070361</h3>
                       <div className='imgMenu'>
                           <RxDropdownMenu className='menuButton' size={45} color='green' onClick={showOrHideMenu}/>
                       </div>
                       </nav>
                        <Search/>   
                    </>
                                  
                  ): 
                  (  
                    <div className='openMenu'>
                  <div className='imgMenu'>
                     <AiOutlineCloseCircle className='menuButton' size={40} color='white' onClick={showOrHideMenu}/>
                   </div>

                    <ul className="menuLinks">
                        <li className="menuLink"><NavLink className="navBarLink" to='/inicio' onClick={()=>setOpenMenu(!openMenu)}>Inicio</NavLink></li>
                        <li className="menuLink"><NavLink className="navBarLink" to='/servicios' onClick={()=>setOpenMenu(!openMenu)}>Serviccios</NavLink></li>
                        <li className="menuLink"><NavLink className="navBarLink" to='/porque_nosotros' onClick={()=>setOpenMenu(!openMenu)}>Beneficios</NavLink></li>
                        <li className="menuLink"><NavLink className="navBarLink" to='/acerca' onClick={()=>setOpenMenu(!openMenu)}>Nosotros</NavLink></li>
                    </ul>
                    </div>
                  )}             
               
            
                  </>          
               
            )}
        
        </>     

    )
}
