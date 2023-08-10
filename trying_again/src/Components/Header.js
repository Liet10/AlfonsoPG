import React from 'react';
import './Header.Modules.css';
import { Link } from 'react-router-dom';

export const Header = ({title='Alfonso Pool & Garden'}) => {
  return (
     <div className='headerBackground'>
    <header className='header'>
       
       <section className='titleSection'>
             <h1 className='title'>{title}</h1>
             <Link to='/#' className='contactButton'>Contacto</Link>
       </section>
       
    </header>
   
    </div>
  )
}
