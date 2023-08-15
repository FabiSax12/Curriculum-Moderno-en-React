import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageIcon = ({ icon, name }) => {
  return (
    <button className={`navegacion_btn ${name}`}>
      <FontAwesomeIcon icon={icon} className={`navegacion_btn_icon ${name}`} />
    </button>
  );
};

export default PageIcon;
