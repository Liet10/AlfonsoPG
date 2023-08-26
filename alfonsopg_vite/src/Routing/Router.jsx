import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Header } from '../Components/layouts/Header';
import { Aside } from '../Components/layouts/Aside';
import { Footer } from '../Components/layouts/Footer';
import { Home } from '../Components/Pages/Home';
import { Services } from '../Components/Pages/Services';
import { AboutUs } from '../Components/Pages/AboutUs';
import { WhyUs } from '../Components/Pages/WhyUs';
import { Contact } from '../Components/Pages/Contact';
import { Service } from '../Components/Pages/Service';
import { Search } from '../Components/Pages/Search';
import { IsDesktop } from '../../Hooks/IsDesktop';
import { ServicesGroup } from '../Components/Pages/ServicesGroup';
import { SearchComponent } from '../Components/Pages/SearchComponent';

export const Router = () => {
  const isDesktop = IsDesktop()
  return (
    <BrowserRouter>
      <Header />      
      {/* <Main/> */}
      <div className='main'>                      
          <Routes>
            <Route path='' element={<Navigate to='/inicio' />} />
            <Route path='/inicio' element={<Home />} />
            <Route path='/servicios' element={<Services />} />
            <Route path='/servicios/:servicio' element={<ServicesGroup />}/>
            <Route path='/servicio/:id' element={<Service />} />
            <Route path='/buscar/:texto' element={<SearchComponent />} />
            <Route path='/acerca' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={
              <>
                <h1>Error 404</h1>
                <p>No se ha encontrado la pagina</p>
              </>
            } />
          </Routes>              
      </div>
      <Aside />
      <Footer />
    </BrowserRouter>
  )
}
