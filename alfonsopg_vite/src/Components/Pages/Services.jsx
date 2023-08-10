import React, { useEffect, useState } from 'react';
import garden from '../../ServicesPagejson/servicesData';
import { Link } from 'react-router-dom';


export const Services = () => {
const [services, setServices] = useState([])
useEffect(()=>{
    setServices(garden)
},[])

    return (
        <div className='articleSection'>
            <h2 className="align-center articleTitle">Jardines</h2>
            <article  className="servicesHome">
            {services.map(item => {
                return (                        
                    <div key={item.id} className="imageContainer">
                        <img src={item.img} className='imageHome' alt="jardin/pic" width="300" height="300" />
                        <div className="imageOverlay">
                            <Link to={'/servicio/'+ item.id} className='textOverlay'><h2 >{item.title}</h2></Link>
                            
                        </div>
                    </div>                      

                )
            })}
            </article>
        </div>

    )
}
