import React from 'react'
import FilterSkills from '../../components/Filter';


export default function Hero() {
  return (
    <div>
    <section className="hero is-warning">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Welcome to our Tutor App
      </h1>
          <h2 className="subtitle">
            Let's get some schooling done
      </h2>

        </div>
      </div>
      
    </section>
    
      <FilterSkills />

    </div>

  )
}
