import SocialNetworks from "./SocialNetworks";
import { ImgConvert } from "./ImgConvert"
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = ({ state }) => {
  return (
    <div className={`sidebar ${state ? "showSidebar" : ""}`}>
      <div className="sidebar__img">
        <ImgConvert folderPath="" fileName="foto-de-perfil" alt="foto De Perfil" />
        {/* <img src="/foto-de-perfil.jpg" alt="foto De Perfil" /> */}
      </div>
      <div className="sidebar__text">
        <h3>Fabián Vargas</h3>
        <h4>Estudiante</h4>
        <div className="sidebar__links-redes">
          <SocialNetworks
            link="https://www.instagram.com/vargas_fabian04/"
            icon={faInstagram}
          />
          <SocialNetworks
            link="https://www.linkedin.com/in/fabi%C3%A1n-vargas-araya-796ab3275/"
            icon={faLinkedin}
          />
          <SocialNetworks link="https://github.com/FabiSax12" icon={faGithub} />
        </div>
        <a
          className="sidebar_cv"
          href="https://drive.google.com/file/d/1a5xcLBPVEG066bi3edVpJRy1U7VvyNPW/view?usp=drive_link"
          target="_blank"
        >
          Descargar CV
        </a>
        <p className="sidebar__copyrigth">2023 Fabián Vargas Araya</p>
      </div>
    </div>
  );
};

export default Sidebar;
