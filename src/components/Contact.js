import React from "react";
import portrait from "../img/portrait.svg";

const Contact = props => {
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div className="contact-portrait">
          <img src={portrait} alt="" />
        </div>

        <div className="contact-heading">
          <h2>Let's talk about your ideas!</h2>
        </div>

        <div className="form-container container">
          <form action="#" className="contact-form">
            <div className="field">
              <label htmlFor="name">First Name</label>
              <input type="text" id="name" required />
            </div>

            <div className="field">
              <label htmlFor="name">Last Name</label>
              <input type="text" id="name" required />
            </div>

            <div className="field">
              <label htmlFor="email">Company</label>
              <input type="text" id="company" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5" />
            </div>

            <button className="contact-btn">Submit &rarr;</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
