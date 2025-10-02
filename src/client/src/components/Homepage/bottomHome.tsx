import "./bottomHome.scss";

const bottomHome = () => {
  return (
    <>
      <div className="bottom-home">
        <div className="director">
          <h1>Director</h1>
          <a href="/Films" className="seeButton">See Portfolio</a>
        </div>
        <div className="and">
          <h1>&</h1>
        </div>
        <div className="cinematographer">
            <h1>Cinematographer</h1>
          <a href="/Cinematography" className="seeButton">See Showreel</a>
        </div>
      </div>
    </>
  );
};

export default bottomHome;
