import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import BottomBar from "../components/bottomBar";

export default function MainLayout() {
  const style = {
    display: "flex",
    gap: "10px ",
    padding: "20px 25px",
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
