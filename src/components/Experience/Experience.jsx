import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>FrontEnd Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expericenced</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Expericenced</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp__backend">
          <h3>BackEnd Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill />
              <div>
                <h4>Node</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
