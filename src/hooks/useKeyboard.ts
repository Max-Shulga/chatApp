import { useEffect } from "react";

function useKeyboard(onKeyPress: () => void, keyName: string): void {
  useEffect(() => {
    const handleKeyClick = (event: KeyboardEvent): void => {
      if (event.key === keyName) {
        onKeyPress();
      }
    };
    window.addEventListener("keydown", handleKeyClick);
    return (): void => {
      window.removeEventListener("keydown", handleKeyClick);
    };
  }, [onKeyPress]);
}

export default useKeyboard;
