import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avtr1.jpg";
import AVTR2 from "../../assets/avtr2.jpg";
import AVTR3 from "../../assets/avtr3.jpg";
import AVTR4 from "../../assets/avtr4.jpg";

// Import Swiper React components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Onur Tasdemir",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quasaspernatur officia aliquid molestiae sed mollitia fugiat! Officia,quam explicabo?",
  },
  {
    avatar: AVTR2,
    name: "Hilal Cay",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quasaspernatur officia aliquid molestiae sed mollitia fugiat! Officia,quam explicabo?",
  },
  {
    avatar: AVTR3,
    name: "Umutcan Erkut",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quasaspernatur officia aliquid molestiae sed mollitia fugiat! Officia,quam explicabo?",
  },
  {
    avatar: AVTR4,
    name: "Emre Yildirim",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quasaspernatur officia aliquid molestiae sed mollitia fugiat! Officia,quam explicabo?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
