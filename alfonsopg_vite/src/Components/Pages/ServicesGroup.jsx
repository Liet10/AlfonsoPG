import React, { useEffect, useState } from 'react';
import { garden, pools, comunities, deliveries} from '../../ServicesPagejson/servicesData';
import { GettingService } from '../Helpers/GettingService';
import { useLocation } from 'react-router-dom';

export const ServicesGroup = () => {
    const location = useLocation()
    const [serviceData, setServiceData] = useState([]);
    const [title, setTitle] = useState('');



    useEffect(() => {
        const path = location.pathname;        
        if (path.includes('servicios/jardines')) {
          setServiceData(garden);
          setTitle('Jardines');
        } else if (path.includes('servicios/piscinas')) {
          setServiceData(pools);
          setTitle('Piscinas');
        } else if (path.includes('servicios/comunidades')) {
          setServiceData(comunities);
          setTitle('Comunidades');
        }else if (path.includes('servicios/domicilio')) {
            setServiceData(deliveries);
            setTitle('A domicilio');
        }
      }, [location]);
    

  return (
<div className='articleSection'>
    <GettingService title= {title} service= {serviceData} nameClass= 'servicesHome'/>           
</div>
  )
}
