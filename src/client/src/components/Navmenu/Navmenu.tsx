import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navmenu.scss";

const Navmenu = () => {
  const nav = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    nav(path);
    window.scrollTo({ top: 0, left: 0 });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="navmenu">
      <div className="navmenu-container">
        <h2 className="nav-name">Bar Shefet</h2>
        
        {/* Hamburger menu button for mobile */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-buttons ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <h3
            onClick={() => handleNavigation("/")}
          >
            Home
          </h3>
          <h3
            onClick={() => handleNavigation("/films")}
          >
            Director
          </h3>
          <h3
            onClick={() => handleNavigation("/Cinematography")}
          >
            DOP
          </h3>
          {/* <h3
            onClick={() => handleNavigation("/photo")}
          >
            Photography
          </h3> */}
          <h3
            onClick={() => handleNavigation("/about")}
          >
            About
          </h3>
          {/* <h3
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </h3> */}
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
