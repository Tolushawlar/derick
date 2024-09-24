import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import "../styles/Contact.css"

const Contact = () => {
  return (
    <>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            {/* <TfiEmail className="icon contact-icon email-icon" /> */}
            <p>
              <a className="email" href="mailto:oluwasolaowoyemi.i@gmail.com">
                oluwasolaowoyemi.i@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/olusola-itunu"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <FaLinkedin /> */}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
