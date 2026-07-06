import React, { useState } from 'react';
import './css/ContactFormSection.css';
import formImg from '../../assets/contactformbackground.webp'; // உங்கள் இமேஜ் பாத்

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // பட்டனை கிளிக் செய்தவுடன் லோடிங் காட்ட
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // இங்கு நீங்கள் காப்பி செய்த Google Apps Script Web App URL-ஐ போடவும் 🎯
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxaC3eFIa1uZDlzrL_oIvq2kJ9epGFVIEWyNZgHAob2xlwMnY7KGugQruFLPe0hKjKx/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // CORS error வராமல் தடுக்க
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      alert("Thank you! Your message has been sent successfully.");
      
      // Form-ஐ Reset செய்ய
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
    <section className="unimaxx-form-section-container">
      <div className="unimaxx-form-layout-grid">
        
        {/* ================= இடது பக்க கன்டென்ட் & விவரங்கள் ================= */}
        <div className="unimaxx-info-column">
          <div className="unimaxx-section-header">
            <span className="unimaxx-asterisk font-serief">✳</span>
            <h2>Connect with <br /> Our Design Team</h2>
          </div>
          
          <div className="unimaxx-form-image-wrapper">
            <img src={formImg} alt="Contact Team" className="unimaxx-form-src-img" />
          </div>

          <div className="unimaxx-address-grid">
            <div className="unimaxx-info-item">
              <div className="unimaxx-icon-box">📍</div>
              <p>Poompuhar Nagar Annex, Avinashi Rd, behind Haribhavanam, Goldwins, Civil Aerodrome Post</p>
            </div>
            
            <div className="unimaxx-info-item">
              <div className="unimaxx-icon-box">📍</div>
              <p>Coimbatore, <br />Tamil Nadu 641014</p>
            </div>

            <div className="unimaxx-info-item">
              <div className="unimaxx-icon-box">📞</div>
              <p>0422 269 6100 <br />0422 269 6200</p>
            </div>

            <div className="unimaxx-info-item">
              <div className="unimaxx-icon-box">✉️</div>
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

              {/* Loading State-க்காக பட்டனை Update செய்துள்ளேன் */}
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