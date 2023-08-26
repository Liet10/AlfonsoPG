import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { garden } from '../../ServicesPagejson/servicesData';
import { pools, comunities, deliveries } from '../../ServicesPagejson/servicesData';


export const Service = () => {
  const [service, setService] = useState({})
  const { id } = useParams();
  useEffect(() => {
    const selectedService =
      garden.find(item => item.id === id) ||
      pools.find(item => item.id === id) ||
      comunities.find(item => item.id === id) ||
      deliveries.find(item => item.id === id);
  
    if (selectedService) {
      setService(selectedService);
      window.scrollTo(0, 0);
    } 
  }, [id]);

  return (
    <div className='articleSection'>
      <article className="servicesHome">
        <div className='ServiceImage'>
        <img src={service.img} className='imageService' alt="jardin/pic" width="400" height="400" />
        </div>        
        <div className='descriptionDetails'>
          <h3 className='titleDescription'>{service.title}</h3>
          <p className='descriptionText'>{service.description}</p>
        </div>

      </article>
    </div>
  )
}
