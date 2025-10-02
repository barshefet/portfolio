import { useNavigate } from "react-router-dom";
import "./Navmenu.scss";

const Navmenu = () => {
  const nav = useNavigate();
  return (
    <div className="navmenu">
      <div className="navmenu-container">
        <h2 className="nav-name">Bar Shefet</h2>
        <div className="nav-buttons">
          <h3
            onClick={() => {
              nav("/");
              window.scrollTo({ top: 0, left: 0 });
            }}
          >
            Home
          </h3>
          <h3
            onClick={() => {
              nav("/films");
              window.scrollTo({ top: 0, left: 0 });
            }}
          >
            Director
          </h3>
          <h3
            onClick={() => {
              nav("/Cinematography");
              window.scrollTo({ top: 0, left: 0 });
            }}
          >
            DOP
          </h3>
          {/* <h3
            onClick={() => {
              nav("/photo");
              window.scrollTo({ top: 0, left: 0 });
            }}
          >
            Photography
          </h3> */}
          <h3
            onClick={() => {
              nav("/about");
              window.scrollTo({ top: 0, left: 0 });
            }}
          >
            About
          </h3>
          <h3
            onClick={() => {
              nav("/contact");
              window.scrollTo({ top: 0, left: 0 });
            }}
          >
            Contact
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
