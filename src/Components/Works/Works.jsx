import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

function Works() {
  return (
    <div className='works'>
      <div className="awesome">
          <span>Works For All This</span>
          <span>Brands & Clients</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Provident  animi error sed. Vel consectetur aperiam dolores necessitatibus <br/>consequatur ab expedita! Nemo natus nobis laboriosam sit quod dolor libero animi deserunt</span>
          
          <button className="button s-button">Hire me</button>
          
         
          <div className="blur s-blur1" style={{ background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-seccircle">
                <img src={Upwork} alt="" />
                </div>
                <div className="w-seccircle">
                <img src={Fiverr} alt="" />
                </div>
                <div className="w-seccircle">
                <img src={Amazon} alt="" />
                </div>
                <div className="w-seccircle">
                <img src={Shopify} alt="" />
                </div>
                <div className="w-seccircle">
                <img src={Facebook} alt="" />
                </div>
                {/* background circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    </div>
  )
}

export default Works
