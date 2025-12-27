import React from "react";

const Resource = () => {
  const resources = [
    {
      title: "📘 Brochures",
      desc: "Download our latest product brochures to explore all features in detail.",
    },
    {
      title: "🎤 Presentations",
      desc: "View interactive presentations that explain how our system benefits schools.",
    },
    {
      title: "📂 Case Studies",
      desc: "Learn from real institutions that transformed their operations using our ERP.",
    },
    {
      title: "💡 Blog",
      desc: "Stay updated with the latest trends, tips, and insights in education technology.",
    },
    {
      title: "📑 Policy & Documents",
      desc: "Access privacy policies, refund policies, and terms of use.",
    },
    {
      title: "🌐 Sitemap",
      desc: "Explore all available sections of our website in one place.",
    },
  ];

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      color: "white",
      padding: "60px 20px",
      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "10px",
      color: "#fff",
    },
    subtitle: {
      color: "#94a3b8",
      fontSize: "1.1rem",
      marginBottom: "40px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "24px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    card: {
      background: "#1e293b",
      borderRadius: "20px",
      padding: "30px 20px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 35px rgba(59,130,246,0.3)",
    },
    titleSmall: {
      fontSize: "1.3rem",
      color: "#38bdf8",
      marginBottom: "10px",
      fontWeight: "600",
    },
    desc: {
      color: "#cbd5e1",
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📚 Resources</h1>
      <p style={styles.subtitle}>
        Explore guides, blogs, and documents to help you get the best from our platform.
      </p>

      <div style={styles.grid}>
        {resources.map((res, index) => (
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
            <h3 style={styles.titleSmall}>{res.title}</h3>
            <p style={styles.desc}>{res.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
