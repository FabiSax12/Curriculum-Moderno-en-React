import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Pages from "./components/Pages";
import Navigation from "./Components/Navigation";

function App() {
  const [sidebarState, setSidebarState] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const handleSideBar = () => {
    setSidebarState(!sidebarState)
  }

  const handleLightMode = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    // Cuando cambia el estado de isDarkMode, actualiza los estilos del <body>
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <HashRouter>
      <section className="principal">
        <Sidebar state={sidebarState} />
        <Pages
          menu={handleSideBar}
          state={sidebarState}
          lightMode={isDark}
          handleLightMode={handleLightMode}
        />
      </section>
      <Navigation />
    </HashRouter>
  );
}

export default App;
