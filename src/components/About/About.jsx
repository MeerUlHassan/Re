import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { LuFolderOpenDot } from "react-icons/lu";
import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
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
              <small>50+ World-Wide</small>
            </article>

            <article className="about__card">
              <LuFolderOpenDot className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis sit natus eum. Tempore reprehenderit omnis autem possimus tempora ad perferendis, assumenda eum dolorem temporibus hic sed magnam tenetur esse quisquam!
          </p>
          <a href="#contact" className="btn btn-primary"> Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
