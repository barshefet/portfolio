import "./Buttompageinfo.scss";

const Buttompageinfo = () => {
  return (
    <>
      <div className="info-container">
        <div className="contactme-container">
          <div className="contactme-status">
            <div className="status-text">GET IN TOUCH</div>
            <div className="status-text">CLICK TO COPY</div>
            <div className="status-text">COPIED</div>
          </div>
          <h1 className="email">
            <span>bar.shefet@gmail.com</span>
          </h1>
        </div>
        <div className="info">
          <div className="left-info">
            <h4>Bar Shefet© 2025. DESIGN&DEV by Bar Shefet.</h4>
          </div>
          <div className="middle-info">
            <div className="insta">
              <a
                href="https://www.instagram.com/bar_shefet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Instagram"}
              </a>
            </div>
            <div className="youtube">
              <a
                href="https://www.youtube.com/@bar4490"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"YouTube"}
              </a>
            </div>
          </div>
          <div className="right-info">
            <h4>+972 50 338 3090</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttompageinfo;
