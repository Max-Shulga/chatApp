import { ReactElement, useEffect, useState } from "react";
import Header from "@/layout/Header";
import { Outlet } from "react-router";
import Sidebar from "@/views/Sidebar/Sidebar";
import { useAppSelector } from "@/store/hooks";
import { useWhoAmIQuery } from "@/store/authApi";

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
    <section className="w-full h-full">
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className={`transition-all duration-300 h-[calc(100vh-82px)] hide-scrollbar 
         ${isSidebarOpen ? "ml-[280px] lg:ml-[320px]" : "ml-0"}`}
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
