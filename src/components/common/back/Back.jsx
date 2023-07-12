import React from "react"
import { useLocation } from "react-router-dom"
import Heading from "../../common/heading/Heading";
import "./back.css"
const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
    <div>
      <section className="back1">
        <div className='container'>
          <div className='row'>
            <Heading title='Clevory Training' subtitle='A PROPOS'  />
            <p> C'est un centre de formation dans le domaine des TIC, du management et des soft skills. Vous propose une large offre de formation et d’assistance permettant d’accompagner les entreprises dans leur transformation digitale en relevant les nouveaux défis technologiques et managériaux.Il s’appuie également sur un réseau de formateurs et de coachs hautement certifiés respectant les exigences qualité les plus strictes de ses partenaires.</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
      </div>
    </>
  )
}

export default Back
