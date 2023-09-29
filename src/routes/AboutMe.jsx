import { useFirstActivation } from "../hooks/useFirstActivation";
import { ImgConvert } from "../components/ImgConvert"

const AboutMe = () => {
  const { pageContentRef } = useFirstActivation();

  return (
    <div className="aboutMe" id="aboutMe">
      <h2 className="title">Sobre Mi</h2>
      <div className="content" ref={pageContentRef}>
        <p className="aboutMe__text">
          Soy un joven apasionado por la ingeniería y la resolución de problemas, adicto al aprendizaje y
          fanático de los verdaderos retos.
        </p>
        <p className="aboutMe__text">
          Mi primer contacto con la programación fue en la secundaria,
          mientras cursaba un técnico en electrónica. Me enamoré de Arduino en ese momento.
          A partir de ahí, me adentré en Python, donde aprendí ciertas bases, y descubrí HTML, CSS y JS.
        </p>
        <p className="aboutMe__text">
          Encuentro comodidad en esta área y, con la determinación de mejorar constantemente,
          visualizo mi futuro como un Desarrollador Web.
        </p>
        <section className="aboutMe__hard-Soft-Skills">
          <div className="hard-skills">
            <h2 className="subtitle">Tech Stack / Hard Skills</h2>
            <div className="techStack">
              <img src="/tecnologías/html.png" alt="HTML Logo" />
              <img src="/tecnologías/css.png" alt="CSS Logo" />
              <img src="/tecnologías/sass.png" alt="SASS Logo" />
              <img src="/tecnologías/js.png" alt="JavaScript Logo" />
              <img src="/tecnologías/jquery.png" alt="JQuery Logo" />
              <img src="/tecnologías/react.png" alt="React Logo" />
              <img src="/tecnologías/git.webp" alt="Git Logo" />
              <img src="/tecnologías/github.png" alt="Github Logo" />
            </div>
            <h3 className="">Aprendiendo...</h3>
            <div className="techStack">
              <img src="/tecnologías/ts.png" alt="TypeScript Logo" />
              <img src="/tecnologías/nodejs.png" alt="NodeJS Logo" />
              <img src="/tecnologías/express.png" alt="Express Logo" />
              <img src="/tecnologías/mongodb.webp" alt="MongoDB Logo" />
            </div>
          </div>
          <div className="soft-skills">
            <h2 className="subtitle">Soft Skills</h2>
            <ul className="aboutMe__aptitudes">
              <li>Deseo de aprender cosas nuevas</li>
              <li>Inteligente</li>
              <li>Responsable y puntual.</li>
              <li>Adaptación.</li>
              <li>Atento y buen oyente.</li>
              <li>Trabajo en equipo.</li>
            </ul>
          </div>
        </section>
      </div >
    </div >
  );
};

export default AboutMe;
