import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { garden, pools, comunities, deliveries } from '../../ServicesPagejson/servicesData';



export const SearchComponent = () => {
   const [matchedServices, setMatchedServices] = useState([]);
  const { texto } = useParams();

  useEffect(() => {
    const typedWords = texto.toLowerCase().split(' '); // Split input words

    const allServices = [...garden, ...pools, ...comunities, ...deliveries];

    const matchingServices = allServices.filter(item => {
      const titleWords = item.title.toLowerCase().split(' '); // Split title words
      return typedWords.some(word => titleWords.includes(word)); // Check if any typed word matches in title
    });

    setMatchedServices(matchingServices);
  }, [texto]);
    
    
  return (
    <div className='articleSection'>
      {matchedServices.length > 0? (
          matchedServices.map(service =>(
            <article className="servicesHome">
            <div className='ServiceImage'>
            <img src={service.img} className='imageService' alt="jardin/pic" width="400" height="400" />
            </div>        
            <div className='descriptionDetails'>
              <h3 className='titleDescription'>{service.title}</h3>
              <p className='descriptionText'>{service.description}</p>
            </div>
         </article>
          ))       
      ):
      <p>No hay artículo</p>
      }
       
  </div>
  )
}
