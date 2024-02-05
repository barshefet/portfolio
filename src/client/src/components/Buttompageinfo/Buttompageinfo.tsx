import "./Buttompageinfo.scss";

const Buttompageinfo = () => {
  return (
    <>
      <div className="info">
        <div className="left-info">
          <h4>bar.shefet@gmail.com</h4>
          <h4>+972 50 338 3090</h4>
        </div>
        <div className="right-info">
          <div className="insta">
            <img src="images/insticon.png" />
            <h4>
              <a href="https://www.instagram.com/bar_shefet/">bar_shefet</a>
            </h4>
          </div>
          <div className="github">
            <img src="images/githublogo.png" />
            <h4>
              <a href="https://github.com/barshefet">barshefet</a>
            </h4>
          </div>
        </div>
      </div>
      <div className="rights">
        <p>©2035 by Bar Shefet. Created by Bar Shefet.</p>
      </div>
    </>
  );
};

export default Buttompageinfo;
