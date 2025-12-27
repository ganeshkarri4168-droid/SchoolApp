import React from 'react';

const About = () => {
  const styles = {
    container: {
      minHeight: '100vh',            // fills the entire viewport height
      width: '100vw',                // fills the entire width
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',      // centers vertically
      alignItems: 'center',          // centers horizontally
    },
    heading: {
      fontSize: '2.8rem',
      marginBottom: '20px',
      color: '#fbbf24',
    },
    content: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    section: {
      marginTop: '40px',
    },
    sectionHeading: {
      color: '#38bdf8',
      fontSize: '1.8rem',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#e2e8f0',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.paragraph}>
          Welcome to our website! We are a dedicated team committed to excellence.
        </p>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Our Mission</h2>
          <p style={styles.paragraph}>
            To provide innovative solutions and exceptional service to our clients.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Our Team</h2>
          <p style={styles.paragraph}>
            We have a diverse team of professionals working together to achieve our goals.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
