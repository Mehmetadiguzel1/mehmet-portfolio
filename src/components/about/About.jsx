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
              <small>2+ Years Working Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className="about__card">
              <MdOutlineFolderShared className="about__icon" />
              <h5>Projects</h5>
              <small>40+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            officiis nam assumenda vel corporis sapiente autem labore. Maxime,
            omnis dolorem tenetur suscipit est quibusdam, nesciunt accusantium
            nostrum eos similique dolore.
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
