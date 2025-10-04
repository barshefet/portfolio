import { useNavigate } from "react-router-dom";

import "./bottomHome.scss";

const bottomHome = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="bottom-home">
        <div className="director">
          <h1>Director</h1>
          <div
            onClick={() => {
              nav("./Films");
              window.scrollTo({ top: 0, left: 0 });
            }}
            className="seeButton"
          >
            See Portfolio
          </div>
        </div>
        <div className="and">
          <h1>&</h1>
        </div>
        <div className="cinematographer">
          <h1>Cinematographer</h1>
          <div
            onClick={() => {
              nav("./Cinematography");
              window.scrollTo({ top: 0, left: 0 });
            }}
            className="seeButton"
          >
            See Showreel
          </div>
        </div>
      </div>
    </>
  );
};

export default bottomHome;
