export default function Home() {
  const styles = {
    homePage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // padding: "20px",
      width: "100%",
      height: "calc(100vh - 150px)",
      overFlow: "hidden",
      // zIndex: "99",
    },
    homeLogo: {
      // maxWidth: "400px",
      // margin: "60px auto",
    },
  };

  return (
    <div style={styles.homePage}>
      <img src="/logo.png" alt="logo" style={styles.homeLogo} />
    </div>
  );
}
