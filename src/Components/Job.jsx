import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const Job = ({ lugar, inicio, final, puesto, descripcion }) => {
  return (
    <div className="job">
      <h3 className="job__place-date">
        {lugar}
        <p>{inicio}</p>
        <p>{final}</p>
      </h3>
      <div className="ornament">
        <FontAwesomeIcon icon={faCircle} className="ornament__icon" />
        <div className="ornament__line"></div>
      </div>
      <div className="job__info">
        <h4>{puesto}</h4>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default Job;
