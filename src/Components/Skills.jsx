import Tecnología from "./Tecnología";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faGitAlt,
  faGithub,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { SiJquery } from "react-icons/si";

const Skills = ({ animation }) => {
  return (
    <div className={`skills__container ${animation ? "animation" : ""}`}>
      <Tecnología icon={faHtml5} />
      <Tecnología icon={faCss3Alt} />
      <Tecnología icon={faSass} />
      <Tecnología icon={faSquareJs} />
      <div className="skill">
        <SiJquery />
      </div>
      <Tecnología icon={faReact} />
      <Tecnología icon={faGitAlt} />
      <Tecnología icon={faGithub} />
    </div>
  );
};

export default Skills;
