import React from "react";
import "./services.css";
import { BiBadgeCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Wireframing</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5> Prototyping</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>User Interface (UI) Design</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>User Experience (UX) Design</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Responsive Design</h5>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Web Application Development</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>E-Commerce Development</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Custom Software Development</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Mobile App Development</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Web Maintenance and Support</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Consultation and Strategy</h5>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Project Management</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Project Planning</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Scope Definition and Management</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Timeline and Schedule Management</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Budget Management</h5>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <h5>Quality Assurance</h5>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
