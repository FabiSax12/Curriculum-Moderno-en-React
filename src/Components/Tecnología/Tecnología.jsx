import "./Tecnología.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tecnología = ({ icon }) => {
  return (
    <div className="skill">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default Tecnología;
