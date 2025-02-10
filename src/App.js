import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Menu from './Menu';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import MutualFunds from './Components/MutualFunds';
import Insurance from './Components/Insurance';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Loans from './Components/Loans';



export default function App() {
  return (
    <BrowserRouter>
    <Menu />
    <div>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/insurance' element={<Insurance/>}></Route>
        <Route path='/mutualfunds' element={<MutualFunds/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/loans' element={<Loans/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

      </Routes>
      
      
    </div>
    <Footer />
    </BrowserRouter>
  )
}
