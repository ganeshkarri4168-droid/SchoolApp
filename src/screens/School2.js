import React from "react";
import {
  TrendingUp,
  Star,
  RefreshCw,
  BarChart3,
  CheckCircle2,
  Users,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import "./School2.css"; // ✅ Import external stylesheet

export default function School2() {
  const stats = [
    { Icon: TrendingUp, value: "23+", label: "Years Legacy", color: "#f97316" },
    { Icon: Star, value: "1800+", label: "Satisfied Clients", color: "#facc15" },
    { Icon: RefreshCw, value: "96%", label: "Client Retention", color: "#14b8a6" },
    { Icon: BarChart3, value: "40+", label: "Modules", color: "#3b82f6" },
    { Icon: CheckCircle2, value: "2500+", label: "Verified Reviews", color: "#8b5cf6" },
    { Icon: Users, value: "25000+", label: "Professionals Trained", color: "#6366f1" },
    { Icon: GraduationCap, value: "1.5M+", label: "Students", color: "#ec4899" },
    { Icon: Briefcase, value: "200+", label: "IT Professionals", color: "#ef4444" },
  ];

  return (
    <div className="school2-container">
      <h1 className="school2-title">
        <span className="highlight">India’s Most Trusted</span> School Management Software
      </h1>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <stat.Icon className="stat-icon" style={{ color: stat.color }} size={40} />
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
