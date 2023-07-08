import React from 'react'
import "./Home.css"

const Home = ({ state }) => {
  return (
    <div className={`page_home ${state}`}>
      <h2>FABIÁN RICARDO VARGAS ARAYA</h2>
      <h3>Estudiante de Desarrollo Web</h3>
    </div>
  )
}

export default Home