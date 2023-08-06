import "./PrevisualizaciónCorreo.css"

const PrevisualizaciónCorreo = ({valores}) => {
  return (
    <div className="previsualización_container">
      <h4 className="email_title">Nuevo mensaje de {valores.nombre}</h4>
      <h5 className="email_to">to: Fabián Ricardo Vargas Araya {"<fabidev18@gmail.com>"} </h5>
      <h4 className="email_asunto">{valores.asunto}</h4>
      <p className="email_message"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dolore laborum fuga nisi voluptates! Quos corporis natus, vel, suscipit magnam saepe assumenda officia temporibus accusamus velit eaque. Minima, autem perspiciatis.{valores.mensaje}</p>
      <h5 className="email_from">Email enviado desde {valores.email}</h5>
    </div>
  )
}

export default PrevisualizaciónCorreo