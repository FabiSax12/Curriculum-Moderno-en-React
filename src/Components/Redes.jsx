import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Redes = (props) => {
  return (
    <a className="redes__link" href={props.link} target="_blank">
      <FontAwesomeIcon icon={props.icon} className="redes__icon" />
    </a>
  );
};

export default Redes;
