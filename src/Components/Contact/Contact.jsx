import "./Contact.css"
import { useRef, useState } from "react"
import { useFirstActivation } from "../../hooks/useFirstActivation"
import FormularioEmail from "../Formulario/FormularioEmail"
import LoadSpin from "../Load-Spin/LoadSpin"

const Contact = ({state}) => {
  const [isSending, setIsSending] = useState(false)
  const {pageContentRef} = useFirstActivation(state, "show")

  const form = useRef()
  

  return (
    <div className={`page_contacto ${state}`} id="contact" >
      <h2 className="title">Contacto</h2>
      <div className="content" ref={pageContentRef}>
        <FormularioEmail reference={form} sendState={setIsSending} />
        <LoadSpin state={isSending ? "active" : "inactive"}/>
      </div>
    </div>
  )
}

export default Contact