import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { projectsList } from "../data/projects";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CiFolderOn } from "react-icons/ci";
import { PiFolderOpenThin } from "react-icons/pi";
import { FaSheetPlastic } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function SideBar() {
  const [openProjects, setOpenProjects] = useState(false);
  const [openProjectFiles, setOpenProjectFiles] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 600); // تظهر افتراضي للشاشات الكبيرة

  const toggleProjectFiles = (id) => {
    setOpenProjectFiles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconColor = "#0374b6";
  const style = {
    sidebarWrapper: {},
    sidebar: {
      width: "270px",
      borderRight: "1px solid #ccc",
      fontSize: "14px",
      position: isMobile ? "fixed" : "relative",
      top: 0,
      left: sidebarOpen ? 0 : -300,
      height: "100vh",
      backgroundColor: "#fff",
      overflowY: "auto",
      transition: "left 0.3s ease",
      zIndex: 1000,
      padding: "10px",
    },
    toggleButton: {
      display: isMobile ? "flex" : "none",
      alignItems: "center",
      position: "absolute",
      top: "50%",
      left: sidebarOpen ? 250 : 0,
      transform: "translateY(-50%)",
      backgroundColor: "#354a5f",
      color: "#fff",
      padding: "8px",
      cursor: "pointer",
      borderTopLeftRadius: "5px",
      borderBottomLeftRadius: "5px",
      zIndex: 1100,
    },
    ul: { padding: 0 },
    li: {
      display: "flex",
      alignItems: "center",
      gap: "3px",
      marginTop: "10px",
      cursor: "pointer",
      listStyle: "none",
    },
    link: { textDecoration: "none", color: "#333" },
    subLink: { textDecoration: "none", color: "#444", marginLeft: "25px" },
    foldersWraper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      marginLeft: "20px",
      gap: "5px",
      padding: "5px 0",
    },
    filesWraper: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      padding: "5px 0",
    },
    fileLink: {
      display: "flex",
      alignItems: "center",
      gap: "2px",
      textDecoration: "none",
      color: "#666",
      marginLeft: "25px",
      fontSize: "12px",
    },
    folderRow: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
  };

  return (
    <div style={style.sidebarWrapper}>
      {/* زر التوجيل عند الموبايل */}
      {isMobile && (
        <div
          style={style.toggleButton}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <AiOutlineLeft size={15} />
          ) : (
            <AiOutlineRight size={15} />
          )}
        </div>
      )}

      <div style={style.sidebar}>
        <ul style={style.ul}>
          <li style={style.li}>
            <Link style={style.link} to="/">
              Home
            </Link>
          </li>

          <li style={style.li}>
            <Link style={style.link} to="/cv">
              CV
            </Link>
          </li>

          <li style={style.li}>
            <Link style={style.link} to="/certificats">
              Certificats
            </Link>
          </li>

          {/* Root Projects Folder */}
          {/* <div style={style.folderRow}>
            
          </div> */}
          <li style={style.li} onClick={() => setOpenProjects(!openProjects)}>
            {openProjects ? (
              <>
                <IoIosArrowDown />

                <PiFolderOpenThin size={20} color={iconColor} />
              </>
            ) : (
              <>
                <IoIosArrowForward />

                <CiFolderOn size={20} color={iconColor} />
              </>
            )}{" "}
            Projects
          </li>

          {openProjects && (
            <ul style={style.foldersWraper}>
              {projectsList.map((p) => (
                <li key={p.id}>
                  {/* Project as Folder */}
                  <div onClick={() => toggleProjectFiles(p.id)}>
                    {openProjectFiles[p.id] ? (
                      <PiFolderOpenThin size={20} color={iconColor} />
                    ) : (
                      <CiFolderOn size={20} color={iconColor} />
                    )}{" "}
                    {p.name}
                  </div>

                  {/* Sub Files List */}
                  {openProjectFiles[p.id] && (
                    <ul style={style.filesWraper}>
                      {p.files.map((f) => (
                        <li key={f.id}>
                          <Link
                            style={style.fileLink}
                            to={`/projects/${p.id}/files/${f.id}`}
                          >
                            <FaSheetPlastic size={15} color={iconColor} />
                            {f.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}
