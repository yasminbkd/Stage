import React, { PureComponent } from 'react'
import { useLocation } from "react-router-dom"
import "./back.css"
const Back2 = ({ title }) => {
    const location = useLocation()
  
    return (
      <>
      <div>
        <section className="back2">
          <h1>{title}</h1>
        </section>
        <div className='margin'></div>
        </div>
      </>
    )
  }
  export default Back2