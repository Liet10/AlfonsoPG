import React, { useEffect, useState } from 'react';
import { garden, pools} from '../../ServicesPagejson/servicesData';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../Helpers/ImageWithFallBack';
import { GettingService } from '../Helpers/GettingService';


export const Services = () => {
const [gardenData, setGardenData] = useState([]);
const [poolData, setPoolData] = useState([]);
const [comunityData, setComunityData] = useState([]);
const [deliveryData, setDeliveryData] = useState([]);



useEffect(()=>{
    setGardenData(garden);
    setPoolData(pools); 

},[])

    return (
        <div className='articleSection'>
            <GettingService title= 'Jardines' service= {gardenData}/>
            {/* <h2 className="align-center articleTitle">Jardines</h2>
            <article  className="servicesHome">
            {gardenData.map(item => {
                return (                        
                    <div key={item.id} className="imageContainer">
                        <img src={item.img} className='imageHome' alt="jardin/pic" width="300" height="300" />
                        <div className="imageOverlay">
                            <Link to={'/servicio/'+ item.id} className='textOverlay'><h2 >{item.title}</h2></Link>
                            
                        </div>
                    </div>                      

                )
            })}
            </article> */}
            <GettingService title= 'Piscinas' service= {poolData}/>
            {/* <h2 className="align-center articleTitle">Piscinas</h2>
            <article  className="servicesHome">
            {poolData.map(item => {
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
            </article> */}
        </div>

    )
}
