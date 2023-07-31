import './App.css'
import Sidebar from "./Components/Sidebar/Sidebar"
import Paginas from "./Components/Páginas/Páginas"
import Navegacion from "./Components/Nav/Navegacion"
import { handleState } from './logic/pageState';

function App() {
  const {pageState, toggleState} = handleState()
  
  return (
    <>
      <div className="principal">
        <Sidebar />
        <Paginas pageState={pageState} />
      </div>
      <Navegacion click={toggleState} />
    </>
  )
}

export default App
