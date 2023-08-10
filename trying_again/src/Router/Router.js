
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import React from 'react'
import { Home } from '../Components/Pages/Home';
import { Services } from '../Components/Pages/Services';
import { Benefics } from '../Components/Pages/Benefics';
import { Nosotros } from '../Components/Pages/Nosotros';
import { NavBar } from '../Components/NavBar';

export const Router= () => {
  return (
    <div>
    <NavBar/>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navigate to='/inicio' />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/beneficios' element={<Benefics />} />
        <Route path='/nosotros' element={<Nosotros />} />
        {/* <Route path='/contacto' element={<Contact />} /> */}
</Routes>      

    </BrowserRouter>

    </div>
  )
}

