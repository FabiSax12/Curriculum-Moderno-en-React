import Tecnología from "../Tecnología/Tecnología";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="skills__container">
      <Tecnología icon={faHtml5} />
      <Tecnología icon={faCss3Alt} />
      <Tecnología icon={faSquareJs} />
      <Tecnología icon={faReact} />
      <Tecnología icon={faGitAlt} />
      <Tecnología icon={faGithub} />
    </div>
  );
};

export default Skills;
