import React from 'react'
import { useLocation } from "react-router-dom"
import "./back.css"


// l'interface de la page contact
const Back4 = ({ title }) => {
    const location = useLocation()
  
    return (
      <>
      <div>
        <section className="back4">
          <h1>{title}</h1>
          
        </section>
        <div className='margin'></div>
        </div>
      </>
    )
  }
  export default Back4