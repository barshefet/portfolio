import Navmenu from "../Navmenu/Navmenu";
import Cameralist from "./Cameralist";
import Showreel from "./Showreel";
import Buttompageinfo from "../Buttompageinfo/Buttompageinfo";
import "./Cinematography.scss";

const Cinematography = () => {
  return (
    <>
      <div className="films-container">
        <Navmenu />
        <h1>Cinematography</h1>
        <h2>Showreel 2024-2025</h2>
        <div className="showreel-container">
          <Showreel />
        </div>
        <h2>Films I Shot In my First Year in Film School</h2>
        <Cameralist />
      </div>
      <Buttompageinfo />
    </>
  );
};

export default Cinematography;
