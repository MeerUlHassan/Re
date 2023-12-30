import React from "react";
import "./footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer__container">
      <footer>
        <div className="about-sec">
          <h2>About</h2>
          <p>
            I would love to chat with you about any web development internships
            or freelance opportunities you have available!
          </p>
        </div>
        <div className="links">
          <h2>Links</h2>
          <ul className="permalink">
            <li>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#service">Services</a>
              <a href="#portfolio">Phortfolio</a>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="services-ft">
          <h2>Services</h2>
          <h5>Web Design</h5>
          <h5>Web Development</h5>
          <h5>Business Strategy</h5>
          <h5>UI/UX Designing</h5>
          <h5>Mobile App Developemt</h5>
        </div>
        <div className="question">
          <article>
            <h2>Have a question?</h2>
            <div className="ques__ft">
              <IoLocationSharp />
              <p>573 Al-Rehman Gardens phase-2 Lahore</p>
            </div>
          </article>
          <article>
            <div className="ques__ft">
              <FaPhoneVolume />
              <p>+92 308 4421858</p>
            </div>
          </article>
          <article>
            <div className="ques__ft">
              <MdAlternateEmail />
              <p className="email">meer.hassan1227@gmail.com</p>
            </div>
          </article>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
