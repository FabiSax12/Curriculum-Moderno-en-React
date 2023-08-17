import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialNetworks = (props) => {
  return (
    <a className="redes__link" href={props.link} target="_blank">
      <FontAwesomeIcon icon={props.icon} className="redes__icon" />
    </a>
  );
};

export default SocialNetworks;
