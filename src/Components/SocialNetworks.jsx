import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialNetworks = (props) => {
  return (
    <a className="socialNetwork" href={props.link} target="_blank">
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
};

export default SocialNetworks;
