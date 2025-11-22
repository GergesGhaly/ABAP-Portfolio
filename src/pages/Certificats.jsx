import React, { useEffect, useState } from "react";
import { certificatsData } from "../data/userInfo";

const Certificats = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [lightbox, setLightbox] = useState({ open: false, imgSrc: "" });

  const sstyle = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: isMobile ? "5px" : "20px",
    },
    row: {
      display: "flex",
      gap: "20px",
    },
    card: {
      flex: 1,
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
      cursor: "pointer",
    },
    title: { fontWeight: "bold", marginBottom: "5px" },
    description: { fontSize: "12px", marginBottom: "5px", color: "#555" },
    date: { fontSize: "10px", color: "#888", marginBottom: "5px" },
    image: { width: "100%", borderRadius: "4px" },
    lightboxOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    },
    lightboxImage: {
      maxWidth: "90%",
      maxHeight: "90%",
      borderRadius: "8px",
    },
  };

  // تقسيم الصور في صفوف من صورتين لكل صف
  const rows = [];
  for (let i = 0; i < certificatsData.length; i += 2) {
    rows.push(certificatsData.slice(i, i + 2));
  }

  return (
    <div style={sstyle.container}>
      {rows.map((row, idx) => (
        <div key={idx} style={sstyle.row}>
          {row.map((cert) => (
            <div
              key={cert.id}
              style={sstyle.card}
              onClick={() => setLightbox({ open: true, imgSrc: cert.img })}
            >
              <div style={sstyle.title}>{cert.title}</div>
              <div style={sstyle.description}>{cert.description}</div>
              <div style={sstyle.date}>{cert.date}</div>
              <img src={cert.img} alt={cert.title} style={sstyle.image} />
            </div>
          ))}
        </div>
      ))}

      {lightbox.open && (
        <div
          style={sstyle.lightboxOverlay}
          onClick={() => setLightbox({ open: false, imgSrc: "" })}
        >
          <img
            src={lightbox.imgSrc}
            alt="preview"
            style={sstyle.lightboxImage}
          />
        </div>
      )}
    </div>
  );
};

export default Certificats;
