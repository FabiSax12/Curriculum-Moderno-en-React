import "./Navegacion.css";
import PageIcon from "../Page-icon/PageIcon";
import {
  faHome,
  faUser,
  faGraduationCap,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <div className="navegacion">
      <Link to="/home">
        <PageIcon
          icon={faHome}
          name="home"
        />
      </Link>
      <Link to="/about">
        <PageIcon
          icon={faUser}
          name="user"
        />
      </Link>
      <Link to="/curriculum">
        <PageIcon
          icon={faGraduationCap}
          name="cap"
        />
      </Link>
      <Link to="/proyects">
        <PageIcon
          icon={faBriefcase}
          name="brief-case"
        />
      </Link>
      <Link to="/contact">
        <PageIcon
          icon={faEnvelope}
          name="envelope"
        />
      </Link>
    </div>
  );
};

export default Navegacion;
