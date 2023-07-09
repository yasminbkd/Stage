import React from "react"
import Back from "../common/back/Back"
import IntershipCard from "./IntershipCard"
import { Link } from 'react-router-dom';
import Heading from "../common/heading/Heading";

const IntershipHome = () => {
  return (
    <>
      <Back title='Découvrir les stages' />
      <button className='primary-btn'><Link className='link' to="/intership"> COMMENCER MAINTENAT </Link><i className='fa fa-long-arrow-alt-right'></i></button>
      <IntershipCard />
    </>
  )
}

export default IntershipHome
