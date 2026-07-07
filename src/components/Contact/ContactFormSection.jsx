import React, { useState } from 'react';
import './css/ContactFormSection.css';
import formImg from '../../assets/contactformbackground.webp'; // உங்கள் இமேஜ் பாத்
import staricon from "../../assets/logo1.png"
const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxaC3eFIa1uZDlzrL_oIvq2kJ9epGFVIEWyNZgHAob2xlwMnY7KGugQruFLPe0hKjKx/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      alert("Thank you! Your message has been sent successfully.");
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="unimaxx-form-section-container" id="contact">
      <div className="unimaxx-form-layout-grid">
        
        {/* ================= இடது பக்க கன்டென்ட் & விவரங்கள் ================= */}
        <div className="unimaxx-info-column">
         <div className="unimaxx-section-header">
          <h2> <img 
            src={staricon} /* உங்களது இமேஜ் இருக்கும் சரியான file path-ஐ இங்கே கொடுக்கவும் */
            alt="Star Icon" 
            className="unimaxx-asterisk-icon" 
          />Connect with <br /> <span className="hello">Our Design Team</span></h2>
        </div>
          
          <div className="unimaxx-form-image-wrapper">
            <img src={formImg} alt="Contact Team" className="unimaxx-form-src-img" />
          </div>

          <div className="unimaxx-address-grid">
            <div className="unimaxx-info-item">
              <div className="unimaxx-icon-box">
                {/* Location Icon SVG */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <p>Poompuhar Nagar Annex, Avinashi Rd, behind Haribhavanam, Goldwins, Civil Aerodrome Post</p>
            </div>
            
            <div className="unimaxx-info-item">
              <div className="unimaxx-icon-box">
                {/* Location Icon SVG */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <p>Coimbatore, <br />Tamil Nadu 641014</p>
            </div>

            <div className="unimaxx-info-item">
              <div className="unimaxx-icon-box">
                {/* Phone Icon SVG */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <p>0422 269 6100 <br />0422 269 6200</p>
            </div>

            <div className="unimaxx-info-item">
              <div className="unimaxx-icon-box">
                {/* Email Icon SVG */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <p className="unimaxx-email-text">admin@unimaxxarchitects.com</p>
            </div>
          </div>
        </div>

        {/* ================= வலது பக்க பிரீமியம் ஃபார்ம் கார்டு ================= */}
        <div className="unimaxx-form-card-column">
          <div className="unimaxx-premium-form-card">
            <form onSubmit={handleSubmit}>
              
              <div className="unimaxx-form-row-dual">
                <div className="unimaxx-input-group">
                  <label>FIRST NAME</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="unimaxx-input-group">
                  <label>LAST NAME</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="unimaxx-input-group">
                <label>EMAIL</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="email@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="unimaxx-input-group">
                <label>PHONE</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="unimaxx-input-group">
                <label>MESSAGE</label>
                <textarea 
                  name="message" 
                  placeholder="Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="unimaxx-form-submit-btn"
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;