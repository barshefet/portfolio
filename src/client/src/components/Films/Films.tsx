import React from "react";
import Navmenu from "../Navmenu/Navmenu";
import Videos from "./videos";
import './Films.scss'

const Films = () => {
  return (
    <>
      <div className="films-container">
        <Navmenu />
        <h1>Films</h1>
        <Videos />
      </div>
    </>
  );
};

export default Films;
