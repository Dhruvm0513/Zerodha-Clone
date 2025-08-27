import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/Homepage';
import About from './landing_page/about/About';
import SignUp from './landing_page/signup/SignUp';
import Pricing from './landing_page/pricing/Pricing';
import Support from './landing_page/support/Support';
import Product from './landing_page/product/Product'; 
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);
