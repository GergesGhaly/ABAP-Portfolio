import { useParams } from "react-router-dom";
import { projectsList } from "../data/projects";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

export default function FileViewer() {
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
    container: { padding: "20px" },
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
  };

  return (
    <div style={style.container}>
      <div style={style.header}>
        <h2>{file.name}</h2>
        <button style={style.btn} onClick={copyCode}>
          {copied ? "✓ Copied" : "Copy Code"}
        </button>
      </div>

      <SyntaxHighlighter
        language="abap"
        style={vs}
        showLineNumbers
        wrapLongLines
      >
        {file.content}
      </SyntaxHighlighter>
    </div>
  );
}
