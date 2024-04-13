import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); 

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <h1>CSD Fest Registration</h1>
      <div className="links">
        <Link 
          to="/" 
          onClick={() => handleLinkClick("home")} 
          style={{ backgroundColor: activeLink === "home" ? "#f1356d" : "", borderRadius: '8px' }}
        >
          Details
        </Link>
        <Link 
          to="/create" 
          onClick={() => handleLinkClick("new")} 
          style={{ backgroundColor: activeLink === "new" ? "#f1356d" : "", borderRadius: '8px' }}
        >
         Register
        </Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
