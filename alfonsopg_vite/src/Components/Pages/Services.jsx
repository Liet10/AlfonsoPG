import React, { useEffect, useState } from 'react';
import { garden, pools, comunities} from '../../ServicesPagejson/servicesData';
import { GettingService } from '../Helpers/GettingService';


export const Services = () => {
const [gardenData, setGardenData] = useState([]);
const [poolData, setPoolData] = useState([]);
const [comunityData, setComunityData] = useState([]);




useEffect(()=>{
    setGardenData(garden);
    setPoolData(pools); 
    setComunityData(comunities);
},[])

    return (
        <div className='articleSection'>
            <GettingService title= 'Jardines' service= {gardenData} nameClass= 'servicesHome1'/>           
            <GettingService title= 'Piscinas' service= {poolData} nameClass= 'servicesHome1'/> 
            <GettingService title= 'Comunidades' service= {comunityData} nameClass= 'servicesHome1'/>
        </div>

    )
}
