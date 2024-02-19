import React, {useEffect, useState} from 'react';

import '../css/services.css';

const Services = ({ animate }) => {
  const initialPoints = '1685,314 1740,0 1740,0 1685,314 978,535 591,767 465,893 465,933 465,893 465,893 591,767 978,535';
  const basePoints = '763.8,0 1920,0 1920,1080 1353.7,1080 1123.4,984 669.4,911.6 473.2,928.8 424.6,980.6 447.4,919.6 395.5,884.1 422,733.4 563.9,309.5';
  const aboutportPoints = '1797.5,1303 2041.4,1097.8 2041.4,1097.8 1797.5,1303 1113.8,1017.9 668.2,946.8 490.7,962.4 465,993 490.7,962.4 490.7,962.4 668.2,946.8 1113.8,1017.9';

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

    if(which === 'services'){
      finalPoints = basePoints;
    }else{
      if(which === 'about' || which === 'portfolio'){
        finalPoints = aboutportPoints;
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
    <div id='servicesInfo'>

      <div id='servicesInfoHolder'>
        <div id='servicesTextHolder' className='infoText'>
          <div>
            <p>Services content</p>
          </div>
        </div>

        <div id='servicesBackground'></div>

        <svg className='decorationLines' width='1920' height='1080' viewBox='0 0 1920 1080' x='0' y='0'>
          <defs>
            <clipPath id='servicesBackgroundMask'>
              <rect x="1295.1" y="555.2" transform="matrix(0.1739 -0.9848 0.9848 0.1739 962.5228 2258.761)" width="1064.8" height="1"/>
              <rect x="1082.6" y="539.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 815.5438 2052.1763)" width="1096.7" height="1"/>
              <rect x="990.5" y="539.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 739.4632 1961.4839)" width="1096.7" height="1"/>
              <rect x="917.9" y="539.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 679.4977 1890.0015)" width="1096.7" height="1"/>
              <rect x="866.4" y="530.9" transform="matrix(0.1739 -0.9848 0.9848 0.1739 638.2006 1823.516)" width="1079.1" height="1"/>
              <rect x="824.5" y="520.3" transform="matrix(0.1739 -0.9848 0.9848 0.1739 605.1702 1762.9885)" width="1057.7" height="1"/>
              <rect x="787" y="510.8" transform="matrix(0.1739 -0.9848 0.9848 0.1739 575.4971 1708.6145)" width="1038.4" height="1"/>
              <rect x="752.8" y="502.2" transform="matrix(0.1739 -0.9848 0.9848 0.1739 548.5215 1659.1826)" width="1020.8" height="1"/>
              <rect x="721.4" y="494.2" transform="matrix(0.1739 -0.9848 0.9848 0.1739 523.801 1613.8843)" width="1004.7" height="1"/>
              <rect x="689.3" y="489.7" transform="matrix(0.1739 -0.9848 0.9848 0.1739 497.9366 1573.9292)" width="995.5" height="1"/>
              <rect x="657.8" y="487" transform="matrix(0.1739 -0.9848 0.9848 0.1739 472.2963 1537.9749)" width="990" height="1"/>
              <rect x="628.6" y="484.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 448.5247 1504.6416)" width="984.9" height="1"/>
              <rect x="601.5" y="482.2" transform="matrix(0.1739 -0.9848 0.9848 0.1739 426.4512 1473.6891)" width="980.2" height="1"/>
              <rect x="576.3" y="480" transform="matrix(0.1739 -0.9848 0.9848 0.1739 405.9355 1444.9205)" width="975.8" height="1"/>
              <rect x="552.8" y="478" transform="matrix(0.1738 -0.9848 0.9848 0.1738 386.9465 1418.2369)" width="971.8" height="1"/>
              <rect x="531" y="476.1" transform="matrix(0.1739 -0.9848 0.9848 0.1739 369.1472 1393.3354)" width="968" height="1"/>
              <rect x="510.8" y="474.4" transform="matrix(0.1739 -0.9848 0.9848 0.1739 352.6968 1370.2675)" width="964.5" height="1"/>
              <rect x="492.1" y="472.8" transform="matrix(0.1739 -0.9848 0.9848 0.1739 337.4463 1348.8829)" width="961.2" height="1"/>
              <rect x="474.7" y="471.3" transform="matrix(0.1739 -0.9848 0.9848 0.1739 323.3349 1329.0955)" width="958.2" height="1"/>
              <rect x="458.7" y="470" transform="matrix(0.1738 -0.9848 0.9848 0.1738 310.3827 1310.8865)" width="955.4" height="1"/>
              <rect x="444" y="468.7" transform="matrix(0.1738 -0.9848 0.9848 0.1738 298.4008 1294.0859)" width="952.9" height="1"/>
              <rect x="430.5" y="467.5" transform="matrix(0.1738 -0.9848 0.9848 0.1738 287.4203 1278.6902)" width="950.5" height="1"/>
              <rect x="418.2" y="466.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 277.3409 1264.6)" width="948.4" height="1"/>
              <rect x="407.1" y="465.5" transform="matrix(0.1738 -0.9848 0.9848 0.1738 268.3344 1251.9288)" width="946.5" height="1"/>
              <rect x="396.9" y="464.7" transform="matrix(0.1738 -0.9848 0.9848 0.1738 260.1095 1240.3976)" width="944.7" height="1"/>
              <rect x="387.3" y="463.9" transform="matrix(0.1739 -0.9848 0.9848 0.1739 252.1914 1229.3341)" width="943" height="1"/>
              <rect x="378" y="463.1" transform="matrix(0.1738 -0.9848 0.9848 0.1738 244.661 1218.7366)" width="941.4" height="1"/>
              <rect x="368.9" y="462.3" transform="matrix(0.1738 -0.9848 0.9848 0.1738 237.3 1208.4156)" width="939.8" height="1"/>
              <rect x="360.1" y="461.5" transform="matrix(0.1738 -0.9848 0.9848 0.1738 230.1473 1198.3871)" width="938.3" height="1"/>
              <rect x="351.6" y="460.8" transform="matrix(0.1738 -0.9848 0.9848 0.1738 223.1889 1188.6301)" width="936.8" height="1"/>
              <rect x="343.2" y="460.1" transform="matrix(0.1738 -0.9848 0.9848 0.1738 216.4062 1179.1195)" width="935.4" height="1"/>
              <rect x="335.1" y="459.4" transform="matrix(0.1738 -0.9848 0.9848 0.1738 209.7852 1169.8361)" width="934" height="1"/>
              <rect x="327.2" y="458.7" transform="matrix(0.1738 -0.9848 0.9848 0.1738 203.3156 1160.7651)" width="932.6" height="1"/>
              <rect x="319.4" y="458" transform="matrix(0.1739 -0.9848 0.9848 0.1739 196.9239 1151.8368)" width="931.2" height="1"/>
              <rect x="311.7" y="457.4" transform="matrix(0.1739 -0.9848 0.9848 0.1739 190.7216 1143.1385)" width="929.9" height="1"/>
              <rect x="304.3" y="456.8" transform="matrix(0.1739 -0.9848 0.9848 0.1739 184.6388 1134.6101)" width="928.6" height="1"/>
              <rect x="296.9" y="456.1" transform="matrix(0.1738 -0.9848 0.9848 0.1738 178.7241 1126.2853)" width="927.3" height="1"/>
              <rect x="289.7" y="455.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 172.8001 1118.0084)" width="926.1" height="1"/>
              <rect x="281.9" y="455.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 166.3632 1110.301)" width="926.1" height="1"/>
              <rect x="273.8" y="455.8" transform="matrix(0.1739 -0.9848 0.9848 0.1739 159.6223 1102.951)" width="926.8" height="1"/>
              <rect x="265.8" y="456.2" transform="matrix(0.1739 -0.9848 0.9848 0.1739 152.9804 1095.7103)" width="927.4" height="1"/>
              <rect x="258" y="456.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 146.4332 1088.5726)" width="928.1" height="1"/>
              <rect x="250.2" y="456.8" transform="matrix(0.1739 -0.9848 0.9848 0.1739 139.9745 1081.5317)" width="928.8" height="1"/>
              <rect x="242.6" y="457.2" transform="matrix(0.1739 -0.9848 0.9848 0.1739 133.6013 1074.5829)" width="929.4" height="1"/>
              <rect x="235" y="457.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 127.3037 1067.7174)" width="930.1" height="1"/>
              <rect x="227.5" y="457.8" transform="matrix(0.1739 -0.9848 0.9848 0.1739 121.0802 1060.9324)" width="930.7" height="1"/>
              <rect x="220.1" y="458.1" transform="matrix(0.1739 -0.9848 0.9848 0.1739 114.9267 1054.224)" width="931.4" height="1"/>
              <rect x="216.5" y="462.8" transform="matrix(0.1739 -0.9848 0.9848 0.1739 103.8911 1050.4391)" width="923.1" height="1"/>
              <rect x="215.4" y="470.4" transform="matrix(0.1739 -0.9848 0.9848 0.1739 89.5898 1048.6434)" width="908.9" height="1"/>
              <rect x="214.3" y="478" transform="matrix(0.1739 -0.9848 0.9848 0.1739 75.4202 1046.8638)" width="894.8" height="1"/>
              <rect x="213.2" y="485.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 61.3776 1045.1013)" width="880.8" height="1"/>
              <rect x="212.1" y="492.9" transform="matrix(0.1739 -0.9848 0.9848 0.1739 47.4541 1043.3533)" width="866.9" height="1"/>
              <rect x="211.1" y="500.3" transform="matrix(0.1739 -0.9848 0.9848 0.1739 33.6446 1041.6185)" width="853.2" height="1"/>
              <rect x="210" y="507.6" transform="matrix(0.1739 -0.9848 0.9848 0.1739 19.9402 1039.8983)" width="839.5" height="1"/>
              <rect x="209" y="514.8" transform="matrix(0.1738 -0.9848 0.9848 0.1738 6.3768 1038.2421)" width="826" height="1"/>
              <rect x="207.9" y="522" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -7.1874 1036.4917)" width="812.5" height="1"/>
              <rect x="206.9" y="529.2" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -20.6172 1034.8059)" width="799.1" height="1"/>
              <rect x="205.9" y="536.3" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -33.9687 1033.1293)" width="785.8" height="1"/>
              <rect x="204.8" y="543.4" transform="matrix(0.1738 -0.9848 0.9848 0.1738 -47.2057 1031.5166)" width="772.6" height="1"/>
              <rect x="203.8" y="550.4" transform="matrix(0.1738 -0.9848 0.9848 0.1738 -60.4164 1029.8584)" width="759.5" height="1"/>
              <rect x="202.8" y="557.4" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -73.6026 1028.153)" width="746.4" height="1"/>
              <rect x="201.8" y="564.4" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -86.6907 1026.5103)" width="733.3" height="1"/>
              <rect x="200.8" y="571.4" transform="matrix(0.1738 -0.9848 0.9848 0.1738 -99.686 1024.9296)" width="720.4" height="1"/>
              <rect x="199.8" y="578.3" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -112.7092 1023.2435)" width="707.4" height="1"/>
              <rect x="198.8" y="585.2" transform="matrix(0.1738 -0.9848 0.9848 0.1738 -125.6114 1021.6757)" width="694.5" height="1"/>
              <rect x="197.8" y="592.1" transform="matrix(0.1738 -0.9848 0.9848 0.1738 -138.5112 1020.0565)" width="681.7" height="1"/>
              <rect x="196.8" y="598.9" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -151.413 1018.3861)" width="668.9" height="1"/>
              <rect x="191.4" y="609.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -168.4972 1019.2317)" width="663.8" height="1"/>
              <rect x="185.9" y="620.1" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -185.5428 1020.0749)" width="658.7" height="1"/>
              <rect x="180.4" y="630.7" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -202.5536 1020.9171)" width="653.5" height="1"/>
              <rect x="185.7" y="654" transform="matrix(0.1738 -0.9848 0.9848 0.1738 -233.8909 1030.1229)" width="622.6" height="1"/>
              <rect x="221.7" y="651.6" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -236.2916 1022.4812)" width="539.2" height="1"/>
              <rect x="234" y="669" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -261.0585 1027.84)" width="496.2" height="1"/>
              <rect x="246.3" y="686.4" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -285.7997 1033.1936)" width="453.3" height="1"/>
              <rect x="258.6" y="703.9" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -310.5214 1038.5422)" width="410.3" height="1"/>
              <rect x="270.9" y="721.2" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -335.2267 1043.8879)" width="367.4" height="1"/>
              <rect x="283.1" y="738.6" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -359.9219 1049.2312)" width="324.6" height="1"/>
              <rect x="295.4" y="756" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -384.6093 1054.5728)" width="281.7" height="1"/>
              <rect x="421.6" y="952.1" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -575.9999 1218.5547)" width="33.4" height="1"/>
              <rect x="423.7" y="971.5" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -603.0468 1225.2292)" width="10.2" height="1"/>
              <rect x="307.7" y="773.4" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -409.2946 1059.9139)" width="238.8" height="1"/>
              <rect x="319.9" y="790.8" transform="matrix(0.1739 -0.9848 0.9848 0.1739 -433.9795 1065.2548)" width="196" height="1"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <svg id='servicesMask'>
        <defs>
          <clipPath id='servicesInfoMask'>
            <polygon points={points}/>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Services;