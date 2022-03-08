import React from "react";
import "./services.css";
import { BsCheck2All } from "react-icons/bs";
const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
