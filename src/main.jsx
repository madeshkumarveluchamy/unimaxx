import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 🎯 ரௌட்டரை இம்போர்ட் பண்றோம்
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 🎯 இங்க ஓபன் பண்ணியாச்சு */}
      <App />
    </BrowserRouter> {/* 🎯 இங்க க்ளோஸ் பண்ணியாச்சு */}
  </React.StrictMode>,
);