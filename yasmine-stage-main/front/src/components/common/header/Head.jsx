import React, { useState, useEffect } from "react";
import Image from "../../../images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import { logout } from "../../../services/authService";
import { hasAuthenticated } from "../../../services/authService";
import jwtDecode from "jwt-decode";

const Head = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial state to false
  const [type , setType] = useState("")

  useEffect(() => {
    // Check authentication status when the component mounts
    setIsLoggedIn(hasAuthenticated());
  
    // Get the token from local storage
    const token = localStorage.getItem("token");
  
    if (token) {
      // Decode the token to get the user type
      const decodedToken = jwtDecode(token);
      setType(decodedToken.type);
      console.log(decodedToken);
    }
  }, []);
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout().then(() => setIsLoggedIn(false)); // Perform logout and update isLoggedIn state
  };

  return (
    <section className="head">
      <img src={Image} alt="image" />
      <div className="options">
        {isLoggedIn ? (
          <Link to="/signin" className="logout-button" onClick={handleLogout}>
            Se déconnecter
          </Link>
        ) : (
          <Link to="/signin" className="option-link">
            Se connecter
          </Link>
        )}
        <span className="separator">|</span>
          <div className="signup-dropdown">
            <span className="signup-text" onClick={toggleDropdown}>
              S'inscrire &#x25BE;
            </span>
            {isDropdownOpen && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/company-signup">Entreprise</Link>
                </li>
                <li>
                  <Link to="/user-signup">Utilisateur</Link>
                </li>
              </ul>
            )}
          </div>
      </div>
    </section>
  );
};

export default Head;
