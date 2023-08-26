import React from 'react'
import ImageWithFallback from './ImageWithFallBack';
import { Link } from 'react-router-dom';


export const GettingService = ({title, service, nameClass}) => {
  return (
    <div>
         <h2 className="align-center articleTitle">{title}</h2>
            <article  className={nameClass}>
            {service.map(item => {
                return (                        
                    <div key={item.id} className="imageContainer">
                        <ImageWithFallback
                        src={item.imgW}
                        srcWebP={item.img}
                        alt= 'ImagenServicio'
                        className= 'imageHome'
                        width="300"
                        height="300"/>
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
