import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🎯 ரியாக்ட் ரெண்டரிங் முடிஞ்சதும் இன்ஸ்டன்ட்டா டாப் போக 0ms டைம்அவுட் பிக்ஸ்
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;