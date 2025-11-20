import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    homePage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // padding: "20px",
      width: "100%",
      height: "calc(100vh - 150px)",
      overflow: "hidden",
      // zIndex: "99",
    },
    homeLogo: {
      maxWidth: isMobile ? "400px" : "",
      // margin: "60px auto",
    },
  };

  return (
    <div style={styles.homePage}>
      <img src="/logo.png" alt="logo" style={styles.homeLogo} />
    </div>
  );
}
