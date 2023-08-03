import './App.css'
import Sidebar from "./Components/Sidebar/Sidebar"
import Paginas from "./Components/Páginas/Páginas"
import Navegacion from "./Components/Nav/Navegacion"
import { usePageStates } from './hooks/usePageStates';

function App() {
  const {pageState, activatePage} = usePageStates()
  
  return (
    <>
      <div className="principal">
        <Sidebar />
        <Paginas pageState={pageState} />
      </div>
      <Navegacion click={activatePage} />
    </>
  )
}

export default App
