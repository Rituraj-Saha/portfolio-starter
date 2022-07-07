import React from 'react'
import './Navbar.css'
import Blogs from '../Blogs/Blogs.jsx'

import { BrowserRouter, Routes, Route,Outlet, Link } from "react-router-dom";

const Navbar = () => {
  
  return (
   
    <div>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Rituraj</div>
          <span className="toogle">toggle</span>
        </div>
        <div className="n-right">
          <div className="n-list">
              
            <ul style={{ listStyleType: 'none' }}>
              <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/portfolio">Portfolio</Link></li>
              <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/portfolio">Services</Link></li>
              <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/portfolio">Experiance</Link></li>
              <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/portfolio">Testemonial</Link></li>
              
              <li> <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/portfolio">Testemonial</Link></li>
              
              <li onClick={()=>{
                console.log("Clicked on Blogs")
              }}>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Blogs">Blogs</Link> 
               
              </li>
            </ul>

          </div>
          <button className="n-button button-without-shadow">
            Contact
          </button>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Navbar
