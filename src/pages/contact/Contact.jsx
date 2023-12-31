import { useEffect } from "react";
import "./contact.css";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact || Halal Jibika" ;
  });
  return (
    <>
      <div className="contact-container">
        <h2 className="title">Contact Us</h2>
        <p className="description">
          Have questions or feedback? Feel free to reach out to us.
        </p>
        <div className="contact-cards">
          <div className="contact-card">
            <h3>Contact Information</h3>
            <p>
              <strong>Email:</strong> mdsobujredoy@gmail.com <br />
              <strong>Phone:</strong> +08801731620933 <br />
              <strong>Address:</strong> Beraid Dhaka
            </p>
          </div>

          {/* Company Contact Information */}
          <div className="contact-card">
            <h3>Company Contact</h3>
            <p>
              <strong>Contact Name:</strong> Md Sobuj Hridoy <br />
              <strong>Email:</strong> sbjPrograming@gmail.com <br />
              <strong>WhatsApp:</strong> +08801756425845
            </p>
          </div>
        </div>
        <form className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />

          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
