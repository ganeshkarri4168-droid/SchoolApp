// src/School4.js
import React from "react";
import "./School4.css";
import { 
  MessageCircle, Fingerprint, Monitor, Truck, 
  FileText, Smartphone, QrCode, Calculator 
} from "lucide-react";

export default function School4() {
  const features = [
    { Icon: MessageCircle, title: "WhatsApp" },
    { Icon: Fingerprint, title: "Biometric" },
    { Icon: Monitor, title: "Virtual Class" },
    { Icon: Truck, title: "Vehicle Tracking" },
    { Icon: FileText, title: "E-Exam" },
    { Icon: Smartphone, title: "Online Payment" },
    { Icon: QrCode, title: "Barcode" },
    { Icon: Calculator, title: "Tally Integration" },
  ];

  return (
    <div className="school4-container">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon-circle">
              <feature.Icon className="feature-icon" />
            </div>
            <p className="feature-title">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}