import React from "react";
import Navmenu from "../Navmenu/Navmenu";
import Videos from "./videos";
import Buttompageinfo from "../Buttompageinfo/Buttompageinfo";
import "./Films.scss";

const Films = () => {
  return (
    <>
      <div className="films-container">
        <Navmenu />
        <h1>Films</h1>
        <Videos />
      </div>
      <Buttompageinfo />
    </>
  );
};

export default Films;
