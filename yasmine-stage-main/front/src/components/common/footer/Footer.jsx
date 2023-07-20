import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className='legal'>
        
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>CLEVORY TRAINING </h1>
            <span>Learning Today & Leading Tomorrow</span>
            <p>Avec une large offre dans le domaine des TIC, du management et des soft skills.</p>

            <div className='social'>
            <a href="https://www.facebook.com/ClevoryTraining"> <i className='fab fa-facebook-f icon'></i>  </a>
            <a href="https://www.instagram.com/clevorytraining/"><i className='fab fa-instagram icon'></i> </a>
            <a href="https://www.linkedin.com/company/clevory-training/"><i className='fab fa-linkedin icon'></i></a>
            <a href="https://www.youtube.com/@clevory"><i className='fab fa-youtube icon'></i></a>
            </div>
          </div>


          <div className='box last'>
            <h3>Vous avez une question ?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                8, Rue des Mineraux (Ex-Rue 8603), Charguia 1, 2035, Tunisia
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +216 31 404 377
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                contact@clevory.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by GorkhCoder
        </p>
      </div>
    </>
  )
}

export default Footer
