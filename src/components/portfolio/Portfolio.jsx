import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/MobileApp.png";
import IMG2 from "../../assets/Walet.png";
import IMG3 from "../../assets/mobile-work3.jpg";
import IMG4 from "../../assets/mobile-work4.jpg";
import IMG5 from "../../assets/mobile-work5.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Movie Application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://dribbble.com/shots/17758002-MovieApp/attachments/12923927?mode=media"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/yukonnz"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Wallet Application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://dribbble.com/shots/17771729-WalletApp/attachments/12938946?mode=media"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/yukonnz"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Weather Application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mehmetadiguzel1"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/yukonnz"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Construction Application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mehmetadiguzel1"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/yukonnz"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>The Bank Application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Mehmetadiguzel1"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/yukonnz"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
