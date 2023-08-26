import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Search } from '../Pages/Search';
import { IsDesktop } from '../../../Hooks/IsDesktop';
import { GettingService } from '../Helpers/GettingService';
import { deliveries } from '../../ServicesPagejson/servicesData';
import { useLocation } from 'react-router-dom';

export const Aside = () => {
    const [deliveryData, setDeliveryData] = useState([]);
    const form = useRef()
    const location = useLocation()
    useEffect(()=>{
        setDeliveryData(deliveries)
    }, [])
     const isDesktop = IsDesktop()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_atnvf4o', 'template_0be5oxq', form.current, 'T6DeC49IOaash3B-n')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
      const isServicePage = location.pathname === '/servicios'
  return (
    <aside className="sideBar">
         <article className='articleDelivery'>
            {isServicePage && <GettingService title= 'A Domicilio' service={deliveryData} nameClass= 'servicesHome1'/>}          
         </article>
            <section className="offer">
                <h3 className="title">Oferta actual</h3>
                <p className="offerText">Te ponemos el cloro, ph o sal para tu piscinaen la puerta de tu casa 10% de descuento si lo solicitas  online</p>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Nombre" />
                    <input type="email" name="email" placeholder="Correo" />
                    <input type="text" name="phone" placeholder="Teléfono" />
                    <textarea id="address" placeholder="Dirección"></textarea>
                    <input className="hoverable" type="submit" id="save" value="Guardar" />
                </form>
            </section>
        </aside>
  )
}
