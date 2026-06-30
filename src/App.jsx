import React from 'react';
import Homepage from './components/Home/Homepage';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/ProjectDetail1/Home1';
import ContactHome from "./components/Contact/ContactHome"
import OurStory from './components/story/OurStory';
import ServicePage from './components/servicepage/ServicePage';
import Home1 from './components/ProjectDetail1/Home1';
import Home2 from './components/ProjectDetail2/Home2';
import Home3 from './components/ProjectDetail3/Home3';
import ScrollToTop from './components/ScrollToTop';
import AboutHome from './components/About/AboutHome';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/what-we-deliver' element={<ServicePage />} />
        <Route path ='/start-a-project' element = {<ContactHome />} />
        <Route path='/projects' element = {<OurStory />}/>
        <Route path='/detail1' element = {<Home1 />}/>
        <Route path='/detail2' element = {<Home2 />}/>
        <Route path='/detail3' element = {<Home3 />}/>
        <Route path='/our-story' element = {<AboutHome />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;