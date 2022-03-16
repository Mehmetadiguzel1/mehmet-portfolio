import "./contact.css";
import { MdEmail } from "react-icons/md";
import { RiMessengerFill, RiWhatsappFill } from "react-icons/ri";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mafh392",
      "template_45tgkmq",
      form.current,
      "InX4ZiW4VH-8mThzz"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>contactt.mehmet@gmail.com</h5>
            <a href="mailto:contactt.mehmet@gmail.com" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Social Mehmet</h5>
            <a href="https://www.instagram.com/m.f.adgzl/" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>Email</h4>
            <h5>+1(555)5555555</h5>
            <a
              href="https://www.whatsapp.com/send?phone+123456789"
              target={"_blank"}
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End Of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
