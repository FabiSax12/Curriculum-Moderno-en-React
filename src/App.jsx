import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Paginas from "./Components/Páginas/Páginas";
import Navegacion from "./Components/Nav/Navegacion";

function App() {
  const [pageState, setPageState] = useState({
    home: "active",
    user: "inactive",
    curriculum: "inactive",
    proyectos: "inactive",
    contact: "inactive",
  });
  const activatePage = (pageId) => {
    const newPageState = {};
    for (const pageName in pageState) {
      newPageState[pageName] = pageName === pageId ? "active" : "inactive";
    }
    setPageState(newPageState);
  };

  return (
    <>
      <div className="principal">
        <Sidebar />
        <Paginas pageState={pageState} />
      </div>
      <Navegacion click={activatePage} />
    </>
  );
}

export default App;
