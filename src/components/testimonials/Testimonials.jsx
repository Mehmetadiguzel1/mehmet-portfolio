import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avtr1.jpg";
import AVTR2 from "../../assets/avtr2.jpg";
import AVTR3 from "../../assets/avtr3.jpg";
import AVTR4 from "../../assets/avtr4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide, Pagination } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Onur Tasdamer</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas
            aspernatur officia aliquid molestiae sed mollitia fugiat! Officia,
            quam explicabo?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar one" />
          </div>
          <h5 className="client__name">Hilal Cay</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas
            aspernatur officia aliquid molestiae sed mollitia fugiat! Officia,
            quam explicabo?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar one" />
          </div>
          <h5 className="client__name">Umutcan Erkut</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas
            aspernatur officia aliquid molestiae sed mollitia fugiat! Officia,
            quam explicabo?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar one" />
          </div>
          <h5 className="client__name">Emre Yildirim</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas
            aspernatur officia aliquid molestiae sed mollitia fugiat! Officia,
            quam explicabo?
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
