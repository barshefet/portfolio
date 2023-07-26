import React from "react";
import "./Videos.scss";
import { videolist } from "../../assets/videoslist";

const Videos = () => {
  return (
    <div className="videos-container">
      {videolist.map((vid: string) => (
        <iframe
          className="film-vid"
          width="480"
          height="288"
          src={vid}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};

export default Videos;
