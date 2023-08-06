import "./Videos.scss";
import { videolist } from "../../assets/videoslist";
import Vid from "./Vid";

const Videos = () => {
  return  (
    <div className="videos-container">
      {videolist.map((vid: string) => (
        <Vid vid={vid}/>
      ))}
    </div>
  ) 
};

export default Videos;
