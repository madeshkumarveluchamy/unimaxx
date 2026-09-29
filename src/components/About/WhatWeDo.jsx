  import React from 'react';
  import { motion } from 'framer-motion';
  import './css/WhatWeDo.css';

  // குறிப்பு: உங்கள் மையப் படத்தின் பாதையை கீழே உள்ள src-ல் மாற்றிக்கொள்ளவும்
  import centerImage from '../../assets/whatwedo.webp'; 

  const WhatWeDo = () => {
    const servicesData = [
      {
        id: '01',
        title: 'Interior Design',
        desc: 'We create interiors that reflect the personality and requirements of each space. From spatial planning and material selection to lighting, furniture, and finishing details, every element is considered to create a cohesive and comfortable environment.',
        posClass: 'unq-wwd-pos-1',
        slideFrom: -50, // இடதுபுறத்தில் இருந்து வரும்
      },
      {
        id: '02',
        title: 'Architecture',
        desc: 'We develop architectural solutions that balance visual character with practical requirements. Every project is approached with careful consideration of its context, proportions, functionality, and long-term usability.',
        posClass: 'unq-wwd-pos-2',
        slideFrom: 50,  // வலதுபுறத்தில் இருந்து வரும்
      },
      {
        id: '03',
        title: 'Bespoke Furniture',
        desc: 'We design furniture specifically around the character and requirements of a space. From custom forms to carefully selected materials and finishes, our furniture solutions bring functionality and individuality together.',
        posClass: 'unq-wwd-pos-3',
        slideFrom: -50, // இடதுபுறத்தில் இருந்து வரும்
      }
    ];

    return (
      <section className="unq-wwd-container">
        
        {/* Header */}
        <motion.h2 
          className="unq-wwd-main-title font-alice"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          What we do
        </motion.h2>

        {/* Main Layout Area */}
        <div className="unq-wwd-layout">
          
          {/* Center Faded Image */}
          <div className="unq-wwd-image-wrapper">
            <img src={centerImage} alt="Abstract Architecture" className="unq-wwd-center-img" />
          </div>

          {/* Scroll Animated Cards */}
          {servicesData.map((item, index) => (
            <motion.div 
              key={index} 
              className={`unq-wwd-card ${item.posClass}`}
              initial={{ opacity: 0, x: item.slideFrom, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }} 
              /* once: false கொடுத்தால் மேலேயும் கீழேயும் ஸ்க்ரோல் செய்யும்போது மீண்டும் அனிமேட் ஆகும். 
                ஒருமுறை மட்டும் போதும் எனில் once: true என மாற்றிக்கொள்ளவும் */
            >
              <div className="unq-wwd-number font-geist maindes">{item.id}</div>
              <h3 className="unq-wwd-card-title font-geist maintit">{item.title}</h3>
              <p className="unq-wwd-card-desc font-geist mainsub">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>
    );
  };

  export default WhatWeDo;