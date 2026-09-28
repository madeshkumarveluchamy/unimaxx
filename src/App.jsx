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
import Home4 from './components/ProjectDetail4/Home4';
import Home5 from './components/ProjectDetail5/Home5';
import Home6 from './components/ProjectDetail6/Home6';
import Home7 from './components/ProjectDetail7/Home7';
import Home8 from './components/ProjectDetail8/Home8';
import Home9 from './components/ProjectDetail9/Home9';
import Home10 from './components/ProjectDetail10/Home10';
import Home11 from './components/ProjectDetail11/Home11';
import Home12 from './components/ProjectDetail12/Home12';
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
         <Route path ='projects/start-a-project' element = {<ContactHome />} />
          <Route path ='what-we-deliver/start-a-project' element = {<ContactHome />} />
        <Route path ='/start-a-project' element = {<ContactHome />} />
        <Route path='/projects' element = {<OurStory />}/>
        <Route path='/projects/cafe' element = {<Home1 />}/>
        <Route path='/projects/serenia' element = {<Home2 />}/>
        <Route path='/projects/dr-vijayalakshmi' element = {<Home3 />}/>
        <Route path='/projects/mr-balachandar' element = {<Home4 />}/>
        <Route path='/projects/mr-balaji' element = {<Home5 />}/>
        <Route path='/projects/mr-shanmugam' element = {<Home6 />}/>
        <Route path='/projects/gowthami-residence' element = {<Home7 />}/>
        <Route path='/projects/meena-residence' element = {<Home8 />}/>
        <Route path='/projects/pritham-residence' element = {<Home9 />}/>
        <Route path='/projects/mr-subramani' element = {<Home10 />}/>
        <Route path='/projects/mr-vivek' element = {<Home11 />}/>
        <Route path='/projects/thara-residence' element = {<Home12 />}/>
        <Route path='/our-story' element = {<AboutHome />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;