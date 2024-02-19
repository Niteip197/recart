import React, {useEffect, useState} from 'react';

import '../css/portfolio.css';

const Portfolio = ({ animate }) => {
  const initialPoints = '531,767 896,497 1540,235 1575,0 1575,0 1540,235 896,497 531,767 405,893 405,933 405,893';
  const basePoints = '599.9,864.4 1060.8,852.4 1723.4,1003.6 1920,796.3 1920,0 560.4,0 436.2,279.9 369.6,728.9 355.4,891 386.6,928.2 407.5,898.2';
  const aboutPoints = '603.4,899.3 1057.3,887.5 1735.1,1042.2 1945.8,820 1945.8,820 1735.1,1042.2 1057.3,887.5 603.4,899.3 427.9,930.2 405,963 427.9,930.2';
  const servicesPoints = '387.3,728.8 532.1,294.2 722.2,0 722.2,0 722.2,0 722.2,0 532.1,294.2 387.3,728.8 357.1,900.2 405,933 357.1,900.2';

  const animationDuration = 1500;

  const [points, setPoints] = useState(initialPoints);
  const [pointsStart, setPointsStart] = useState(initialPoints);

  const bezierEaseInOut = (x) => {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
  };

  const animateLines = () => {
    let finalPoints = initialPoints;
    let which = document.getElementById('tool').getAttribute('whichsection');

    if(which === 'portfolio'){
      finalPoints = basePoints;
    }else{
      if(which === 'about'){
        finalPoints = aboutPoints;
      }else if(which === 'services'){
        finalPoints = servicesPoints;
      }else if(which === 'contacts'){
        finalPoints = initialPoints;
      }
    }
    
    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(1, elapsedTime / animationDuration);
      const easedProgress = bezierEaseInOut(progress);
      const updatedPoints = interpolatePoints(pointsStart, finalPoints, easedProgress);
      setPoints(updatedPoints);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }else{
        setPointsStart(updatedPoints);
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

  useEffect(() => {
    if (animate || !animate) {
      animateLines();
    }
  }, [animate]);

  return(
    <div id='portfolioInfo'>

      <div id='portfolioInfoHolder'>
        <div id='portfolioTextHolder' className='infoText'>
          <div>
            <p>Portfolio content</p>
          </div>
        </div>

        <div id='portfolioBackground'></div>

        <svg className='decorationLines' width='1920' height='1080' viewBox='0 0 1920 1080' x='0' y='0'>
          <defs>
            <clipPath id='portfolioBackgroundMask'>
              <rect x="555.3" y="5.2" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 0.1048 19.737)" width="444.5" height="1"/>
              <rect x="486" y="148.2" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -3.3872 30.5859)" width="1434.2" height="1"/>
              <rect x="454.1" y="219.8" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -5.2081 30.2038)" width="1466.2" height="1"/>
              <rect x="433.6" y="276.1" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -6.6409 29.9626)" width="1486.6" height="1"/>
              <rect x="426.5" y="323.9" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -7.9993 30.4642)" width="1493.7" height="1"/>
              <rect x="420.2" y="366" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -9.0904 30.3972)" width="1500" height="1"/>
              <rect x="414.6" y="403.9" transform="matrix(0.9997 -2.539484e-02 2.539484e-02 0.9997 -9.8925 29.7772)" width="1505.6" height="1"/>
              <rect x="409.5" y="438.3" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -10.9616 30.2824)" width="1510.8" height="1"/>
              <rect x="404.8" y="469.8" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -11.5633 29.6593)" width="1515.4" height="1"/>
              <rect x="400.5" y="498.9" transform="matrix(0.9997 -2.637089e-02 2.637089e-02 0.9997 -12.7654 30.7736)" width="1519.8" height="1"/>
              <rect x="396.5" y="525.7" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -13.2263 30.1434)" width="1523.8" height="1"/>
              <rect x="392.8" y="550.7" transform="matrix(0.9997 -2.635803e-02 2.635803e-02 0.9997 -14.1255 30.675)" width="1527.5" height="1"/>
              <rect x="389.3" y="573.8" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -14.2046 29.4966)" width="1530.9" height="1"/>
              <rect x="386.1" y="595.3" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -15.027 30.0329)" width="1534.1" height="1"/>
              <rect x="383.2" y="615.3" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -15.2585 29.4316)" width="1537.1" height="1"/>
              <rect x="380.4" y="633.8" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -16.0253 29.9716)" width="1539.9" height="1"/>
              <rect x="377.8" y="651.1" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -16.4716 29.9443)" width="1542.4" height="1"/>
              <rect x="375.5" y="667" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -16.8855 29.9188)" width="1544.8" height="1"/>
              <rect x="373.3" y="681.8" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -17.2684 29.8953)" width="1547" height="1"/>
              <rect x="371.2" y="695.5" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -17.2966 29.3061)" width="1549" height="1"/>
              <rect x="369.4" y="708" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -17.6156 29.2864)" width="1550.9" height="1"/>
              <rect x="368.3" y="719.5" transform="matrix(0.9997 -2.635803e-02 2.635803e-02 0.9997 -18.5811 30.4116)" width="1551.9" height="1"/>
              <rect x="367.4" y="730" transform="matrix(0.9997 -2.635803e-02 2.635803e-02 0.9997 -18.8575 30.4032)" width="1552.8" height="1"/>
              <rect x="366.6" y="739.5" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -18.7617 29.8284)" width="1553.7" height="1"/>
              <rect x="365.8" y="748.1" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -18.9846 29.8216)" width="1554.4" height="1"/>
              <rect x="365.1" y="756.3" transform="matrix(0.9997 -2.635803e-02 2.635803e-02 0.9997 -19.552 30.382)" width="1555.1" height="1"/>
              <rect x="364.4" y="764.3" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -19.0444 29.2419)" width="1555.8" height="1"/>
              <rect x="363.8" y="772" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -19.6027 29.8026)" width="1556.5" height="1"/>
              <rect x="363.1" y="779.5" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -19.7965 29.7966)" width="1557.2" height="1"/>
              <rect x="362.5" y="786.8" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -19.9851 29.7908)" width="1557.8" height="1"/>
              <rect x="361.8" y="793.9" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -20.1689 29.7852)" width="1558.4" height="1"/>
              <rect x="361.2" y="800.8" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -20.3483 29.7797)" width="1559" height="1"/>
              <rect x="360.6" y="807.6" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -20.1437 29.2078)" width="1559.6" height="1"/>
              <rect x="360.1" y="814.2" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -20.3121 29.2026)" width="1560.2" height="1"/>
              <rect x="359.5" y="820.8" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -20.8657 29.7041)" width="1556.1" height="1"/>
              <rect x="358.9" y="827.2" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -21.0336 29.6191)" width="1550.5" height="1"/>
              <rect x="358.4" y="833.5" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -21.1985 29.5356)" width="1545" height="1"/>
              <rect x="357.9" y="839.8" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -20.9648 28.893)" width="1539.6" height="1"/>
              <rect x="357.3" y="845.9" transform="matrix(0.9997 -2.587024e-02 2.587024e-02 0.9997 -21.5199 29.373)" width="1534.2" height="1"/>
              <rect x="357" y="868.6" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -21.9085 12.2983)" width="232.9" height="1"/>
              <rect x="356.5" y="875" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.0763 11.7996)" width="194.5" height="1"/>
              <rect x="356" y="881.3" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.2417 11.308)" width="156.6" height="1"/>
              <rect x="355.5" y="887.5" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.4049 10.823)" width="119.2" height="1"/>
              <rect x="358.8" y="893.5" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.5641 10.392)" width="78.5" height="1"/>
              <rect x="363.4" y="899.4" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.7176 10.0639)" width="43.4" height="1"/>
              <rect x="367.9" y="904.9" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.8565 10.0734)" width="35" height="1"/>
              <rect x="372.3" y="910.3" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.9938 10.0828)" width="26.7" height="1"/>
              <rect x="376.7" y="915.6" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -23.1297 10.0921)" width="18.4" height="1"/>
              <rect x="381.1" y="921" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -23.2642 10.1013)" width="10.3" height="1"/>
              <rect x="385.4" y="926.2" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -23.3975 10.1104)" width="2.2" height="1"/>
              <rect x="1066.8" y="842.7" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -20.9278 37.7427)" width="818.8" height="1"/>
              <rect x="1089.9" y="848.4" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -21.0678 37.9646)" width="790.1" height="1"/>
              <rect x="1112.6" y="853.9" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -21.2059 38.1834)" width="761.8" height="1"/>
              <rect x="1135" y="859.4" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -21.342 38.3992)" width="733.8" height="1"/>
              <rect x="1157.1" y="864.8" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -21.4764 38.6121)" width="706.3" height="1"/>
              <rect x="1178.9" y="870.1" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -21.6092 38.8225)" width="679" height="1"/>
              <rect x="1200.5" y="875.4" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -21.7404 39.0305)" width="652.1" height="1"/>
              <rect x="1221.9" y="880.6" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -21.8702 39.2361)" width="625.5" height="1"/>
              <rect x="1243" y="885.8" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -21.9986 39.4396)" width="599.2" height="1"/>
              <rect x="1263.9" y="890.9" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.1257 39.641)" width="573.1" height="1"/>
              <rect x="1284.6" y="895.9" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.2516 39.8405)" width="547.3" height="1"/>
              <rect x="1305.1" y="900.9" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.3764 40.0382)" width="521.7" height="1"/>
              <rect x="1325.5" y="905.9" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.5001 40.2343)" width="496.3" height="1"/>
              <rect x="1345.7" y="910.8" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.6228 40.4288)" width="471.1" height="1"/>
              <rect x="1365.7" y="915.7" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.7446 40.6218)" width="446.1" height="1"/>
              <rect x="1385.6" y="920.6" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.8655 40.8134)" width="421.3" height="1"/>
              <rect x="1405.3" y="925.4" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -22.9857 41.0038)" width="396.7" height="1"/>
              <rect x="1425" y="930.2" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -23.105 41.1929)" width="372.2" height="1"/>
              <rect x="1444.5" y="935" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -23.2237 41.3809)" width="347.9" height="1"/>
              <rect x="1463.9" y="939.7" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -23.3417 41.5679)" width="323.7" height="1"/>
              <rect x="1483.2" y="944.5" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -23.4591 41.7539)" width="299.6" height="1"/>
              <rect x="1502.4" y="949.1" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -23.5759 41.9391)" width="275.6" height="1"/>
              <rect x="1521.6" y="953.8" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -23.6922 42.1234)" width="251.8" height="1"/>
              <rect x="1540.6" y="958.5" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -23.808 42.3069)" width="228" height="1"/>
              <rect x="1559.6" y="963.1" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -23.9234 42.4898)" width="204.3" height="1"/>
              <rect x="1578.5" y="967.7" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -24.0384 42.672)" width="180.7" height="1"/>
              <rect x="1597.4" y="972.3" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -24.153 42.8536)" width="157.2" height="1"/>
              <rect x="1616.2" y="976.9" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -24.2673 43.0347)" width="133.8" height="1"/>
              <rect x="1634.9" y="981.5" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -24.3813 43.2154)" width="110.4" height="1"/>
              <rect x="1653.6" y="986.1" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -24.4951 43.3957)" width="87.1" height="1"/>
              <rect x="1672.3" y="990.6" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -24.6086 43.5755)" width="63.8" height="1"/>
              <rect x="1690.9" y="995.2" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -24.7219 43.7551)" width="40.5" height="1"/>
              <rect x="1709.5" y="999.7" transform="matrix(0.9997 -2.538244e-02 2.538244e-02 0.9997 -24.835 43.9344)" width="17.3" height="1"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <svg id='portfolioMask'>
        <defs>
          <clipPath id='portfolioInfoMask'>
            <polygon points={points}/>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Portfolio;