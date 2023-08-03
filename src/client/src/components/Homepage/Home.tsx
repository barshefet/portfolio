import Navmenu from "../Navmenu/Navmenu";
import "./Home.scss";
import Buttompageinfo from "../Buttompageinfo/Buttompageinfo";

const Home = () => {
  return (
    <>
      <div className="container">
        <Navmenu />

        <div className="vid">
          <iframe
          className="homevid"
            width="1200"
            height={"720"}
            src="https://www.youtube.com/embed/m2ptFk3sDEg?controls=0&autoplay=1&mute=1&playlist=SDD8jSE_-BM&loop=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop"
            
          ></iframe>
          
          <div className="name-container">
            <h1 className="name">Bar Shefet</h1>
            <h2 className="description">Aspiring Filmmaker</h2>
          </div>
        </div>
        
      </div>
      <Buttompageinfo />
    </>
  );
};

export default Home;
