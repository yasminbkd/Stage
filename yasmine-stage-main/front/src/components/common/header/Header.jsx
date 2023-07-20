import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import jwtDecode from "jwt-decode";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    // Get the token from local storage
    const token = localStorage.getItem("token");

    if (token) {
      // Decode the token to get the user type and display the bar fonctions
      const decodedToken = jwtDecode(token);
      setUserType(decodedToken.type);
    }
  }, []);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Acceuil</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
            {(userType === "user" || userType === "company") && (
            <li>
              <Link to="/intership">Stage</Link>
            </li>
            )}
            {userType === "company" && (
              <li>
                <Link to="/intern">Stagiaire</Link>
              </li>
            )}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
