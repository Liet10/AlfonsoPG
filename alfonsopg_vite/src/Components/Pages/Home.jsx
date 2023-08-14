import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import  garden1  from '../../assets/homeImg/jardin.jpg';
import  garden1W from '../../assets/homeImg/jardin.webp';
import  Pool2  from '../../assets/homeImg/piscina.jpg';
import  Pool2W  from '../../assets/homeImg/piscina.webp';
import  Comunity3  from '../../assets/homeImg/comunidades.jpg';
import  Comunity3W  from '../../assets/homeImg/comunidades.webp';
import  Delivery1  from '../../assets/homeImg/delivery1.jpg';
import  Delivery1W  from '../../assets/homeImg/delivery1.webp';
import ImageWithFallback from '../Helpers/ImageWithFallBack';



export const Home = () => {
  const homeServices = [
    {
        id: uuidv4(),
        service: 'Jardines',
        image: garden1,
        imageW: garden1W,


    },
    {
      id: uuidv4(),
      service: 'Piscinas',
      image: Pool2,
      imageW: Pool2W,


      },  
      {
        id: uuidv4(),
        service: 'Comunidades',
        image: Comunity3,
        imageW: Comunity3W,


      },
      {
        id: uuidv4(),
        service: 'A Domicilio',
        image: Delivery1,
        imageW: Delivery1W,


        },
  ]
  return (
    <div className="articleSection">
            <article className="servicesHome"> 
              {homeServices.map(service=>{
                return (
                    <div  className="imageContainer" key={service.id}>
                      <ImageWithFallback
                      src={service.image}
                      srcWebP={service.imageW}
                      alt= 'ImagenServicio'
                      className= 'imageHome'
                      width="300"
                      height="300"/>
                      {/* <img className='imageHome' src={article.image} alt="jardin/pic" width="300" height="300"/> */}
                      <div className="imageOverlay">
                          <h2 className='textOverlay'>{service.service}</h2>
                      </div>
                   </div>
                                  
                )
              })}            
            </article>
                 <div className='card'>
                      <button className="button buttonServices hoverable">Vea Nuestros Servicios</button>
                 </div>
                  
          </div>
  )
}
