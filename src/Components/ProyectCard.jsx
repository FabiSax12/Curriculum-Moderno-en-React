import Technology from "./Technology";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProyectCard = ({ proyectName, imageSrc, icons, repo, link }) => {
  return (
    <div className="proyect-card">
      <img src={imageSrc} alt={`${proyectName} Image`} />
      <div className="proyect-card_body">
        <h4 className="proyect-card_name">{proyectName}</h4>
        <div className="proyect-card_icons">
          {icons.map((icon, index) => (
            <Technology icon={icon} key={index} />
          ))}
        </div>
        <div className="proyect-card_buttons">
          <a href={repo} target="_blank" className="proyect-card_repo">
            Ver Código
            <Technology icon={faGithub} />
          </a>
          <a href={link} target="_blank" className="proyect-card_link">
            Ver Página
            <Technology icon={faUpRightFromSquare} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
