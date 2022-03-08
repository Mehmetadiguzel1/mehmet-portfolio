import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaDribbble } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mehmet-adiguzel-195891167/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Mehmetadiguzel1?tab=repositories"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <FaDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
