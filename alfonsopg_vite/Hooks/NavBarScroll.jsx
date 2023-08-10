import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const updatePosition = () => {
      animationFrameId = requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return scrollPosition;
};