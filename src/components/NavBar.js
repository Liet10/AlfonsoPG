import React from 'react';
import { Link } from 'react-scroll';
import logo from '../Img/logo/logo1.webp';
import styles from './NavBarModules.css';

export const NavBar = () => {
    const links = [
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
    <div className={styles.navBar}>
        <div className='imgLogo'>
            <img src={logo} alt='img-logo' width={150} height={150}/>
        </div>
        <div>
        <ul>
            {
                links.map((link)=>{
                    return (
                    <div>
                       <Link>{link.link === 'Porqué Nosotros'? 'Porqué Nosotros' : link.link}</Link>
                    </div>
                    )
                })
            }
        </ul>
        </div>
        
    </div>
  )
}
