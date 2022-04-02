import React from "react";
import "./about.css";
import ME from "../../assets/me-red.png";
import { RiAwardLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderShared } from "react-icons/md";
const About = () => {
  return (
    <section id="about">
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardLine className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <MdOutlineFolderShared className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am courteous and enthusiastic about IT and everything that
            revolves around it. Web development and design, such as making apps,
            UI/UX design and creating websites, have recently piqued my
            interest. I acquired expertise working in this field after being
            invited to join a friend's start-up firm as a front-end developer.
            I'm interested in gaining additional experience in this profession
            because it complements my academics. As a result, I'm seeking a firm
            that would provide me with a position among its developers. In
            exchange, I would give you my whole attention and be a nice and
            courteous member of your team.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
