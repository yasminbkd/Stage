import React, { useEffect, useState } from "react";
import axios from "axios";
import "./courses.css"
import { coursesCard } from "../../dummydata"
import { Link } from "react-router-dom";

const IntershipCard = () => {
  const [stages, setStages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/stages")
      .then(response => {
        setStages(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {stages.map((stage) => (
            <div className='items' key={stage._id}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src="../images/courses/c1.png" alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{stage.titre}</h1>
                  <div className='rate'>
                    <label htmlFor=''>({stage.duree} Mois )</label>
                  </div>
                  <div className='details'>
                    <>
                      <div className='box'>
                        <div className='para'>
                          <h4>{stage.competences.join(" / ")}</h4>
                        </div>
                      </div>
                      <span>{stage.description} </span>
                    </>
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {stage.outils.join(" / ")}
                </h3>
              </div>
              <Link to="/postuler"><button className="outline-btn">
                    POSTULER
              </button></Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default IntershipCard
