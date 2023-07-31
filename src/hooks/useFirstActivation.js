import { useState, useEffect } from "react";

export function useFirstActivation(page, state){
  const [isFirstActivation, setIsFirstActivation] = useState(true);
  const currentPage = document.getElementById(page)
  
  useEffect(() => {
    if (state === "inactive") {
      setIsFirstActivation(true);
    }
  }, [state]);

  if (state == "active" && isFirstActivation) {
    const pageContent = currentPage.querySelector("div.content");
    pageContent.classList.remove("show");
    setTimeout(() => pageContent.classList.add("show"), 400);
    setIsFirstActivation(false);
  }

  return isFirstActivation;
}