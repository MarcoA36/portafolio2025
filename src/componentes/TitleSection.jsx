const TitleSection = ({ children }) => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      marginBottom: "1.5rem",
      width:"100%"
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "1px",
      position: "relative",
      padding: "12px 0",
    },
    line: {
      content: '""',
      flex: 1,
      height: "1px",
      backgroundColor: "black",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.line}></div>
      <h2 style={styles.title}>{children}</h2>
      <div style={styles.line}></div>
    </div>
  );
};

export default TitleSection;
