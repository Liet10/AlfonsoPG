import React from 'react'
import './Footer.Modules.css'

export const Footer = () => {
    const dataNow = new Date()
    const yearNow = dataNow.getFullYear()

  return (
    <footer className='footer'>
        <div className='contactFooter'>
          <h3>0034 609070361</h3>
          <h3>algonsopj1962@gmail.com</h3>
        </div>
        <p className='textCopy'>Todos los derechos reservados &copy; Alfonso Pool & Garden. {yearNow}</p>
    </footer>
  )
}
