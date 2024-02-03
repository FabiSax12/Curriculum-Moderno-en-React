import { useFirstActivation } from "../hooks/useFirstActivation";
import { ImgConvert } from "../components/ImgConvert"

const AboutMe = () => {
  const { pageContentRef } = useFirstActivation();

  return (
    <div className="w-full animate-page-intro" id="aboutMe">
      <h2 className="title">Sobre Mi</h2>
      <div className="content" ref={pageContentRef}>
        <p className="text-base mt-5">
          Soy un joven apasionado por la ingeniería y la resolución de problemas, adicto al aprendizaje y
          fanático de los verdaderos retos.
        </p>
        <p className="text-base">
          Mi primer contacto con la programación fue en la secundaria,
          mientras cursaba un técnico en electrónica. Me enamoré de Arduino en ese momento.
          A partir de ahí, me adentré en Python, donde aprendí ciertas bases, y descubrí HTML, CSS y JS.
        </p>
        <p className="text-base">
          Encuentro comodidad en esta área y, con la determinación de mejorar constantemente,
          visualizo mi futuro como un Desarrollador Web.
        </p>
        <section className="grid mt-8 grid-cols-[repeat(2,1fr)] text-center">
          <div className="h-full border-r-[0.1875rem] border-solid border-primary pr-4" >
            <h2 className="subtitle">Tech Stack / Hard Skills</h2>
            <div className="mt-5 flex gap-7 flex-wrap justify-center">
              <img src="/tecnologías/html.png" alt="HTML Logo" className="w-10" />
              <img src="/tecnologías/css.png" alt="CSS Logo" className="w-10" />
              <img src="/tecnologías/sass.png" alt="SASS Logo" className="w-10" />
              <img src="/tecnologías/js.png" alt="JavaScript Logo" className="w-10" />
              <img src="/tecnologías/jquery.png" alt="JQuery Logo" className="w-10" />
              <img src="/tecnologías/react.png" alt="React Logo" className="w-10" />
              <img src="/tecnologías/git.webp" alt="Git Logo" className="w-10" />
              <img src="/tecnologías/github.png" alt="Github Logo" className="w-10" />
            </div>
            <h3 className="text-primary font-bold mt-5">Aprendiendo...</h3>
            <div className="mt-5 flex gap-7 flex-wrap justify-center">
              <img src="/tecnologías/ts.png" alt="TypeScript Logo" className="w-10" />
              <img src="/tecnologías/nodejs.png" alt="NodeJS Logo" className="w-10" />
              <img src="/tecnologías/express.png" alt="Express Logo" className="w-10" />
              <img src="/tecnologías/mongodb.webp" alt="MongoDB Logo" className="w-10" />
            </div>
          </div>
          <div className="pl-4 leading-6">
            <h2 className="subtitle">Soft Skills</h2>
            <ul className="mt-1 mr-2 mb-2 h-[85%] text-base list-none flex flex-col justify-around">
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
