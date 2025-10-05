// @ts-ignore
import "./About.scss";
import Buttompageinfo from "../Buttompageinfo/Buttompageinfo";
import Navmenu from "../Navmenu/Navmenu";



const About = () => {
  return (
    <>
    
      <Navmenu />
      <div className="about-container">
        <h1>About</h1>
        <div className="about-image">
          <img src="images/me.JPG" />
          <div className="about-me">
            <p>I’m a director and cinematographer based in Tel Aviv, currently studying at the Steve Tisch School of Film and Television at Tel Aviv University.</p>
            <p>My work is driven by a deep passion for visual storytelling — crafting images that not only look beautiful, but serve the story above all else.</p>
            <p></p>
          </div>
        </div>
      </div>
      <Buttompageinfo />

    </>
  );
};

export default About;
