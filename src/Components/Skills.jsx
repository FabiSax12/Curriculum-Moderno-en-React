import Technology from "./Technology";
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
      <Technology icon={faHtml5} />
      <Technology icon={faCss3Alt} />
      <Technology icon={faSass} />
      <Technology icon={faSquareJs} />
      <div className="skill">
        <SiJquery />
      </div>
      <Technology icon={faReact} />
      <Technology icon={faGitAlt} />
      <Technology icon={faGithub} />
    </div>
  );
};

export default Skills