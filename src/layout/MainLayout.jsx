import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import BottomBar from "../components/BottomBar";
import { useEffect, useState } from "react";

export default function MainLayout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const style = {
    display: "flex",
    gap: "10px ",
    padding: isMobile ? "10px 12px" : "20px 25px",
    height: "calc(100vh - 100px)",
    overflow: "hidden",
  };

  const outlit = {
    width: "100%",
    // minHeight: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    backgroundColor: "#f9fafb",
  };

  return (
    <div>
      <TopBar />
      <BottomBar />
      <div style={style}>
        <SideBar />
        <main style={outlit}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
