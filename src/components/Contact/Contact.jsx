import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ehmqfq', 'template_81ah7w3', form.current, 'a0mUGABVxc1FbCEaT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailRead />
            <h4>Email</h4>
            <h5>Emial Me</h5>
            <a href="mailto:meer.hassan1227@gmail.com" target='_blank'>Send an Email</a>
          </article>
          <article className="contact__option">
            <PiMessengerLogoBold />
            <h4>Messenger</h4>
            <h5>Let's Chat on Messesnger</h5>
            <a href="https://m.me/?" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>Click below to Chat!</h5>
            <a href="https://wa.me/+923097280432" target='_blank'>WhatsApp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name Here' required/>
          <input type="email" name='email' placeholder='Enter Email Here' required />
          <textarea name="message" rows="7" placeholder='Type Message Here!'></textarea>
          <button onClick={() => alert("Email has been Sent")} type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
