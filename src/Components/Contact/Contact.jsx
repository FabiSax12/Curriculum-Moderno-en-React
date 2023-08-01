import { useFirstActivation } from "../../hooks/useFirstActivation"

const Contact = ({state}) => {
  useFirstActivation("contact", state)

  return (
    <div className={`page_contacto ${state}`} id="contact">
      <h2 className="title">Contacto</h2>
      <div className="content">
        Hola
      </div>
    </div>
  )
}

export default Contact