import "./Home.css"

const Home = ({ state }) => {
  return (
    <div className={`page_home ${state}`}>
      <h2>FABIÁN RICARDO VARGAS ARAYA</h2>
      <h4>Estudiante de Desarrollo Web</h4>
    </div>
  )
}

export default Home