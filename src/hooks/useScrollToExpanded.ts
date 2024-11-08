import { useCallback, useRef, useState } from "react";

function useScrollToExpanded<T extends HTMLElement>() {
  const [isExpanded, setIsExpanded] = useState(false);
  const elementRef = useRef<T | null>(null);

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => {
      const newState = !prev;
      if (newState && elementRef.current) {
        // Задержка перед прокруткой для предотвращения ошибок с расчетом высоты
        setTimeout(() => {
          elementRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 0);
      }
      return newState;
    });
  }, []);

  return { isExpanded, toggleExpand, elementRef };
}

export default useScrollToExpanded;
