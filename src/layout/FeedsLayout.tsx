import { ReactElement } from "react";
import Header from "@/layout/Header";
import { Outlet } from "react-router";

function FeedsLayout(): ReactElement {
  return (
    <section className="w-full">
      <Header />
      <Outlet />
    </section>
  );
}
export default FeedsLayout;
