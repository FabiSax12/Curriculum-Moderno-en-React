import { useEffect, useRef } from "react";

export function useFirstActivation() {
  const pageContentRef = useRef(null);

  useEffect(() => {
    const pageContent = pageContentRef.current;
    setTimeout(() => pageContent?.classList.add("show"), 400);

    return pageContent?.classList.remove("show");
  }, []);

  return { pageContentRef };
}
