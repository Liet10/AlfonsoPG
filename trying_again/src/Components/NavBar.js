import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, NavLink, Navigate} from 'react-router-dom';
import './NavBar.Modules.css';
import logo from '../Assets/logo1.webp';
import logo1 from '../Assets/logo3.png';
import {AiOutlineMenu, AiFillCloseSquare} from 'react-icons/ai'
// import { Nosotros } from './Pages/Nosotros';
import { Home } from '../Pages/Home';
// import { Services } from './Pages/Services';
// import { Benefics } from './Pages/Benefics';
// import { Contact } from './Pages/Contact';
import { useScrollPosition } from '../Hooks/Scroll';
// import { Header } from './Header';



export const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [overLogo, setOverLogo] = useState(logo)
  // Me quedé en el hover del logo

  useEffect(()=>{
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  },[])
  useEffect(() => {
    const logoHover = () => {
      setOverLogo(logo1);
    };

    const logoLeave = () => {
      setOverLogo(logo);
    };

    const logoElement = document.querySelector('.logoImg');
    logoElement.addEventListener('mouseenter', logoHover);
    logoElement.addEventListener('mouseleave', logoLeave);

    return () => {
      logoElement.removeEventListener('mouseenter', logoHover);
      logoElement.removeEventListener('mouseleave', logoLeave);
    };
  }, [setOverLogo]);

  const showMenu = ()=>{
    setOpenMenu(!openMenu)
  }
  const scrollPosition = useScrollPosition();
  const menuContent = (
    <>    
    <ul className={isDesktop ? 'menuDesktop' : ''}>
              <li className='menuLink'>
                <NavLink to='/inicio' className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpenMenu(!openMenu)}>Inicio</NavLink>
              </li>
              {/* <li className='menuLink'>
                <NavLink to='/servicios' className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpenMenu(!openMenu)}>Servicios</NavLink>
              </li>
              <li className='menuLink'>
              <NavLink to='/beneficios' className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpenMenu(!openMenu)}>Beneficios</NavLink>

              </li>
              <li className='menuLink'>
              <NavLink to='/nosotros' className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpenMenu(!openMenu)}>Nosotros</NavLink>

              </li> */}
              {/* <li className='menuLink'>
              <NavLink to='/contacto' className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpenMenu(!openMenu)}>Contacto</NavLink>

              </li> */}
            </ul>     
       </>
         )
  return (
    <>
    <BrowserRouter>
    {isDesktop ? (
      <div className={scrollPosition > 0 ? 'navBarOnScroll' : 'navBar'}>
        <img className='logoImg' src={overLogo} alt='logo/alfonsopj' width={120} height={120}/> 
        {menuContent}
      </div>
       
    ): (
    <>
        {!openMenu ? (
      <div className={ openMenu ? 'menuOpen'
        : scrollPosition > 0
        ? 'navBarOnScroll'
        : 'navBar'}>
        <img className='logoImg' src={logo} alt='logo/alfonsopj' width={110} height={110}/> 
        <AiOutlineMenu size={35} className='iconMenu' onClick={showMenu}/>
      </div>) : (
        <div className='menuOpen'>
         <AiFillCloseSquare size={35} onClick={showMenu} className='iconMenu'/> 
          {menuContent}
      </div>
      
      )}      
    </>
    )} 
    {/* <Header/> */}
     <Routes>
        <Route path='/' element={<Navigate to='/inicio' />} />
        <Route path='/inicio' element={<Home />} />
        {/* <Route path='/servicios' element={<Services />} />
        <Route path='/beneficios' element={<Benefics />} />
        <Route path='/nosotros' element={<Nosotros />} /> */}
        {/* <Route path='/contacto' element={<Contact />} /> */}
      </Routes>       
    
    </BrowserRouter>
    
    </>
  )
}
