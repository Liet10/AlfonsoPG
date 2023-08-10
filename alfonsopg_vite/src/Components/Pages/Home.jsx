import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import  garden1  from '../../assets/homeImg/jardin.jpg';
import  Pool2  from '../../assets/homeImg/piscina.jpg';
import  Comunity3  from '../../assets/homeImg/comunidades.jpg';
import  Delivery1  from '../../assets/homeImg/delivery1.jpg';


export const Home = () => {
  const homeArticles = [
    {
        id: uuidv4(),
        service: 'Jardines',
        image: garden1,

    },
    {
      id: uuidv4(),
      service: 'Piscinas',
      image: Pool2,

      },  
      {
        id: uuidv4(),
        service: 'Comunidades',
        image: Comunity3,

      },
      {
        id: uuidv4(),
        service: 'A Domicilio',
        image: Delivery1,

        },
  ]
  return (
    <div className="articleSection">
            <article className="servicesHome"> 
              {homeArticles.map(article=>{
                return (
                    <div  className="imageContainer" key={article.id}>
                      <img className='imageHome' src={article.image} alt="jardin/pic" width="300" height="300"/>
                      <div className="imageOverlay">
                          <h2 className='textOverlay'>{article.service}</h2>
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
