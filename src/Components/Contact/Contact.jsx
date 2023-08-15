import { useFirstActivation } from "../../hooks/useFirstActivation";
import FormularioEmail from "../Formulario/FormularioEmail";

const Contact = () => {
  const { pageContentRef } = useFirstActivation();

  return (
    <div className={`page_contacto active`} id="contact">
      <h2 className="title">Contacto</h2>
      <div className="content" ref={pageContentRef}>
        <FormularioEmail />
      </div>
    </div>
  );
};

export default Contact;
