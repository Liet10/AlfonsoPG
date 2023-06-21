import React from 'react';
import './Header.Modules.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
     <div className='headerBackground'>
    <header className='header'>
       
       <section className='titleSection'>
             <h1 className='title'>Alfonso Pool & Garden</h1>
             <Link to='/#' className='contactButton'>Contacto</Link>
       </section>
       
    </header>
   
    </div>
  )
}
