import Technology from "./Technology";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProyectCard = ({ proyectName, imageSrc, icons, repo, link }) => {
  return (
    <div className="proyectCard">
      <img src={imageSrc} alt={`${proyectName} Image`} />
      <div className="proyectCard__body">
        <h4 className="proyectCard__name">{proyectName}</h4>
        <div className="proyectCard__icons">
          {icons.map((icon, index) => (
            <Technology icon={icon} key={index} />
          ))}
        </div>
        <div className="proyectCard__buttons">
          <a href={repo} target="_blank" className="proyectCard__repo">
            Ver Código
            <Technology icon={faGithub} />
          </a>
          <a href={link} target="_blank" className="proyectCard__link">
            Ver Página
            <Technology icon={faUpRightFromSquare} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
