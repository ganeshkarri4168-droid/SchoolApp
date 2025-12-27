import React from "react";

const Client = () => {
  const clients = [
    {
      name: "Sunrise Public School",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135670.png",
    },
    {
      name: "Global International College",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135731.png",
    },
    {
      name: "Elite Academy",
      logo: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    },
    {
      name: "Tech Valley School",
      logo: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    },
    {
      name: "Greenfield High",
      logo: "https://cdn-icons-png.flaticon.com/512/743/743131.png",
    },
    {
      name: "Smart Minds Institute",
      logo: "https://cdn-icons-png.flaticon.com/512/1828/1828859.png",
    },
  ];

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      color: "white",
      padding: "60px 20px",
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "10px",
      color: "#fff",
    },
    subtitle: {
      color: "#94a3b8",
      fontSize: "1.2rem",
      marginBottom: "40px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "24px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    card: {
      background: "#1e293b",
      borderRadius: "20px",
      padding: "30px 20px",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 30px rgba(59,130,246,0.3)",
    },
    logo: {
      width: "80px",
      height: "80px",
      objectFit: "contain",
      marginBottom: "15px",
      borderRadius: "50%",
      background: "#fff",
      padding: "10px",
    },
    name: {
      fontSize: "1.1rem",
      color: "#38bdf8",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏫 Our Clients</h1>
      <p style={styles.subtitle}>
        We are proud to work with leading schools and institutions across the country.
      </p>

      <div style={styles.grid}>
        {clients.map((client, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, styles.cardHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, styles.card)
            }
          >
            <img src={client.logo} alt={client.name} style={styles.logo} />
            <h3 style={styles.name}>{client.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
