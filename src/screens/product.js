import React from "react";

const Product = () => {
  const products = [
    {
      title: "School ERP",
      desc: "All-in-one management software to handle admissions, fees, attendance, and more for schools.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135731.png",
    },
    {
      title: "College ERP",
      desc: "Powerful and scalable ERP designed for colleges and universities with advanced analytics.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135670.png",
    },
    {
      title: "Mobile App",
      desc: "A dedicated mobile app for parents, teachers, and students to stay connected anytime, anywhere.",
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    },
    {
      title: "Integration Suite",
      desc: "Seamless integration with SMS, Payment Gateways, Biometric, and Barcode systems.",
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828859.png",
    },
    {
      title: "Digital Classroom",
      desc: "Interactive learning tools with online assignments, video lectures, and progress tracking.",
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    },
    {
      title: "Vehicle Tracking",
      desc: "Ensure student safety with GPS-based school bus tracking and live updates for parents.",
      img: "https://cdn-icons-png.flaticon.com/512/743/743131.png",
    },
  ];

  // ✅ Inline Styles
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
      color: "#fbbf24",
    },
    subtitle: {
      color: "#94a3b8",
      fontSize: "1.2rem",
      marginBottom: "40px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "24px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      background: "#1e293b",
      borderRadius: "20px",
      padding: "30px 20px",
      transition: "all 0.3s ease",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 30px rgba(59,130,246,0.3)",
    },
    img: {
      width: "80px",
      height: "80px",
      objectFit: "contain",
      marginBottom: "15px",
    },
    cardTitle: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      color: "#38bdf8",
      marginBottom: "10px",
    },
    desc: {
      fontSize: "1rem",
      color: "#cbd5e1",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎓 Our Products</h1>
      <p style={styles.subtitle}>
        Explore our suite of digital solutions crafted to modernize school and college management.
      </p>

      <div style={styles.grid}>
        {products.map((p, index) => (
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
            <img src={p.img} alt={p.title} style={styles.img} />
            <h3 style={styles.cardTitle}>{p.title}</h3>
            <p style={styles.desc}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
