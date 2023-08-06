import "./Contact.css"
import { useFirstActivation } from "../../hooks/useFirstActivation"
import FormularioEmail from "../Formulario/FormularioEmail"

const Contact = ({state}) => {
  const {pageContentRef} = useFirstActivation(state, "show")

  return (
    <div className={`page_contacto ${state}`} id="contact" >
      <h2 className="title">Contacto</h2>
      <div className="content" ref={pageContentRef}>
        <FormularioEmail />
      </div>
    </div>
  )
}

export default Contact