import IMG from "/assets/profile-pic.png";
import Socials from "./Socials";
import "../styles/Profile.css"


const Profile = () => {
  const handleDownloadResume = () => {
    window.open('https://res.cloudinary.com/dtlxunbzr/image/upload/v1727186011/my_resume-Owoyemi_Olusola_Itunu_qvtary.pdf', '_blank');
  };

  const handleContactInfo = () => {
    window.location.href = '#contact';
  };

  return (
    <section className="profile">
      <div className="section__pic-container">
        <img className="home-profile" src={`https://res.cloudinary.com/dtlxunbzr/image/upload/v1727186028/Me_utdbl8.jpg`} alt="Derrick's profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Owoyemi Olusola Itunu</h1>
        <p className="section__text__p2">MERN Stack Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleDownloadResume}>
            Download Resume
          </button>
          <button className="btn btn-color-1" onClick={handleContactInfo}>
            Contact Info
          </button>
        </div>
        <Socials />
      </div>
    </section>
  );
};

export default Profile;

