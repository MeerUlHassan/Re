import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { LuFolderOpenDot } from "react-icons/lu";
import ME from "../../assets/about-me.jpeg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} className="my-img" alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clints</h5>
              <small>20+ World-Wide</small>
            </article>

            <article className="about__card">
              <LuFolderOpenDot className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
            Greetings!👋 I'm a dedicated student and frontend developer with a
            passion for crafting exceptional user experiences. Currently
            pursuing Bs Iformation Engineering Technology, I possess a solid
            foundation in FrontEnd Technologies(HTML, CSS, and JavaScript) and
            frameworks like (React-Js)🚀, complemented by hands-on experience in
            projects like YouTube Clone, KFC Clone and many. My journey reflects
            a commitment to innovation and a constant pursuit of learning.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
