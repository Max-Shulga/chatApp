import { Link, useLocation } from "react-router-dom";
import { ReactElement } from "react";

function Breadcrumbs(): ReactElement {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const capitalizeFirstLetter = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-2 text-blue-500">
        {pathnames.slice(0, -1).map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to}>
              <Link to={to} className="text-blue-500">
                {capitalizeFirstLetter(value.replace("-", " "))}
              </Link>

              <span className="text-grays-300">{" > "}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
