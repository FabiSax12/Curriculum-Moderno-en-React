import React from 'react'
import "./Pages.css"
import Home from '../Inicio/Home'
import SobreMi from '../Sobre Mi/SobreMi'
import Curriculum from '../Curriculum/Curriculum'
import Experiencia from '../Experiencia/Experiencia'

const Páginas = ({ pageState }) => {

  return (
    <div className="pages">
      <Home state={pageState.home}/>
      <SobreMi state={pageState.user}/>
      <Curriculum state={pageState.curriculum}/>
      <Experiencia state={pageState.xp}/>
    </div>
  )
}

export default Páginas