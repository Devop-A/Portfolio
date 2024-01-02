import React, { useEffect, useState } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  const [containerHeight, setContainerHeight] = useState('auto');

  useEffect(() => {
    const handleResize = () => {
      const screenHeight = window.innerHeight;
      const isFullScreen = screenHeight >= 530;
      const availableHeight = isFullScreen ? screenHeight - 530 : screenHeight;
      setContainerHeight(`${availableHeight}px`);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden' style={{ minHeight: '100vh' }}>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {<div style={{ height: containerHeight }}></div>}
    </div>
  );
};

export default App;
