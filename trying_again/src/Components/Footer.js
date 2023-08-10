import React from 'react'
import './Footer.Modules.css';
import {FaFacebookSquare, FaInstagramSquare, FaGoodreads } from 'react-icons/fa';
// import {AiFillInstagram} from 'react-icons/ai';


export const Footer = () => {
    const dataNow = new Date()
    const yearNow = dataNow.getFullYear()

  return (
    <footer className='footer'>
      <section className='footerInfo'>
      <div className='socialIcons'>
           <FaFacebookSquare className='socialIcon' color='#379237' size={30}/>
           <FaInstagramSquare className='socialIcon' color='#379237' size={30}/>
           <FaGoodreads className='socialIcon' color='#379237' size={30}/>
      </div>
      <div className='contactFooter'>
          <h3>0034 609070361</h3>
          <h3>algonsopj1962@gmail.com</h3>
          <p className='textCopy'>Todos los derechos reservados &copy; Alfonso Pool & Garden. {yearNow}</p> 
        </div>
        
        </section>
            
       
    </footer>
  )
}
