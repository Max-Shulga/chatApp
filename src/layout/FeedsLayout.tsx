import { ReactElement, useEffect, useState } from "react";
import Header from "@/layout/Header";
import { Outlet } from "react-router";
import Sidebar from "@/views/Sidebar/Sidebar";
import { useWhoAmIQuery } from "@/store/api";
import { useAppSelector } from "@/store/hooks";

function FeedsLayout(): ReactElement {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleToggleSideBarVisibility = (): void => {
    setIsSidebarOpen((prev) => !prev);
  };
  const { user } = useAppSelector((state) => state.user);
  const { refetch } = useWhoAmIQuery();
  useEffect(() => {
    if (!user) {
      refetch();
    }
  }, [user]);

  return (
    <section className="w-full">
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-[280px] lg:ml-[320px]" : "ml-0"
        }`}
      >
        <Header
          isOpen={isSidebarOpen}
          onClick={handleToggleSideBarVisibility}
        />
        <Outlet />
      </div>
    </section>
  );
}
export default FeedsLayout;
