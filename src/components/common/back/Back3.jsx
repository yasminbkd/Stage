import React from 'react'
import { useLocation } from "react-router-dom"
import "./back.css"


// l'interface de la page stagiaire 
const Back3 = ({ title }) => {
    const location = useLocation()
  
    return (
      <>
      <div>
        <section className="back3">
          <h1>{title}</h1>
        </section>
        <div className='margin'></div>
        </div>
      </>
    )
  }
  export default Back3