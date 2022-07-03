import React from 'react'
import './intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Rituraj</span>
                    <span>text will come from db text will come from dbtext will come from dbtext will come from dbtext will come from dbtext will come from dbtext will come from db and that will be my skills
                    </span>
                </div>
                <button className="i-button button">Hire me</button>
                <div className="i-icons">
                    <a href="#">
                        <img src={Github} alt="" />
                    </a>
                    <a href="#">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="#">
                        <img src={Instagram} alt="" />
                    </a>

                </div>
            </div>
            <div className="i-right">

                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{ top: '-4%', left: '60%' }}>
                    <FloatingDiv image={Crown} txt1='WEB' txt2='DEVELOPER'></FloatingDiv>
                </div>
                <div style={{ top: '23rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1='Android' txt2='DEVELOPER'></FloatingDiv>
                </div>
                {/* blur divs */}
                <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
                <div className='blur' style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    )
}

export default intro
