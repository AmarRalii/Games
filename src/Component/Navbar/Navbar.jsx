import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-sm.png'
export default function Navbar() {
  return  <nav
    className="navbar navbar-expand-sm navbar-light "
  >
    <div className="container text-white">
      <a className="navbar-brand text-white" href="#"><img src={logo} className='w-25' alt="" /> GAME REVIEWS
</a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mx-auto mt-2 mt-lg-0 ">
         
          <li className="nav-item  ">
            <Link className="nav-link text-white" to={''}>MMORPG</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to={'shooter'}>SHOOTER</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to={'sailing'}>SAILING</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to={'PERMADEATH'}>PERMADEATH</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to={'Superhero'}>SUPER HERO</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to={'Pixel'}>PIXEL</Link>
          </li>
         

       
          
         
        </ul>
        
      </div>
      <div className="Links">
        <a href="https://www.facebook.com/amar.elfarargy" target='_blank'><i className='fa-brands fa-facebook p-2 cursor-pointer '></i></a>
        <a href="https://www.linkedin.com/in/amar-reda-3b6020238/" target='_blank'><i className='fa-brands fa-linkedin p-2 cursor-pointer'></i></a>
        <a href="https://github.com/AmarRalii" target='_blank'><i className='fa-brands fa-github p-2 cursor-pointer'></i></a>
        
      </div>
    </div>
  </nav>
  
  
}
