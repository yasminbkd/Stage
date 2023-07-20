import React from "react";
import { useNavigate } from 'react-router-dom';
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from 'react-router-dom';

// page d'acceuil 
const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/intership");
  };

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='Bienvenue sur CLEVORY TRANING' title='Meilleure Opportunité de stage' />
            <p> Optimisez votre parcours de stage avec notre meilleure plateforme.</p>
          </div>
        </div>
      </section>
      <button className='primary-btn'><Link className='link' to="/intership"> COMMENCER MAINTENAT </Link><i className='fa fa-long-arrow-alt-right'></i></button>
      <button className='btn-l'><Link className='link' to="https://clevory.com/">VOIR PLUS</Link></button>
      <div className='margin'></div>
    </>
  );
};

export default Hero;
