import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiInstagramLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_7q6lqf8', 'template_oh220gx', e.target, 'pscJXW1R6s634Uekk')
      .then((response) => {
        console.log('Email sent successfully:', response);
        e.target.reset(); // Reset the form
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle the error as needed
      });
  };
  
  return (
    <section id='contact' className="contact--section centered-content">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            {/* <h5>kunalkashyap.v@gmail.com</h5> */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kunalkashyap.v@gmail.com" target='_blank'>Send a message</a>
           </article>
          {/* { <article className="contact__option"> */}
            {/* <RiInstagramLine className='contact__option-icon'/> */}
            {/* <h4>Instagram</h4> */}
            {/* <h5>Kunal Kashyap</h5> */}
            {/* <a href='https://www.instagram.com/rawan_296/' target='_blank'>Send a message</a> */}
          {/* </article> */} 
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            {/* <h5>+91 7033561046</h5> */}
            <a href='https://api.whatsapp.com/send?phone=7033561046' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe