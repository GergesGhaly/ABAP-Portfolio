import React, { useState, useEffect } from "react";

export default function CV({ pdfUrl }) {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const style = {
    section: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      justifyContent: "start",
      padding: isMobile ? "0" : "2rem",
      background: "#f5f5f5",
     
    },
    viewerContainer: {
      width: "100%",
      height: "90vh",
      overflow: "hidden",
      border: "1px solid #ccc",
      background: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    iframe: {
      width: `${scale * 100}%`,
      height: `${scale * 100}vh`,
      border: "none",
      transform: `scale(${scale})`,
      transformOrigin: "top center",
    },
    controls: {
      display: "flex",
      gap: "10px",
      marginBottom: "10px",
    },
    button: {
      padding: "0.5rem 1rem",
      backgroundColor: "#0a6ed1",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <section style={style.section}>
      {/* التحكم في التكبير + التحميل */}
      <div style={style.controls}>
        <button style={style.button} onClick={() => setScale(scale + 0.1)}>
          Zoom +
        </button>
        <button
          style={style.button}
          onClick={() => scale > 0.3 && setScale(scale - 0.1)}
        >
          Zoom –
        </button>

        <a href={pdfUrl} download style={{ textDecoration: "none" }}>
          <button style={style.button}>Download</button>
        </a>
      </div>

      {/* PDF Viewer */}
      <div style={style.viewerContainer}>
        <iframe style={style.iframe} src={pdfUrl}></iframe>
      </div>
    </section>
  );
}
