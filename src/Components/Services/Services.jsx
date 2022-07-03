import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from '../../RITURAJ-SAHA-Resume-II.pdf'
const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
          <span>My Awesome</span>
          <span>services</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Provident  animi error sed. Vel consectetur aperiam dolores necessitatibus <br/>consequatur ab expedita! Nemo natus nobis laboriosam sit quod dolor libero animi deserunt</span>
          <a href={Resume}>
          <button className="button s-button">Download CV</button>
          </a>
         
          <div className="blur s-blur1" style={{ background:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">
          <div style={{left: '14rem'}}>
            <Card
              emoji ={HeartEmoji}
              heading = {'Design'}
              details = {"Figma, sketch, photoshop,xd"}/>
            </div>

            <div style={{top: "12rem", left: '-4rem'}}>
            <Card
              emoji ={Glasses}
              heading = {'Developer'}
              details = {"Android, web, Java spring,react"}/>
            </div>
            <div style={{top: "19rem", left: '12rem'}}>
            <Card
              emoji ={Humble}
              heading = {'UI/UX'}
              details = {"Android, web, Java spring,react"}/>
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)",border:"solid"}}></div>
        </div>
          
    </div>
  )
}

export default Services
