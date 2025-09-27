import "../Films/Videos.scss";
import { cameraList } from "../../assets/CameraList";
import Vid from "../Films/Vid";

const Cameralist = () => {
  return  (
    <div className="videos-container">
      {cameraList.map((vid: string) => (
        <Vid vid={vid} key={vid}/>
      ))}
    </div>
  ) 
};

export default Cameralist;