import { useLocation, useParams } from "react-router-dom";
import { projectsList } from "../data/projects";

export default function TopBar() {
  const location = useLocation();
  const params = useParams();

  // Default Title
  let pageTitle = "SAP Easy Access – Portfolio";

  // If the route contains /files/
  if (location.pathname.includes("/files/")) {
    const { projectId, fileId } = params;

    const project = projectsList.find((p) => p.id === projectId);
    const file = project?.files.find((f) => f.id === fileId);

    if (file) {
      pageTitle = `ABAP Editor: ${file.name}`;
    }
  }

  const style = {
    display: "flex",
    alignItems: "center",
    background: "#354a5f",
    padding: "8px",
    color: "white",
    fontSize: "14px",
    position: "relative",
    height: "55px",
  };

  const logo = {
    width: "90px",
    height: "45px",
  };

  const title = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "20px",
    margin: 0,
    whiteSpace: "nowrap",
    fontWight: "300",
  };

  return (
    <div style={style}>
      <img src="/logo.png" alt="logo" style={logo} />
      <h1 style={title}>{pageTitle}</h1>
    </div>
  );
}
