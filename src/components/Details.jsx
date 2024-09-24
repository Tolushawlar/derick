import { PiCertificateFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import "../styles/Details.css";

const Details = () => {
  return (
    <>
      <div className="about-details-container">
        <div className="about-containers abouti">
          <div className="details-container">
            <PiCertificateFill className="icon" />
            <h3>Experience</h3>
            <p>
              3+ years <br />
              Software Development
            </p>
          </div>
          <div className="details-container">
            <IoSchoolSharp className="icon" />
            <h3>Education</h3>
            <p>
              Federal University of Technology
              <br />
              Akure, Nigeria.
            </p>
          </div>
        </div>
        <div className="text-container">
          <p>
            I have a strong background in building robust, scalable, and user-focused web applications using MongoDB, Express, React, and Node.js. I specialize in crafting efficient full stack solutions, from dynamic front-end interfaces to secure and high-performing back-end systems, ready to solve complex problems and deliver quality products that drive success.
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
