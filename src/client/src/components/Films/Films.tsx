import Navmenu from "../Navmenu/Navmenu";
import Videos from "./Videos";
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
