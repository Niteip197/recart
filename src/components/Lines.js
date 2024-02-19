import React, { useState, useEffect } from 'react';
import logo from '../images/svg/logo.svg'

import '../css/lines.css';
import '../css/gradients.css';

const Lines = ({ aboutAnim }) => {
  // Define initial point coordinates and animation duration
  const initialPoints = '1276,0 1291,98 776,427 411,767 285,893 285,933 82,1023 17,1080';
  const finalPoints = '285,0 285,98 285,427 285,767 285,893 285,933 82,1023 17,1080';
  const animationDuration = 1500; // in milliseconds

  // State to hold the current points of the polyline
  const [points, setPoints] = useState(initialPoints);

  // Helper function to interpolate points based on progress
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

  // Cubic Bezier interpolation function with easing
  const bezierEaseInOut = (x) => {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
  };

  useEffect(() => {
    if (aboutAnim) {
      
        const startTime = Date.now();
      
        // Define an animation function that will be called by requestAnimationFrame
        const animate = () => {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(1, elapsedTime / animationDuration);
          const easedProgress = bezierEaseInOut(progress); // Apply easing function
          const updatedPoints = interpolatePoints(initialPoints, finalPoints, easedProgress);
          setPoints(updatedPoints);
      
          // Continue animation until progress reaches 1
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
      
        // Start the animation loop
        animate();
      
    }
  }, [aboutAnim]);

  ////////
  // let points = '1276,0 1291,98 776,427 411,767 285,893 285,933 82,1023 17,1080';
  let line2Path = '1433,0 1420,166 815,462 471,767 345,893 345,933 214,1080';
  let line3Path = '1575,0 1540,235 896,497 531,767 405,893 405,933 350,1080';
  let line4Path = '1740,0 1685,314 978,535 591,767 465,893 465,933 487,1080';
  let line5Path = '1898,0 1827,391 1059,583 651,767 525,893 525,933 624,1080';
  let line6Path = '160,847 160,908 270,908 270,923 0,993';
  let line7Path = '230,769 160,769 160,792';

  return(
    <div id='linesHolder'>
      
      <div id='gradients'>
        <div className='gradientMask'></div>
        <div className='gradientMaskOff' height='100vh'></div>
        <div className='leftGradientMask'></div>
      </div>

      <svg id='maskLines' className='maskline' width='1920' height='1080' viewBox='0 0 1920 1080' x='0' y='0'>
        
        {/* Big Lines */}
        <polyline
          className='bigLine' id='big1' pathLength='100'
          points={points}
        />
        <polyline
          className='bigLine' id='big2' pathLength='100'
          points={line2Path}
        />
        <polyline
          className='bigLine' id='big3' pathLength='100'
          points={line3Path}
        />
        <polyline
          className='bigLine' id='big4' pathLength='100'
          points={line4Path}
        />
        <polyline
          className='bigLine' id='big5' pathLength='100'
          points={line5Path}
        />
        
        {/* Medium Lines */}
        <polyline
          className='mediumLine' id='medium1' pathLength='100'
          points={points}
        />
        <polyline
          className='mediumLine' id='medium2' pathLength='100'
          points={line2Path}
        />
        <polyline
          className='mediumLine' id='medium3' pathLength='100'
          points={line3Path}
        />
        <polyline
          className='mediumLine' id='medium4' pathLength='100'
          points={line4Path}
        />
        <polyline
          className='mediumLine' id='medium5' pathLength='100'
          points={line5Path}
        />

        {/* Small Lines */}
        <polyline
          className='smallLine' id='small1' pathLength='100'
          points={points}
        />
        <polyline
          className='smallLine' id='small2' pathLength='100'
          points={line2Path}
        />
        <polyline
          className='smallLine' id='small3' pathLength='100'
          points={line3Path}
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
          points={line4Path}
        />
        <polyline
          className='smallLine' id='small5' pathLength='100'
          points={line5Path}
        />

        {/* Small Lines 2 */}
        <polyline
          className='smallLine2' id='small21' pathLength='100'
          points={points}
        />
        <polyline
          className='smallLine2' id='small22' pathLength='100'
          points={line2Path}
        />
        <polyline
          className='smallLine2' id='small23' pathLength='100'
          points={line3Path}
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
          points={line4Path}
        />
        <polyline className='smallLine2' id='small25' pathLength='100'
          points={line5Path}
        />
      </svg>

      {/* MAIN LINES */}
      <svg id='mainLines' className='line' width='1920' height='1080' viewBox='0 0 1920 1080' x='0' y='0'>
        <polyline pathLength='100' points={points}/>
        <polyline pathLength='100' points={line2Path}/>
        <polyline pathLength='100' points={line3Path}/>
        <polyline pathLength='100' points={line4Path}/>
        <polyline pathLength='100' points={line5Path}/>
        <polyline pathLength='100' points={line6Path}/>
        <polyline pathLength='100' points={line7Path}/>
      </svg>
      <img id='logo' src={logo} alt='logo' />
    </div>
  )
}

export default Lines;