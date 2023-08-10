import React, { useState } from 'react'
import { NavBar } from '../Pages/NavBar'
import logo from '../../assets/Logo/logo1.webp';
import logo1 from '../../assets/Logo/logo3.png'


export const Header = () => {
  const [logoColor, setLogoColor] = useState(logo)

   const changeBlueColor = ()=>{
      setLogoColor(logo1)
   }
   const changeGreenColor = ()=>{
    setLogoColor(logo)
 }
  return (
    <header>
      <NavBar/>
      <section className="headerSection">
        <div className="imageContainer">
          <img src={ logoColor } className='logoHeader' alt="logo_navBar" width="300" height="300" onMouseEnter={changeBlueColor} onMouseLeave={changeGreenColor} />
        </div>
        {/* <h1 className="title">Bienvenidos</h1> */}
      </section>
    </header>
  )
}
