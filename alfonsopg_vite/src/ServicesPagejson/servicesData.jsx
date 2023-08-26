import { v4 as uuidv4 } from 'uuid';
// Home 
import  garden1  from '../assets/homeImg/jardin.jpg';
import  garden1W from '../assets/homeImg/jardin.webp';
import  Pool2  from '../assets/homeImg/piscina.jpg';
import  Pool2W  from '../assets/homeImg/piscina.webp';
import  Comunity3  from '../assets/homeImg/comunidades.jpg';
import  Comunity3W  from '../assets/homeImg/comunidades.webp';
import  Delivery1  from '../assets/homeImg/delivery1.jpg';
import  Delivery1W  from '../assets/homeImg/delivery1.webp';
// Garden
import poda from '../assets/Services/poda.jpg';
import podaW from '../assets/Services/poda.webp';
import podadora from '../assets/Services/podadora.jpg';
import podadoraW from '../assets/Services/podadora.webp';
import plantar from '../assets/Services/planta.jpg';
import plantarW from '../assets/Services/planta.webp';
import sierra from '../assets/Services/sierra.jpg';
import sierraW from '../assets/Services/sierra.webp';
import riegos from '../assets/Services/riegos.jpg';
import riegosW from '../assets/Services/riegos.webp';
import plagas from '../assets/Services/controlPlagas.jpg';
import plagasW from '../assets/Services/controlPlagas.webp';
// Pools
import mantenimiento from '../assets/Services/Piscinas/mantenimiento.jpg';
import mantenimientoW from '../assets/Services/Piscinas/mantenimiento.webp';
import control from '../assets/Services/Piscinas/control.jpg';
import controlW from '../assets/Services/Piscinas/control.webp';
import luces from '../assets/Services/Piscinas/luces.jpg';
import lucesW from '../assets/Services/Piscinas/luces.webp';
import celula from '../assets/Services/Piscinas/celula.jpg';
import celulaW from '../assets/Services/Piscinas/celula.webp';
import algas from '../assets/Services/Piscinas/algas.jpg';
import algasW from '../assets/Services/Piscinas/algas.webp';
import quimica from '../assets/Services/Piscinas/quimicos.jpg';
import quimicaW from '../assets/Services/Piscinas/quimicos.webp';
// Comunities
import jardin from '../assets/Services/Comunidades/jardin.jpg';
import jardinW from '../assets/Services/Comunidades/jardin.webp';
import piscina from '../assets/Services/Comunidades/piscina.jpg';
import piscinaW from '../assets/Services/Comunidades/piscina.webp';
import limpieza from '../assets/Services/Comunidades/limpieza.jpg';
import limpiezaW from '../assets/Services/Comunidades/limpieza.webp';
import cristales from '../assets/Services/Comunidades/cristales.jpg';
import cristalesW from '../assets/Services/Comunidades/cristales.webp';
import aceras from '../assets/Services/Comunidades/aceras.jpg';
import acerasW from '../assets/Services/Comunidades/aceras.webp';
import pintura from '../assets/Services/Comunidades/pintura.jpg';
import pinturaW from '../assets/Services/Comunidades/pintura.webp';
// Delivery
import deliveryPiscina from '../assets/Services/Delivery/DeliveryPiscina.jpeg';
import deliveryPiscinaW from '../assets/Services/Delivery/DeliveryPiscina.webp';
import deliveryJardines from '../assets/Services/Delivery/DeliveryJardin.jpeg';
import deliveryJardibesW from '../assets/Services/Delivery/DeliveryJardin.webp';
import Delivery from '../assets/Services/Delivery/Delivery.jpeg';
import DeliveryW from '../assets/Services/Delivery/Delivery.webp';





export const homeServices = [
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
        service: 'Domicilio',
        image: Delivery1,
        imageW: Delivery1W,


        },
  ]
export const garden = [
    {
      id: uuidv4(),
      img: poda,
      imgW: podaW,
      title: 'Poda arboles y arbustos', 
      description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
  },
  {
    id: uuidv4(),
    img: podadora,
    imgW: podadoraW,
    title: 'Poda, desbroce y perfilar césped', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: plantar,
    imgW: plantarW,
    title: 'Plantar, trasplantar y elección de plantas', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: plagas,
    imgW: plagasW,
    title: 'Control de plagas', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: sierra,
    imgW: sierraW,
    title: 'Arboricultura en árboles de gran tamaño', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: riegos,
    imgW: riegosW,
    title: 'Programación y mantenimiento de riegos', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
}
]
export const pools = [
    {
      id: uuidv4(),
      img: mantenimiento,
      imgW: mantenimientoW,
      title: 'Mantenimiento general del vaso de la piscina', 
      description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
  },
  {
    id: uuidv4(),
    img: control,
    imgW: controlW,
    title: 'Control de cloro Ph y otros', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: luces,
    imgW: lucesW,
    title: 'Mantenimiento y recambio de luces', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: celula,
    imgW: celulaW,
    title: 'Mantenimiento de cloradores', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: algas,
    imgW: algasW,
    title: 'Control de algas', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: quimica,
    imgW: quimicaW,
    title: 'Productos químicos a domicilio', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
}
]
export const comunities = [
    {
      id: uuidv4(),
      img: jardin,
      imgW: jardinW,
      title: 'Mantenimiento de Jardines en comunidades', 
      description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
  },
  {
    id: uuidv4(),
    img: piscina,
    imgW: piscinaW,
    title: 'Mantenimiento de Piscinas en comunidades', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: limpieza,
    imgW: limpiezaW,
    title: 'Limpieza, zonas comunes', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: cristales,
    imgW: cristalesW,
    title: 'Cristalería', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: aceras,
    imgW: acerasW,
    title: 'Aceras y escaleras', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: pintura,
    imgW: pinturaW,
    title: 'Lijado y Pinturas', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
}
]
export const deliveries = [
    {
      id: uuidv4(),
      img: deliveryPiscina,
      imgW: deliveryPiscinaW,
      title: 'Productos químicos para piscinas a domicilio', 
      description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
  },
  {
    id: uuidv4(),
    img: deliveryJardines,
    imgW: deliveryJardibesW,
    title: 'Plantas a domicilio', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: Delivery,
    imgW: DeliveryW,
    title: 'Eliminación y traslado de residuos jardineros', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
}
]
// export default {garden, pools};
