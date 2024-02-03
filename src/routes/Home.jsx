import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="w-max h-max mt-[12.5rem] mx-auto mb-0 text-center font-normal text-base leading-[3rem] animate-home-intro">
        <h2 className="font-normal text-2xl">FABIÁN RICARDO VARGAS ARAYA</h2>
        <h4 className="text-third font-medium">Desarrollo Web Autodidacta</h4>
      </div>
      <section className="skills">
        <Skills animation={true} />
        <Skills animation={true} />
      </section>
    </div>
  );
};

export default Home;
