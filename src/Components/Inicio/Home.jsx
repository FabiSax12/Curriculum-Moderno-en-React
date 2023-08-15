import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className={`page_home active`}>
      <div className="page_home_title">
        <h2>FABIÁN RICARDO VARGAS ARAYA</h2>
        <h4>Estudiante de Desarrollo Web</h4>
      </div>
      <section className="skills">
        <Skills animation={true} />
        <Skills animation={true} />
      </section>
    </div>
  );
};

export default Home;
