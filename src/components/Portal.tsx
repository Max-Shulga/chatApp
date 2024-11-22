import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }: { children: ReactNode }): ReactNode => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? ReactDOM.createPortal(children, document.body) : null;
};

export default Portal;
