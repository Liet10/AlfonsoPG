import { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';

export const Aside = () => {
    const form = useRef()
    useEffect(()=>{
        console.log(form)
    }, [])

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
  return (
    <aside className="sideBar">
            <section className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text" id="search_field" />
                    <input className="hoverable" type="submit" value="Buscar"/>
                </form>
            </section>
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
