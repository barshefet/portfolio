import Navmenu from "../Navmenu/Navmenu";
import './Photography.scss'
import Buttompageinfo from "../Buttompageinfo/Buttompageinfo";
import Pics from "./Pics";

const Photography = () => {
  return (
    <>
      <Navmenu />
      <div className="photos-container">
        <h1>Photography</h1>
        <Pics />
        </div>
        <Buttompageinfo />
    </>
  );
};

export default Photography;
