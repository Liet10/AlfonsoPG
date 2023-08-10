import React, { useEffect, useState } from 'react';
import './Home.Modules.css';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import  homeImg1 from '../Assets/img_home/jardin.jpg';
import  homeImg2 from '../Assets/img_home/piscina.jpg';
import  homeImg3 from '../Assets/img_home/comunidades.jpg';



export const Home = () => {
 const [imgeShowed, setImageShowed] = useState(0)

   

    const imgHome = [        
            
            homeImg1,       
            
            homeImg2,      
           
            homeImg3        
    ]
    const cantImg = imgHome.length
    console.log(cantImg)
    console.log(imgHome)

    const showBefore = ()=>{
        setImageShowed(imgeShowed ===  0 ? cantImg -1 : imgeShowed - 1 )
    }
    const showAfter = ()=>{
       setImageShowed(imgeShowed === cantImg -1 ? 0 : imgeShowed + 1)
    }

    // const [imgHome, setImgHome] = useState();
    // const [slideClass, setSlideClass] = useState('slideOut');

    // useEffect(() => {
    //     setTimeout(()=>{
    //         setImgHome(homeImg1)
    //         setSlideClass('slideIn')
    //     }, 1000)
       
    //   }, []);
  return (
    <div className='container'>
        <Header/>
        <div className='pageContainer'>
        <main className='mainContainer'>
            <section className='mainSection'>  
                <div className='imgContainer'>
                <button className='button1' onClick={showBefore}>Anterior</button>
                   {
                    imgHome.map((image, index)=>{
                        return ( 
                            <div key={index}>{imgeShowed === index &&
                                <img src={image} alt='img' width={400} height={400}/>  
                            }                              
                            </div>                               
                                                          
                                
                                )
                        })
                    } 
                        <button onClick={showAfter}>Siguiente</button>
                    </div>                          
                
                </section>
                <aside className='aside'>
                
                </aside>
            </main> 

            </div>
            
            <Footer/>

        </div>
    )
    }      

             
