import { useState } from "react";

export const usePageStates = () => {
  const [pageState, setPageState] = useState({
    home: "active",
    user: "inactive",
    curriculum: "inactive",
    xp: "inactive",
    contact: "inactive"
  });

  const toggleState = (pageId) => {
    setPageState(prevPageState => {
      const newPageState = {};
      Object.keys(prevPageState).forEach(key => {
        newPageState[key] = key === pageId ? "active" : "inactive";
      });
      return newPageState;
    });
  };

  return {pageState, toggleState}
}



