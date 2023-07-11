import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"

import "./header.css"

//header ou il ya la menu bar 

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Acceuil</Link>
            </li>
            <li>
              <Link to='/about'>A propos</Link>
            </li>
            <li>
              <Link to='/intership'>Stage</Link>
            </li>
            <li>
              <Link to='/intern'>Stagiaire</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
         {/*  <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
          */}
        </nav>
      </header>
    </>
  )
}

export default Header
