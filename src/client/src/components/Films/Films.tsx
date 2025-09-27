import Navmenu from "../Navmenu/Navmenu";
import Videos from "./Videos";
import Buttompageinfo from "../Buttompageinfo/Buttompageinfo";
import "./Films.scss";

const Films = () => {
  return (
    <>
      <div className="films-container">
        <Navmenu />
        <h1>Director</h1>
        <h2>Short Films I made in my First year in Film School</h2>
        <Videos />
      </div>
      <Buttompageinfo />
    </>
  );
};

export default Films;
