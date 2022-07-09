import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from 'react'
import { useState } from 'react';
const Contact = () => {
    const form = useRef();

    const [done,setDone]=useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m5o5eqa', 'template_lvu635g', form.current, '_Z74QMv1iC0M3V8gJ')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact Me</span>
                <div className="blur c-blur1" style={{background: "#ABF1FF94",border:"solid"}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="user" placeholder='Name' />
                <input type="text" name="user-email" className="user" placeholder='Email' />
                <textarea name="message" className="user" placeholder='Message'></textarea>
                <input type="submit" value="Send" className='button'/>
                <div className="blur c-blur2" style={{background: "var(--purple)",border:"solid"}}></div>
                <span>{done && "Thanks for contacting me, I will comeback to you shortly"}</span>
            </form>
        </div>
    </div>
  )
}

export default Contact