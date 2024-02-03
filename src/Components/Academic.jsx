import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

export const Academic = ({ lugar, fecha, titulo, area }) => {
  return (
    <div className="academic">
      <h3 className="academic__place-date">
        {lugar}
        <p>{fecha}</p>
      </h3>
      <div className="ornament">
        <FontAwesomeIcon icon={faCircle} className="ornament__icon" />
        <div className="ornament__line"></div>
      </div>
      <div className="academic__info">
        <h4>{titulo}</h4>
        <p>{area}</p>
      </div>
    </div>
  );
};
