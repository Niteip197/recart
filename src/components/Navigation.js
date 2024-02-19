import React, { useState } from 'react';
import logo from '../images/svg/logo.svg'

import '../css/lines.css';
import '../css/navigation.css';
import '../css/gradients.css';

const Navigation = ({ clicked }) => {
  //ABOUT POINTS
  const aboutInitialPoints = '1276,0 1291,98 776,427 411,767 285,893 285,933 82,1023 17,1080';
  const aboutFinalPoints = '470.1,-428.1 544.6,-362.6 361.6,220.4 300.5,715.5 285,893 285,933 82,1023 17,1080';
  const aboutFinalPointsB = '354.3,-439.2 434.2,-380.5 302.7,216.3 285,714.8 285,893 285,933 82,1023 17,1080';
  const aboutFinalPointsC = '354.3,-439.2 434.2,-380.5 302.7,216.3 285,714.8 285,893 285,933 82,1023 17,1080';
  const aboutFinalPointsD = '1276,0 1291,98 776,427 411,767 285,893 285,933 82,1023 17,1080';

  //PORTFOLIO POINTS
  const portfolioInitialPoints = '1433,0 1420,166 815,462 471,767 345,893 345,933 214,1080';
  const portfolioFinalPoints = '1920,426.9 1659.5,806.3 987.5,760.1 537.1,852.2 365,898.4 345,933 210.8,1080';
  const portfolioFinalPointsB = '578.7,-481.1 675.5,-345.6 402.3,270.1 334.8,724.8 319.3,902.4 345,933 214,1080';
  const portfolioFinalPointsC = '578.7,-481.1 675.5,-345.6 402.3,270.1 334.8,724.8 319.3,902.4 345,933 214,1080';
  const portfolioFinalPointsD = '1433,0 1420,166 815,462 471,767 345,893 345,933 214,1080';

  //SERVICES POINTS
  const servicesInitialPoints = '1575,0 1540,235 896,497 531,767 405,893 405,933 350,1080';
  const servicesFinalPoints = '1945.8,820 1735.1,1042.2 1057.3,887.5 603.4,899.3 427.9,930.2 405,963 350,1080';
  const servicesFinalPointsB = '2091.1,666.7 1735.1,1042.2 1057.3,887.5 603.4,899.3 427.9,930.2 405,963 350,1080';
  const servicesFinalPointsC = '803.3,-502.4 909.4,-289.8 532.1,294.2 388,724.8 357.1,900.2 405,933 350,1080';
  const servicesFinalPointsD = '1575,0 1540,235 896,497 531,767 405,893 405,933 350,1080';
  
  //CONTACTS POINTS
  const contactsInitialPoints = '1740,0 1685,314 978,535 591,767 465,893 465,933 487,1080';
  const contactsFinalPoints = '2041.4,1097.8 1797.5,1303 1113.8,1017.9 668.2,946.8 490.7,962.4 465,993 487,1080';
  const contactsFinalPointsB = '2041.4,1097.8 1797.5,1303 1113.8,1017.9 668.2,946.8 490.7,962.4 465,993 487,1080';
  const contactsFinalPointsC = '2041.4,1097.8 1797.5,1303 1113.8,1017.9 668.2,946.8 490.7,962.4 465,993 487,1080';
  const contactsFinalPointsD = '1740,0 1685,314 978,535 591,767 465,893 465,933 487,1080';

  //LAST POINTS
  const lastInitialPoints = '1898,0 1827,391 1059,583 651,767 525,893 525,933 624,1080';
  const lastFinalPoints = '2155.6,1334.1 1828.9,1560.4 1150.1,1153.1 722.8,1015.1 565.5,1003.5 595.1,1037.1 624,1080';
  const lastFinalPointsB = '2155.6,1334.1 1828.9,1560.4 1150.1,1153.1 722.8,1015.1 565.5,1003.5 595.1,1037.1 624,1080';
  const lastFinalPointsC = '2155.6,1334.1 1828.9,1560.4 1150.1,1153.1 722.8,1015.1 565.5,1003.5 595.1,1037.1 624,1080';
  const lastFinalPointsD = '1898,0 1827,391 1059,583 651,767 525,893 525,933 624,1080';
  
  const animationDuration = 1500;

  const [aboutPoints, setAboutPoints] = useState(aboutInitialPoints);
  const [aboutStart, setAboutStart] = useState(aboutInitialPoints);
  const [portfolioPoints, setPortfolioPoints] = useState(portfolioInitialPoints);
  const [portfolioStart, setPortfolioStart] = useState(portfolioInitialPoints);
  const [servicesPoints, setServicesPoints] = useState(servicesInitialPoints);
  const [servicesStart, setServicesStart] = useState(servicesInitialPoints);
  const [contactsPoints, setContactsPoints] = useState(contactsInitialPoints);
  const [contactsStart, setContactsStart] = useState(contactsInitialPoints);
  const [lastPoints, setLastPoints] = useState(lastInitialPoints);
  const [lastStart, setLastStart] = useState(lastInitialPoints);
 
  ////////
  let line6Path = '160,847 160,908 270,908 270,923 0,993';
  let line7Path = '230,769 160,769 160,792';

  const bezierEaseInOut = (x) => {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
  };

  const animateLines = (id) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(1, elapsedTime / animationDuration);
      const easedProgress = bezierEaseInOut(progress); // Apply easing function
      
      if(id === 'about'){
        const aboutUpdatedPoints = interpolatePoints(aboutStart, aboutFinalPoints, easedProgress);
        setAboutPoints(aboutUpdatedPoints);
        
        const portfolioUpdatedPoints = interpolatePoints(portfolioStart, portfolioFinalPoints, easedProgress);
        setPortfolioPoints(portfolioUpdatedPoints);

        const servicesUpdatedPoints = interpolatePoints(servicesStart, servicesFinalPoints, easedProgress);
        setServicesPoints(servicesUpdatedPoints);

        const contactsUpdatedPoints = interpolatePoints(contactsStart, contactsFinalPoints, easedProgress);
        setContactsPoints(contactsUpdatedPoints);

        const lastUpdatedPoints = interpolatePoints(lastStart, lastFinalPoints, easedProgress);
        setLastPoints(lastUpdatedPoints);

        if(progress => 1){
          setAboutStart(aboutUpdatedPoints);
          setPortfolioStart(portfolioUpdatedPoints);
          setServicesStart(servicesUpdatedPoints);
          setContactsStart(contactsUpdatedPoints);
          setLastStart(lastUpdatedPoints);
        }
      }

      if(id === 'portfolio'){
        const aboutUpdatedPoints = interpolatePoints(aboutStart, aboutFinalPointsB, easedProgress);
        setAboutPoints(aboutUpdatedPoints);

        const portfolioUpdatedPoints = interpolatePoints(portfolioStart, portfolioFinalPointsB, easedProgress);
        setPortfolioPoints(portfolioUpdatedPoints);

        const servicesUpdatedPoints = interpolatePoints(servicesStart, servicesFinalPointsB, easedProgress);
        setServicesPoints(servicesUpdatedPoints);

        const contactsUpdatedPoints = interpolatePoints(contactsStart, contactsFinalPointsB, easedProgress);
        setContactsPoints(contactsUpdatedPoints);

        const lastUpdatedPoints = interpolatePoints(lastStart, lastFinalPointsB, easedProgress);
        setLastPoints(lastUpdatedPoints);

        if(progress => 1){
          setAboutStart(aboutUpdatedPoints);
          setPortfolioStart(portfolioUpdatedPoints);
          setServicesStart(servicesUpdatedPoints);
          setContactsStart(contactsUpdatedPoints);
          setLastStart(lastUpdatedPoints);
        }
      }

      if(id === 'services'){
        const aboutUpdatedPoints = interpolatePoints(aboutStart, aboutFinalPointsC, easedProgress);
        setAboutPoints(aboutUpdatedPoints);

        const portfolioUpdatedPoints = interpolatePoints(portfolioStart, portfolioFinalPointsC, easedProgress);
        setPortfolioPoints(portfolioUpdatedPoints);

        const servicesUpdatedPoints = interpolatePoints(servicesStart, servicesFinalPointsC, easedProgress);
        setServicesPoints(servicesUpdatedPoints);

        const contactsUpdatedPoints = interpolatePoints(contactsStart, contactsFinalPointsC, easedProgress);
        setContactsPoints(contactsUpdatedPoints);

        const lastUpdatedPoints = interpolatePoints(lastStart, lastFinalPointsC, easedProgress);
        setLastPoints(lastUpdatedPoints);

        if(progress => 1){
          setAboutStart(aboutUpdatedPoints);
          setPortfolioStart(portfolioUpdatedPoints);
          setServicesStart(servicesUpdatedPoints);
          setContactsStart(contactsUpdatedPoints);
          setLastStart(lastUpdatedPoints);
        }
      }

      if(id === 'contacts'){
        const aboutUpdatedPoints = interpolatePoints(aboutStart, aboutFinalPointsD, easedProgress);
        setAboutPoints(aboutUpdatedPoints);

        const portfolioUpdatedPoints = interpolatePoints(portfolioStart, portfolioFinalPointsD, easedProgress);
        setPortfolioPoints(portfolioUpdatedPoints);

        const servicesUpdatedPoints = interpolatePoints(servicesStart, servicesFinalPointsD, easedProgress);
        setServicesPoints(servicesUpdatedPoints);

        const contactsUpdatedPoints = interpolatePoints(contactsStart, contactsFinalPointsD, easedProgress);
        setContactsPoints(contactsUpdatedPoints);

        const lastUpdatedPoints = interpolatePoints(lastStart, lastFinalPointsD, easedProgress);
        setLastPoints(lastUpdatedPoints);

        if(progress => 1){
          setAboutStart(aboutUpdatedPoints);
          setPortfolioStart(portfolioUpdatedPoints);
          setServicesStart(servicesUpdatedPoints);
          setContactsStart(contactsUpdatedPoints);
          setLastStart(lastUpdatedPoints);
        }
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  const interpolatePoints = (startPoints, endPoints, progress) => {
    const startCoords = startPoints.split(' ');
    const endCoords = endPoints.split(' ');
    const interpolatedCoords = startCoords.map((startCoord, index) => {
      const [startX, startY] = startCoord.split(',');
      const [endX, endY] = endCoords[index].split(',');
      const newX = parseFloat(startX) + (parseFloat(endX) - parseFloat(startX)) * progress;
      const newY = parseFloat(startY) + (parseFloat(endY) - parseFloat(startY)) * progress;
      return `${newX},${newY}`;
    });
    return interpolatedCoords.join(' ');
  };

  //MOUSE HANDLERS

  const mouseOver = (id) => {
    let theButton = document.getElementById(`${id}Button`);

    if(theButton.getAttribute('clicked') === 'false'){
      theButton.style.filter = 'blur(0px)';
      theButton.style.transform = 'rotate(-45deg) scale(101%) translateX(3px)';
    }
  }

  const mouseOut = (id) => {
    let theButton = document.getElementById(`${id}Button`);

    if(theButton.getAttribute('clicked') === 'false'){
      theButton.style.filter = 'blur(3px)';
      theButton.style.transform = 'rotate(-45deg) scale(100%)';
    }
  }

  const click = (id) => {
    let tool = document.getElementById('tool');
    let theButton = document.getElementById(`${id}Button`);
    const buttons = ['about', 'portfolio', 'services', 'contacts'];

    const aboutHolder = document.getElementById('aboutHolder');
    const portfolioHolder = document.getElementById('portfolioHolder');
    const servicesHolder = document.getElementById('servicesHolder');
    const servicesHolder2 = document.getElementById('servicesHolder2');
    const contactsHolder = document.getElementById('contactsHolder');
    const contactsHolder2 = document.getElementById('contactsHolder2');
    const introHolder = document.getElementById('introRotationHolder');
    
    if(theButton.getAttribute('clicked') === 'false'){
      clicked();
      animateLines(id);
    }

    theButton.style.transition = 'all 1.5s cubic-bezier(0.87, 0, 0.13, 1)';
    theButton.style.cursor = 'auto';
    theButton.style.filter = 'blur(0px)';

    buttons.forEach(buttonID => {
      let otherButton = document.getElementById(`${buttonID}Button`);
      if (buttonID !== id && theButton.getAttribute('clicked') === 'false'){
        otherButton.setAttribute('clicked', 'true');
        otherButton.style.cursor = 'auto';
        otherButton.style.filter = 'blur(3px)';
        otherButton.style.transform = 'rotate(-45deg) scale(100%)';
        setTimeout(() => {
          otherButton.setAttribute('clicked', 'false');
          otherButton.style.cursor = 'pointer';
          otherButton.style.transition = 'all .25s ease-in-out';
        }, 1500);
      }
    });

    if(id === 'about' && theButton.getAttribute('clicked') === 'false'){
      
      aboutHolder.style.transform = 'rotate(-40deg)';
      portfolioHolder.style.transform = 'rotate(30deg)';
      servicesHolder.style.transform = 'rotate(35deg)';
      servicesHolder2.style.transform = 'translateY(30px)';
      contactsHolder.style.transform = 'rotate(40deg)';
      contactsHolder2.style.transform = 'translateY(60px)';
      introHolder.style.transform = 'translateX(1000px) rotate(40deg)';
      introHolder.style.opacity ='0';
      tool.setAttribute('whichsection', 'about')
    }

    if(id === 'portfolio' && theButton.getAttribute('clicked') === 'false'){
      
      aboutHolder.style.transform = 'rotate(-45deg)';
      portfolioHolder.style.transform = 'rotate(-40deg)';
      servicesHolder.style.transform = 'rotate(35deg)';
      servicesHolder2.style.transform = 'translateY(30px) translateX(0px)';
      contactsHolder.style.transform = 'rotate(40deg)';
      contactsHolder2.style.transform = 'translateY(60px)';
      introHolder.style.transform = 'translateX(1000px) rotate(40deg)';
      introHolder.style.opacity ='0';
      tool.setAttribute('whichsection', 'portfolio')
    }

    if(id === 'services' && theButton.getAttribute('clicked') === 'false'){
      
      aboutHolder.style.transform = 'rotate(-45deg)';
      portfolioHolder.style.transform = 'rotate(-40deg)';
      servicesHolder.style.transform = 'rotate(-35deg)';
      servicesHolder2.style.transform = 'translateY(0px) translateX(-25px)';
      contactsHolder.style.transform = 'rotate(40deg)';
      contactsHolder2.style.transform = 'translateY(60px)';
      introHolder.style.transform = 'translateX(1000px) rotate(40deg)';
      introHolder.style.opacity ='0';
      tool.setAttribute('whichsection', 'services')
    }

    if(id === 'contacts' && theButton.getAttribute('clicked') === 'false'){
      aboutHolder.style.transform = 'rotate(0deg)';
      portfolioHolder.style.transform = 'rotate(0deg)';
      servicesHolder.style.transform = 'rotate(0deg)';
      servicesHolder2.style.transform = 'translateY(0px)';
      contactsHolder.style.transform = 'rotate(0deg)';
      contactsHolder2.style.transform = 'translateY(0px) translateX(0px)';
      introHolder.style.transform = 'translateX(1000px) rotate(0deg)';
      introHolder.style.opacity ='0';
      tool.setAttribute('whichsection', 'contacts')
    }

    theButton.setAttribute('clicked', 'true');
  }

  return(
    <div id='tool' whichsection = 'base'>
      <div id='navigationHolder'>
        <div id='aboutHolder' className='lineHolder'>
          <div id='aboutButton' className='button' clicked='false' onMouseOver={() => {mouseOver('about')}} onMouseOut={() => {mouseOut('about')}} onClick={() => {click('about')}}>
            <p>ABOUT</p>
          </div>
        </div>

        <div id='portfolioHolder' className='lineHolder'>
          <div id='portfolioButton' className='button' clicked='false' onMouseOver={() => {mouseOver('portfolio')}} onMouseOut={() => {mouseOut('portfolio')}} onClick={() => {click('portfolio')}}>
            <p>PORTFOLIO</p>
          </div>
        </div>
        
        <div id='servicesHolder2' className='lineHolder'>
          <div id='servicesHolder' className='lineHolder'>
            <div id='servicesButton' className='button' clicked='false' onMouseOver={() => {mouseOver('services')}} onMouseOut={() => {mouseOut('services')}} onClick={() => {click('services')}}>
              <p>SERVICES</p>
            </div>
          </div>
        </div>

        <div id='contactsHolder2' className='lineHolder'>
          <div id='contactsHolder' className='lineHolder'>
            <div id='contactsButton' className='button' clicked='false' onMouseOver={() => {mouseOver('contacts')}} onMouseOut={() => {mouseOut('contacts')}} onClick={() => {click('contacts')}}>
              <p>CONTACTS</p>
            </div>
          </div>
        </div>
      </div>

      <div id='gradients'>
        <div className='gradientMask'></div>
        <div className='gradientMaskOff' height='100vh'></div>
        <div className='leftGradientMask'></div>
      </div>

      <div id='linesHolder'>
        <svg id='maskLines' className='maskline' width='1920' height='1080' viewBox='0 0 1920 1080' x='0' y='0'>
          
          {/* Big Lines */}
          <polyline
            className='bigLine' id='big1' pathLength='100'
            points={aboutPoints}
          />
          <polyline
            className='bigLine' id='big2' pathLength='100'
            points={portfolioPoints}
          />
          <polyline
            className='bigLine' id='big3' pathLength='100'
            points={servicesPoints}
          />
          <polyline
            className='bigLine' id='big4' pathLength='100'
            points={contactsPoints}
          />
          <polyline
            className='bigLine' id='big5' pathLength='100'
            points={lastPoints}
          />
          
          {/* Medium Lines */}
          <polyline
            className='mediumLine' id='medium1' pathLength='100'
            points={aboutPoints}
          />
          <polyline
            className='mediumLine' id='medium2' pathLength='100'
            points={portfolioPoints}
          />
          <polyline
            className='mediumLine' id='medium3' pathLength='100'
            points={servicesPoints}
          />
          <polyline
            className='mediumLine' id='medium4' pathLength='100'
            points={contactsPoints}
          />
          <polyline
            className='mediumLine' id='medium5' pathLength='100'
            points={lastPoints}
          />

          {/* Small Lines */}
          <polyline
            className='smallLine' id='small1' pathLength='100'
            points={aboutPoints}
          />
          <polyline
            className='smallLine' id='small2' pathLength='100'
            points={portfolioPoints}
          />
          <polyline
            className='smallLine' id='small3' pathLength='100'
            points={servicesPoints}
          />
          <polyline
            className='smallLine' id='small7' pathLength='100'
            points={line6Path}
          />
          <polyline
            className='smallLine' id='small6' pathLength='100'
            points={line7Path}
          />
          <polyline
            className='smallLine' id='small4' pathLength='100'
            points={contactsPoints}
          />
          <polyline
            className='smallLine' id='small5' pathLength='100'
            points={lastPoints}
          />

          {/* Small Lines 2 */}
          <polyline
            className='smallLine2' id='small21' pathLength='100'
            points={aboutPoints}
          />
          <polyline
            className='smallLine2' id='small22' pathLength='100'
            points={portfolioPoints}
          />
          <polyline
            className='smallLine2' id='small23' pathLength='100'
            points={servicesPoints}
          />
          <polyline
            className='smallLine2' id='small27' pathLength='100'
            points={line6Path}
          />
          <polyline
            className='smallLine2' id='small26' pathLength='100'
            points={line7Path}
          />
          <polyline className='smallLine2' id='small24' pathLength='100'
            points={contactsPoints}
          />
          <polyline className='smallLine2' id='small25' pathLength='100'
            points={lastPoints}
          />
        </svg>

        {/* MAIN LINES */}
        <svg id='mainLines' className='line' width='1920' height='1080' viewBox='0 0 1920 1080' x='0' y='0'>
          <polyline pathLength='100' points={aboutPoints}/>
          <polyline pathLength='100' points={portfolioPoints}/>
          <polyline pathLength='100' points={servicesPoints}/>
          <polyline pathLength='100' points={contactsPoints}/>
          <polyline pathLength='100' points={lastPoints}/>
          <polyline pathLength='100' points={line6Path}/>
          <polyline pathLength='100' points={line7Path}/>
        </svg>
        <img id='logo' src={logo} alt='logo' />
      </div>
    </div>
  )
}

export default Navigation;