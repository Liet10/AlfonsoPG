import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageWithFallback from '../Helpers/ImageWithFallBack';
import { useNavigate } from 'react-router-dom';
import { homeServices } from '../../ServicesPagejson/servicesData';



export const Home = () => {
  const [service, setService] = useState(homeServices[0]);

  useEffect(() => {
    let currentIndex = homeServices.findIndex(s => s === service);
  
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % homeServices.length;
      setService(homeServices[currentIndex]);
    }, 4000);
  
    return () => clearInterval(interval);
  }, [service]);

  const navigate = useNavigate()
  
  const linkService = (serviceName)=>{
   navigate(`/servicios/${serviceName.toLowerCase()}`);
  }
  return (
    <div className="articleSection">
            <article className="servicesHome">
                    <div  className="imageContainer">
                      <ImageWithFallback
                      src={service.image}
                      srcWebP={service.imageW}
                      alt= 'ImagenServicio'
                      className= 'imageHome'
                      />
                      <div className="imageOverlay">
                          <h2 className='textOverlay' onClick={()=>linkService(service.service)}>{service.service}</h2>
                      </div>
                   </div>         
            </article>
                 <div className='card'>
                      <button className="button buttonServices hoverable">Vea Nuestros Servicios</button>
                 </div>
                  
          </div>
  )
}
