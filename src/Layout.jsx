import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer';




export default function () {


  
  return <div>
  <Navbar/>
  <div className='container container-lg container-fluid container-md container-sm container-xl '>
    <Outlet></Outlet>
  </div>
  <Footer></Footer>
  </div>
}
