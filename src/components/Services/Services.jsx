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
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
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
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiBadgeCheck className="list__icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
