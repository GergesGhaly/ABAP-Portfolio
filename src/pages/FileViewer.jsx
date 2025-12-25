import { useParams } from "react-router-dom";
import { projectsList } from "../data/projects";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";

export default function FileViewer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { projectId, fileId } = useParams();
  const [copied, setCopied] = useState(false);

  const project = projectsList.find((p) => p.id === projectId);
  const file = project?.files?.find((f) => f.id === fileId);

  if (!project || !file) return <h2>File not found</h2>;

  const copyCode = () => {
    navigator.clipboard.writeText(file.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const style = {
    container: { padding: isMobile ? "5px" : "20px" },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    },
    btn: {
      padding: "5px 10px",
      fontSize: "12px",
      cursor: "pointer",
      background: "#354a5f",
      color: "white",
      border: "none",
      borderRadius: "5px",
    },
    title: {
      fontSize: isMobile ? "16px" : "20px",
    },
  };

  return (
    <div style={style.container}>
      <div style={style.header}>
        <h2 style={style.title}>{file.name}</h2>
        <button style={style.btn} onClick={copyCode}>
          {copied ? "✓ Copied" : "Copy Code"}
        </button>
      </div>

      <SyntaxHighlighter
        language="abap"
        style={vs}
        showLineNumbers
        wrapLongLines
       
       
        codeTagProps={{
          style: {
          lineHeight: "1.5",
          },
        }}

      >
        {file.content}
      </SyntaxHighlighter>
    </div>
  );
}
