const EmailPreview = ({ valores }) => {
  return (
    <div className="preview">
      <h4 className="email__title">Nuevo mensaje de {valores.nombre}</h4>
      <h5 className="email__to">
        to: Fabián Ricardo Vargas Araya {"<fabidev18@gmail.com>"}{" "}
      </h5>
      <h4 className="email__asunto">{valores.asunto}</h4>
      <p className="email__message">{valores.mensaje}</p>
      <h5 className="email__from">Email enviado desde {valores.email}</h5>
    </div>
  );
};

export default EmailPreview;
