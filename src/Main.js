import React, { useState } from 'react';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contacts from './components/Contacts';
import './css/main.css';

const Main = () => {
  const [change, setChange] = useState(false);

  const changeHappened = () => {
    setChange(!change);
  };
  
  return (
    <div id='mainHolder'>
      <Loader />
      <Navigation clicked={changeHappened} />
      <Intro />
      <About animate={change} />
      <Portfolio animate={change} />
      <Services animate={change} />
      <Contacts animate={change} />
    </div>
  );
}

export default Main;
