import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageIcon = ({ icon, name }) => {
  return (
    <button className={`navigation__button ${name}`}>
      <FontAwesomeIcon
        icon={icon}
        className={`navigation__button_icon ${name}`}
      />
    </button>
  );
};

export default PageIcon;
