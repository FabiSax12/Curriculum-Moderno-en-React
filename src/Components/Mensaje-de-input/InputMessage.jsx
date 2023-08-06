import "./InputMessage.css"

const InputMessage = ({mensaje}) => {
  return (
    <p className="mensaje_input">
      {mensaje}
    </p>
  )
}

export default InputMessage