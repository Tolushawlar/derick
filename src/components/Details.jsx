import { PiCertificateFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import "../styles/Details.css";

const Details = () => {
  return (
    <>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <PiCertificateFill className="icon" />
            <h3>Experience</h3>
            <p>
              2+ years <br />
              Software Development
            </p>
          </div>
          <div className="details-container">
            <IoSchoolSharp className="icon" />
            <h3>Education</h3>
            <p>
              BA Computer Science
              <br />
              Some School
            </p>
          </div>
        </div>
        <div className="text-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            consectetur adipiscing elit ut aliquam purus sit. Auctor eu augue ut
            lectus. Fusce id velit ut tortor pretium viverra. At imperdiet dui
            accumsan sit amet. Cursus euismod quis viverra nibh cras. Fermentum
            posuere urna nec tincidunt praesent semper feugiat. Vitae nunc sed
            velit dignissim sodales ut eu sem. Diam sit amet nisl suscipit
            adipiscing bibendum est ultricies. Morbi tempus iaculis urna id
            volutpat lacus. Mauris cursus mattis molestie a iaculis at erat
            pellentesque adipiscing. Nibh praesent tristique magna sit amet.
            Mauris rhoncus aenean vel elit scelerisque mauris. Mattis nunc sed
            blandit libero volutpat. Sed velit dignissim sodales ut eu.
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
