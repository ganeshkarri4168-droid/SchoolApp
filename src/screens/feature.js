import React from 'react';
//import './feature.css';

const Feature = () => {
  const features = [
    {
      title: 'Smart Attendance',
      desc: 'Automate attendance with biometric or RFID integration and real-time reports.',
      icon: '📋',
    },
    {
      title: 'Online Exams',
      desc: 'Create and manage tests easily with instant result generation.',
      icon: '🧠',
    },
    {
      title: 'Fee Management',
      desc: 'Simplify online fee collection and track payments securely.',
      icon: '💰',
    },
    {
      title: 'Parent Communication',
      desc: 'Keep parents informed with instant notifications and progress reports.',
      icon: '📱',
    },
    {
      title: 'Timetable Scheduling',
      desc: 'Generate, share, and update timetables quickly for all grades.',
      icon: '📆',
    },
    {
      title: 'Reports & Analytics',
      desc: 'Powerful dashboards for insights into school performance.',
      icon: '📊',
    },
  ];

  return (
    <div className="feature-container">
      <h1 className="feature-title">✨ Key Features of Our School ERP</h1>
      <p className="feature-subtitle">
        Explore our smart and fully integrated modules built for modern schools.
      </p>

      <div className="feature-grid">
        {features.map((f, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
