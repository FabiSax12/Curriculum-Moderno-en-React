import React from 'react'
import "./ProyectCard.css"
import Tecnología from "../Tecnología/Tecnología"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const ProyectCard = ({proyectName, imageSrc, icons, repo, link}) => {
  return (
    <div className="proyect-card">
      <img src={imageSrc} alt={`${proyectName} Image`} />
      <div className="proyect-card_body">
        <h4 className="proyect-card_name">{proyectName}</h4>
        <div className="proyect-card_icons">
          {icons.map((icon, index) => (
            <Tecnología icon={icon} key={index}/>
          ))}
        </div>
        <div className="proyect-card_buttons">
          <a href={repo} target="_blank" className="proyect-card_repo">Ver Código<Tecnología icon={faGithub}/></a>
          <a href={link} target="_blank" className="proyect-card_link">Ver Página<Tecnología icon={faUpRightFromSquare}/></a>
        </div>
      </div>
    </div>
  )
}

export default ProyectCard