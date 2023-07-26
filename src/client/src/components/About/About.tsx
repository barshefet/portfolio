import "./About.scss";
import Buttompageinfo from "../Buttompageinfo/Buttompageinfo";
import Navmenu from "../Navmenu/Navmenu";

const About = () => {
  return (
    <>
      <Navmenu />
      <div className="about-container">
        <h1>About</h1>
        <img src="images/me.JPG" alt="" />
        <div className="about-me">
        <p>My name is Bar Shefet. I'm a self-taught filmmaker that lives in Israel. I have a great passion for visual storytelling.</p>
        <p>Accidently fell in love with cinema and now here I am.</p>
        <p>Starting director and writer. I know how to code, edit, color grade, photoshop and composite - professionally.</p>
        <p>Own a Sony A7IV camera in which I ususally film my work with.</p>
        <p>I would love to colaborate with you on anything that is Industry related.</p> 
        </div>
      </div>
      <Buttompageinfo />
    </>
  );
};

export default About;
