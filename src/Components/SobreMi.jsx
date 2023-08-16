import { useFirstActivation } from "../hooks/useFirstActivation";

const SobreMi = () => {
  const { pageContentRef } = useFirstActivation();

  return (
    <div className="sobremi" id="sobreMi">
      <h2 className="title">Sobre Mi</h2>
      <div className="content" ref={pageContentRef}>
        <p className="sobremi__texto">
          Joven apasionado por la ingeniería y la resolución de problemas,
          adicto al aprendizaje y fanático de los verdaderos retos.
        </p>
        <p>Desarrollador Front-End en progreso...</p>
        <section className="hard-soft_skills">
          <div>
            <h2 className="subtitle">Tech Stack / Hard Skills</h2>
            <div className="techStack">
              <img src="/tecnologías/html.png" alt="HTML Logo" />
              <img src="/tecnologías/css.png" alt="CSS Logo" />
              <img src="/tecnologías/sass.png" alt="SASS Logo" />
              <img src="/tecnologías/js.png" alt="JavaScript Logo" />
              <img src="/tecnologías/react.png" alt="React Logo" />
              <img src="/tecnologías/git.webp" alt="Git Logo" />
              <img src="/tecnologías/github.png" alt="Github Logo" />
            </div>
          </div>
          <div>
            <h2 className="subtitle">Soft Skills</h2>
            <ul className="sobremi__aptitudes_lista">
              <li>Deseo de aprender cosas nuevas</li>
              <li>Inteligente</li>
              <li>Responsable y puntual.</li>
              <li>Adaptación.</li>
              <li>Atento y buen oyente.</li>
              <li>Trabajo en equipo.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SobreMi;
