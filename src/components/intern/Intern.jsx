import React from "react"
import Back from "../common/back/Back"
import InternCard from "./InternCard"
import "./blog.css"

const Intern = () => {
  return (
    <>
      <Back title='Our Intern' />
      <section className='blog padding'>
        <div className='container grid2'>
          <InternCard />
        </div>
      </section>
    </>
  )
}

export default Intern
