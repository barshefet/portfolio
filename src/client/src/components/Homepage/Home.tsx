import Navmenu from "../Navmenu/Navmenu";
import "./Home.scss";
import Buttompageinfo from "../Buttompageinfo/Buttompageinfo";
import BottomHome from "./bottomHome";

const Home = () => {
  return (
    <>
      <div className="container">
        <Navmenu />

        <div className="vid">
          {/* <iframe
            className="homevid"
            src={`https://www.youtube.com/embed/u2LMhCEA4p8?controls=0&autoplay=1&mute=1&playlist=u2LMhCEA4p8&loop=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop"
          ></iframe> */}
          <iframe
            src="https://player.vimeo.com/video/1124060625?autoplay=1&loop=1&background=1&muted=1"
            frameBorder="0"
            allow="autoplay; fullscreen"
            className="homevid"
          ></iframe>
          <div className="name-container">
            <h1 className="name">Bar Shefet</h1>
            <h2 className="description">
              Short Films — Commercials — Narrative.
            </h2>
            <div className="arrow"></div>
          </div>
        </div>
        <BottomHome />
      </div>
      <div id="bottom">
        <Buttompageinfo />
      </div>
    </>
  );
};

export default Home;
