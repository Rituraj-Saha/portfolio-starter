import React from 'react'
import './Navbar.css'
import Blogs from '../Blogs/Blogs.jsx'

import {Outlet, Link } from "react-router-dom";
import Toogle from './Toogle';
import {Link as Link2} from 'react-scroll'
const Navbar = () => {
  
  return (
   
    <div>
      <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
          <div className="n-name">Rituraj</div>
          <Toogle></Toogle>
        </div>
        <div className="n-right">
          <div className="n-list">
              
            <ul style={{ listStyleType: 'none' }}>
              {/* <Link2 spy={true} to='Navbar' smooth={true} activeClass="activeClass"> */}
              <li>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/portfolio">
                Home
                </Link>
              </li>
              {/* </Link2>  */}

              <Link2 spy={true} to='Services' smooth={true}>
              <li id='servicesLink'>
                {/* <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/portfolio"> */}
                  Services
                  {/* </Link> */}
                  </li>
              </Link2>
              <Link2 spy={true} to='Experience' smooth={true}>
              <li id='ExperienceLink'>
                {/* <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/portfolio"> */}
                Experience
                  {/* </Link> */}
                </li>
              </Link2>

              <Link2 spy={true} to='Portfolio' smooth={true}>
              <li id='PortfolioLink'>
                {/* <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/portfolio"> */}
                Portfolio
                  {/* </Link> */}
                </li>
              </Link2>

              <Link2 spy={true} to='Testimonial' smooth={true}>

              <li id='Testimonialink'>
                {/* <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/portfolio"> */}
                Testimonial
                  {/* </Link> */}
                  </li>
              </Link2>
             
              
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
