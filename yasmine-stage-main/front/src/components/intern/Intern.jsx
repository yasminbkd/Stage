import React from "react"
import InternCard from "./InternCard"
import "./blog.css"
import Back3 from "../common/back/Back3"

const Intern = () => {
  return (
    <>
      <Back3 title='Our Intern' />
      <section className='blog padding'>
        <div className='container grid2'>
          <InternCard />
        </div>
      </section>
    </>
  )
}

export default Intern
