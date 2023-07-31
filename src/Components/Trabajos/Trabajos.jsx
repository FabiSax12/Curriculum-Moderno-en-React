import "./Trabajos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const Trabajos = ({lugar, inicio, final, puesto, descripcion}) => {
  return (
    <div className="trabajo">
      <h3 className="content_lugar-fecha">
        {lugar}
        <p>
          {inicio} <br/> {final}
        </p>
      </h3>
      <div className="content_icon">
        <FontAwesomeIcon icon={faCircle} className="icon"/>
        <div className="adorno"></div>
      </div>
      <div className="content_info">
        <h4>{puesto}</h4>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default Trabajos;
