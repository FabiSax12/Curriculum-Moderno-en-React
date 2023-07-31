import "./Sidebar.css"
import Redes from '../Redes/Redes'
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__img">
        <img src="src\assets\foto-de-perfil.jpg" alt="foto De Perfil" />
      </div>
      <div className="sidebar__texto">
        <h3>Fabián Vargas</h3>
        <h4>Estudiante</h4>
        <div className="sidebar__links-redes">
          <Redes
            link="https://www.instagram.com/vargas_fabian04/"
            icon={faInstagram}
          />
          <Redes
            link="https://www.linkedin.com/in/fabi%C3%A1n-vargas-araya-796ab3275/"
            icon={faLinkedin}
          />
          <Redes
            link="https://github.com/FabiSax12"
            icon={faGithub}
          />
        </div>
        <a className="sidebar_cv" href="https://drive.google.com/file/d/1a5xcLBPVEG066bi3edVpJRy1U7VvyNPW/view?usp=drive_link" target="_blank">Descargar CV</a>
        <p className="sidebar__copyrigth">2023 Fabián Vargas Araya</p>
      </div>
    </div>
  )
}

export default Sidebar