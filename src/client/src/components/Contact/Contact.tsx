import Navmenu from "../Navmenu/Navmenu";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <Navmenu />
      <div className="contact-container">
        <h1>Let's get in touch!</h1>
        <div className="contact-information">
           <div className="digits"> <h2>+972 50 338 3090</h2></div>
            <h2>bar.shefet@gmail.com</h2>
          <img className="frame" src="images/frame.jpg" />
          <img className="painting" src="images/girl-balloon.png" />
        </div>
      </div>
    </>
  );
};

export default Contact;
