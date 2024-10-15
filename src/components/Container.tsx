import { ReactElement, ReactNode } from "react";

type ContainerProps = {
  restClasses?: string;
  children: ReactNode;
};

function Container({ restClasses, children }: ContainerProps): ReactElement {
  return (
    <section className={`${restClasses || ""} w-full`}>
      <div className="max-w-[1440px] w-full m-auto">{children}</div>
    </section>
  );
}

export default Container;
