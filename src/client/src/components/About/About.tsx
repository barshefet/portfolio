// @ts-ignore
import "./About.scss";
import "../Photography/Photography.scss";
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
            <p className="first-p">
              I’m a director and cinematographer based in Tel Aviv, currently
              studying at the Steve Tisch School of Film and Television at Tel
              Aviv University.
            </p>
            <p>
              As a director, I care deeply about emotion — engaging the audience
              through stories that leave an impact and keep them hooked. My goal
              is to create films that stay with the viewer long after the screen
              fades to black.
            </p>
            <p>
              As DOP, I meticulously plan every shoot from
              start to finish, leaving no surprises on set — so that creativity
              and improvisation can emerge freely when needed. I’m drawn to
              light that speaks on its own, shaping emotion and atmosphere
              through visual storytelling. I strive for beautiful imagery that
              always puts the story first.
            </p>
            <p>
              I’m always dynamic, constantly seeking new ways to innovate and
              refine the cinematic language.
            </p>
            <p>
              I’m also a proud member of the Levontin Collective, a creative
              group of filmmakers based in Tel Aviv.
            </p>
          </div>
        </div>
      </div>
      <div className="photos-container">
        <div className="grid-container">
          <div className="column">
            <img src="images/set/1.jpg" className="img1" alt="" />
            <img src="images/set/2.jpg" className="img2" alt="" />
          </div>
          <div className="column">
            <img src="images/set/7.png" className="img7" alt="" />
            <img src="images/set/4.jpg" className="img4" alt="" />
            <img src="images/set/8.PNG" className="img8" alt="" />
          </div>
          <div className="column">
            <img src="images/set/5.jpg" className="img5" alt="" />
            <img src="images/set/9.PNG" className="img9" alt="" />
            <img src="images/set/3.jpg" className="img3" alt="" />
          </div>
          <div className="column">
            <img src="images/set/6.png" className="img6" alt="" />
            <img src="images/set/10.jpg" className="img10" alt="" />
          </div>
        </div>
      </div>
      <Buttompageinfo />
    </>
  );
};

export default About;
