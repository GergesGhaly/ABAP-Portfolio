import { Link } from "react-router-dom";
import { useState } from "react";
import { projectsList } from "../data/projects";
import { BsJustify } from "react-icons/bs";

export default function SideBar() {
  const [openProjects, setOpenProjects] = useState(false);
  const [openProjectFiles, setOpenProjectFiles] = useState({});

  const toggleProjectFiles = (id) => {
    setOpenProjectFiles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const style = {
    sidebar: {
      width: "270px",
      borderRight: "1px solid #ccc",
      fontSize: "14px",
    },
    ul: { padding: 0 },
    li: { marginTop: "10px", cursor: "pointer", listStyle: "none" },
    link: { textDecoration: "none", color: "#333" },
    subLink: { textDecoration: "none", color: "#444", marginLeft: "25px" },
    foldersWraper: {
      display: "flex",

      flexDirection: "column",
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
      textDecoration: "none",
      color: "#666",
      marginLeft: "25px",
      fontSize: "12px",

      // padding: "5px 0",
    },
  };

  return (
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
        <li style={style.li} onClick={() => setOpenProjects(!openProjects)}>
          {openProjects ? "^ 📂" : "> 📁"} Projects
        </li>

        {openProjects && (
          <ul style={style.foldersWraper}>
            {projectsList.map((p) => (
              <li key={p.id}>
                {/* Project as Folder */}
                <div onClick={() => toggleProjectFiles(p.id)}>
                  {openProjectFiles[p.id] ? " 📂" : "📁"} {p.name}
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
                          📄 {f.name}
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
  );
}
