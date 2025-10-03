import "./Buttompageinfo.scss";

const Buttompageinfo = () => {
  return (
    <>
    <div className="info-container">
      <div className="contactme-container">
        <h3>Get In Touch</h3>
        <h3>Click To Copy</h3>
        <h1 className="email"><span>bar.shefet@gmail.com</span></h1>
      </div>
      <div className="info">
        <div className="left-info">
          <h4>bar.shefet@gmail.com</h4>
          
        </div>
        <div className="middle-info">
            <div className="insta">
            <a href="https://www.instagram.com/bar_shefet/" target="_blank" rel="noopener noreferrer">
              {"Instagram"}
            </a>
          </div>
          <div className="youtube">
            <a href="https://www.youtube.com/@bar4490" target="_blank" rel="noopener noreferrer">
              {"YouTube"}
            </a>
            </div>
        </div>
        <div className="right-info"><h4>+972 50 338 3090</h4></div>
      </div>
      </div>
      <div className="rights">
        <p>©2025 by Bar Shefet. Programed by Bar Shefet.</p>
      </div>
    </>
  );
};

export default Buttompageinfo;
