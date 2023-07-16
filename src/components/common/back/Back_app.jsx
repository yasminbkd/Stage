import React from "react"
import { useLocation } from "react-router-dom"
import Heading from "../../common/heading/Heading";
import "./back.css"

// l'interface de la page a propos 
const Back_app = ({ title }) => {
  const location = useLocation()

  return (
    <>
    <div>
      <section className="backapp">
        <div className='container'>
          <div className='row'>
            <Heading title='Clevory Training' subtitle='NOS STAGIAIRES'  />
            <p>Vous trouvez ci-joints tous les satagiaires qui ont postulé pour nos offres </p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
      </div>
    </>
  )
}

export default Back_app
