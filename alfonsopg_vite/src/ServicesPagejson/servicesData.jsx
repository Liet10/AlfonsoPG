import { v4 as uuidv4 } from 'uuid';
import poda from '../assets/Services/poda.jpg';
import podadora from '../assets/Services/podadora.jpg';
import plantar from '../assets/Services/planta.jpg';
import sierra from '../assets/Services/sierra.jpg';
import riegos from '../assets/Services/riegos.jpg';
import plagas from '../assets/Services/controlPlagas.webp';



const garden = [
    {
      id: uuidv4(),
      img: poda,
      title: 'Poda de arboles y arbustos', 
      description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
  },
  {
    id: uuidv4(),
    img: podadora,
    title: 'Poda de césped y perfilamiento', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: plantar,
    title: 'transplante y eleccion de las mejores plantas para su jardín', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: plagas,
    title: 'Control de plagas', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: sierra,
    title: 'Corte de grandes árboles', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
},
{
    id: uuidv4(),
    img: riegos,
    title: 'Programación y mantenimiento de riegos', 
    description: ' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
}
]
export default garden;
