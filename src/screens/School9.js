// src/App.jsx
import { useState } from 'react';
import './School9.css';

function School9() {
  const [formData, setFormData] = useState({
    name: '',
    institute: '',
    email: '',
    mobile: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.institute.trim()) newErrors.institute = true;
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = true;
    if (!formData.mobile.trim()) newErrors.mobile = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowSuccess(true);
      setTimeout(() => {
        alert('Thank you for subscribing!');
      }, 600);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Subscribe Us And Get The Latest Updates And News</h1>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              placeholder="Your name *"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              name="institute"
              placeholder="Institute Name *"
              value={formData.institute}
              onChange={handleChange}
              className={errors.institute ? 'error' : ''}
            />
          </div>

          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="Your Email ID *"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
          </div>

          <div className="input-wrapper mobile-wrapper">
            <span className="flag">India</span>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number *"
              value={formData.mobile}
              onChange={handleChange}
              className={errors.mobile ? 'error' : ''}
            />
          </div>

          {showSuccess && (
            <div className="success-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="3">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12l3 3 5-6"/>
              </svg>
              <span>Success!</span>
            </div>
          )}

          {/* <div className="cloudflare">
            <span>Protected by</span>
            <img src="https://dash.cloudflare.com/favicon-32x32.png" alt="Cloudflare" />
            <span>Cloudflare</span>
            <span>•</span>
            <a href="#">Privacy</a>
            <span>•</span>
            <a href="#">Terms</a>
          </div> */}

          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}

export default School9;