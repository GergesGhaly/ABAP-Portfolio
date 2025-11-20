import React, { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";

export default function CV({ data }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { name, title, experience, projects, contact } = data;
  const cvRef = useRef();

  const style = {
    section: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "start",
      justifyContent: "start",

      padding: isMobile ? "" : "2rem",
      // backgroundColor: "#f9fafb",
      fontFamily: "sans-serif",
      lineHeight: "1.4",
    },
    container: {
      // maxWidth: "800px",
      // margin: "0 auto",
      backgroundColor: "#fff",
      // borderRadius: "12px",
      padding: "2rem",
      // boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1.5rem",
    },
    nameTitle: {
      marginBottom: "0.5rem",
    },
    name: { fontSize: "1.75rem", fontWeight: "bold" },
    title: { fontSize: "1rem", color: "#4b5563" },
    sectionTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      marginBottom: "0.75rem",
      borderBottom: "1px solid #e5e7eb",
      paddingBottom: "0.25rem",
    },
    card: {
      padding: "1rem",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      backgroundColor: "#fff",
      marginBottom: "0.75rem",
    },
    footer: {
      position: "absolute",
      bottom: isMobile ? "0.1rem" : "1.5rem",
      right: isMobile ? "1rem" : "4rem",
      display: "flex",
      justifyContent: "flex-end",
      // textAlign: "center",
      fontSize: "0.75rem",
      color: "#9ca3af",
      marginTop: "2rem",
    },
    button: {
      padding: "0.5rem 1rem",
      backgroundColor: "#0a6ed1",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };

  const downloadPDF = () => {
    const element = cvRef.current;
    html2pdf()
      .set({
        margin: 0.5,
        filename: `${name.replace(" ", "_")}_CV.pdf`,
        html2canvas: { scale: 2 },
      })
      .from(element)
      .save();
  };

  return (
    <section style={style.section}>
      <div style={style.container} ref={cvRef}>
        {/* Header */}
        <div style={style.header}>
          <div style={style.nameTitle}>
            <div style={style.name}>{name}</div>
            <div style={style.title}>{title}</div>
          </div>
          {/* <button style={style.button} onClick={downloadPDF}>
            Download PDF
          </button> */}
        </div>

        {/* Professional Experience */}
        <div>
          <div style={style.sectionTitle}>Professional Experience</div>
          {experience.map((job, idx) => (
            <div key={idx} style={style.card}>
              <div>
                <strong>{job.role}</strong> @ {job.company}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                {job.period} • {job.location}
              </div>
              <ul style={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>
                {job.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div>
          <div style={style.sectionTitle}>Selected Projects</div>
          {projects.map((p, i) => (
            <div key={i} style={style.card}>
              <div>
                <strong>{p.name}</strong> ({p.period})
              </div>
              <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                {p.technologies.join(" • ")}
              </div>
              <p style={{ marginTop: "0.5rem" }}>{p.summary}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div>
          <div style={style.sectionTitle}>Additional Info</div>
          <p>Languages: {contact.languages.join(", ")}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Location: {contact.location}</p>
          <p>LinkedIn: {contact.linkedin}</p>
        </div>
      </div>

      {/* Footer */}
      <div style={style.footer}>
        {/* <div style={style.nameTitle}>
            <div style={style.name}>{name}</div>
            <div style={style.title}>{title}</div>
          </div> */}
        <button style={style.button} onClick={downloadPDF}>
          Download 
        </button>
      </div>
    </section>
  );
}
