import Sidebar from "./components/Sidebar";
import Pages from "./components/Pages";
import Navigation from "./components/Navigation";
import { HashRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [sidebarState, setSidebarState] = useState(false)
  const handleSideBar = () => {
    setSidebarState(!sidebarState)
  }

  return (
    <HashRouter>
      <section className="principal">
        <Sidebar state={sidebarState} />
        <Pages menu={handleSideBar} state={sidebarState} />
      </section>
      <Navigation />
    </HashRouter>
  );
}

export default App;
