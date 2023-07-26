import React from "react";
import { useNavigate } from "react-router-dom";
import Navmenu from "../Navmenu/Navmenu";
import "./Home.scss";
import Buttompageinfo from "../Buttompageinfo/Buttompageinfo";

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="container">
        <Navmenu />

        <div className="vid">
          <iframe
          className="homevid"
            width="1200"
            height={"720"}
            src="https://www.youtube.com/embed/SDD8jSE_-BM?controls=0&autoplay=1&mute=1&playlist=SDD8jSE_-BM&loop=1"
            title="YouTube video player"
            frameborder="0"
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
