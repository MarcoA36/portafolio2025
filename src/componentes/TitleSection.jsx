// const TitleSection = ({ children }) => {
//   const styles = {
//     container: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       gap: "16px",
//       marginBottom: "1.5rem",
//       width:"100%"
//     },
//     title: {
//       fontSize: "2rem",
//       fontWeight: "bold",
//       textAlign: "center",
//       textTransform: "uppercase",
//       letterSpacing: "1px",
//       position: "relative",
//       padding: "12px 0",
//     },
//     line: {
//       content: '""',
//       flex: 1,
//       height: "1px",
//       backgroundColor: "black",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.line}></div>
//       <h2 style={styles.title}>{children}</h2>
//       <div style={styles.line}></div>
//     </div>
//   );
// };

// export default TitleSection;




const TitleSection = ({ children }) => {
  const styles = {
    wrapper: {
      position: "relative",
      marginTop: "-40px",
      marginBottom: "60px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      zIndex: 2,
    },
    titleBox: {
      backgroundColor: "#e76f51", // similar al color de la imagen
      padding: "10px 30px",
      color: "white",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "2px",
      fontSize: "14px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      borderRadius: "4px",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.titleBox}>{children}</div>
    </div>
  );
};

export default TitleSection;
