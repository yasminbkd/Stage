import React, { useState } from "react";
import Image from '../../../images/logo.png';
import "./header.css";
import { Link } from 'react-router-dom';

const Head = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className='head'>
      <img src={Image} alt="image" />
      <div className="options">
        <Link to="/signin" className="option-link">Se connecter</Link>
        <span className="separator">|</span>
        <div className="signup-dropdown">
          <span className="signup-text" onClick={toggleDropdown}>S'authentifier &#x25BE;</span>
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
}

export default Head;
