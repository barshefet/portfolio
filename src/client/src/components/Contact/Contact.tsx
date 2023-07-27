import Navmenu from "../Navmenu/Navmenu";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <Navmenu />
      <div className="contact-container">
        <h1>Let's get in touch!</h1>
        <div className="contact-information">
          <div className="digits">
            <h2>+972 50 338 3090</h2>
            <h2>bar.shefet@gmail.com</h2>
            <div className="icons">
            <a href="https://www.instagram.com/bar_shefet/"><img className="icon1" src="images/insticon.png" /></a>
            <a href="https://github.com/barshefet"><img className="icon2" src="images/githublogo.png" alt="" /></a>
            </div>
          </div>
          <img className="frame" src="images/frame.png" />
          <img className="painting" src="images/girl-balloon.png" />
        </div>
      </div>
    </>
  );
};

export default Contact;
