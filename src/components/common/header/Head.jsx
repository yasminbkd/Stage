import React, { useState } from "react";
import Image from '../../../images/logo.png';
import "./header.css";
import { Link } from 'react-router-dom';
import { logout } from "../../../services/authService";
import { hasAuthenticated } from '../../../services/authService';


const Head = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(hasAuthenticated());
const [test,settest]=useState('')
  useState(()=>{
    setIsLoggedIn(true)
  },[test])
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsLoggedIn(false);
  };

  return (
    <section className='head'>
      <img src={Image} alt="image" />
      <div className="options">
        {isLoggedIn ? (
            <Link  className="logout-button" onClick={() => logout().then(() => setIsLoggedIn(false))}>Se déconnecter</Link>
        ) : (
          <Link to="/signin" className="option-link" onChange={()=>settest("eeee")}>Se connecter</Link>
        )}
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