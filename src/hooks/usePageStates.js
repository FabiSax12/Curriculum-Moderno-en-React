import { useState } from "react";

export const usePageStates = () => {
  const [pageState, setPageState] = useState({
    home: "active",
    user: "inactive",
    curriculum: "inactive",
    proyectos: "inactive",
    contact: "inactive"
  });

  const activatePage = (pageId) => {
    const newPageState = {};
    for (const key in pageState) {
      newPageState[key] = key === pageId ? "active" : "inactive";
    }
    setPageState(newPageState);
  };

  return { pageState, activatePage };
};



