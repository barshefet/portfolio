import React from "react";
import { useNavigate } from "react-router-dom";

const Navmenu = () => {
  const nav = useNavigate();
  return (
    <div className="navmenu">
      <h2>Bar Shefet</h2>
      <h3 onClick={() => nav("/")}>Home</h3>
      <h3 onClick={() => nav("/films")}>Films</h3>
      <h3 onClick={() => nav("/photo")}>Photography</h3>
      <h3 onClick={() => nav("/about")}>About</h3>
      <h3 onClick={() => nav("/contact")}>Contact</h3>
    </div>
  );
};

export default Navmenu;
