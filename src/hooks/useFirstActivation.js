import { useState, useEffect, useRef } from "react";

export function useFirstActivation(state, animationClass) {
  const [isFirstActivation, setIsFirstActivation] = useState(true);
  const pageContentRef = useRef(null);

  useEffect(() => {
    const pageContent = pageContentRef.current;

    if (state === "inactive") {
      setIsFirstActivation(true);
      pageContent?.classList.remove(animationClass)
    } else if (state === "active" && isFirstActivation) {
      pageContent?.classList.remove(animationClass);
      setTimeout(() => pageContent?.classList.add(animationClass), 400);
      setIsFirstActivation(false);
    }
  }, [state]);

  return { pageContentRef };
}