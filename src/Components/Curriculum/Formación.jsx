import "./Formación.css"
import Tecnología from "../Tecnología/Tecnología"
import { useFirstActivation } from "../../hooks/useFirstActivation";
import { faHtml5, faCss3Alt, faSquareJs, faReact, faGitAlt, faGithub } from "@fortawesome/free-brands-svg-icons"

const Formación = ({ state }) => {
  useFirstActivation("formación", state)

  return (
    <div className={`page_formación ${state}`} id="formación">
      <h2 className="title">Formación Académica</h2>
      <div className="content">
        <section className="tecnologías">
          <Tecnología icon={faHtml5}/>
          <Tecnología icon={faCss3Alt}/>
          <Tecnología icon={faSquareJs}/>
          <Tecnología icon={faReact}/>
          <Tecnología icon={faGitAlt}/>
          <Tecnología icon={faGithub}/>
        </section>
      </div>
    </div>
  )
}

export default Formación