import "./Navegacion.css"
import PageIcon from '../Page-icon/PageIcon'
import { faHome, faUser, faGraduationCap, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Navegacion = ({ click }) => {
  return (
    <div className="navegacion">
      <PageIcon
        icon={faHome}
        name="home"
        clickBtn={click}
        pageToActive="home"
      />
      <PageIcon 
        icon={faUser} 
        name="user"
        clickBtn={click}
        pageToActive="user"
      />
      <PageIcon
        icon={faGraduationCap}
        name="cap"
        clickBtn={click}
        pageToActive="curriculum"
      />
      <PageIcon
        icon={faBriefcase} 
        name="brief-case"
        clickBtn={click}
        pageToActive="proyectos"
      />
      <PageIcon
        icon={faEnvelope} 
        name="envelope"
        clickBtn={click}
        pageToActive="contact"
      />
    </div>
  )
}

export default Navegacion