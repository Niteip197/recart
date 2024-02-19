import React, { useState, useEffect } from 'react';

import '../css/contacts.css';

const Contacts = ({ animate }) => {
  const initialPoints = '1920,367.7 1920,367.7 1059,583 651,767 525,893 525,933 624,1080 525,933 525,893 651,767 1059,583';
  const basePoints = '1920,1080 1920,367.7 1059,583 651,767 525,893 525,933 624,1080 775.2,1080 832.1,1080 1030.3,1080 1719.2,1080';
  const aboutportservPoints = '1828.9,1560.4 1828.9,1560.4 1150.1,1153.1 722.8,1015.1 565.5,1003.5 595.1,1037.1 624,1080 595.1,1037.1 565.5,1003.5 722.8,1015.1 1150.1,1153.1';

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

    if(which === 'contacts'){
      finalPoints = basePoints;
    }else{
      if(which === 'about' || which === 'portfolio' || which === 'services' ){
        finalPoints = aboutportservPoints;
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
    <div id='contactsInfo'>

      <div id='contactsInfoHolder'>
        <div id='contactsTextHolder' className='infoText'>
            
            <div className='contactItem'>
              <p id='customTitle'>Let's discuss your next great project!</p>
            </div>

            <div className='contactItem'>
              <p style={{color: '#00000000'}}>_______________________________________</p>
            </div>

            <div className='contactItem'>
              <svg className='socialIcons' width='128' height='128' viewBox='0 0 128 128' x='0' y='0'>
                <path d="M64,0C28.7,0,0,28.7,0,64c0,35.3,28.7,64,64,64s64-28.7,64-64C128,28.7,99.3,0,64,0z M97.5,49.9 c-2,13.6-4.3,27.3-6.5,40.9c-0.9,6.5-4.3,9.9-11.4,6L57.4,81.2c-3.1-2.6-2.3-4.5,0.3-7.1l20.4-19.3c5.4-5.4,2.8-7.4-3.4-3.1 l-28.1,19c-4,2.8-8.2,2.8-12.8,1.4l-9.7-3.4c-6.2-2.3-1.4-4.8,1.7-6.2c17.6-7.4,38.9-17.9,57.4-25C100.3,31.2,100,32.9,97.5,49.9z"/>
              </svg>
              <p>+374 99 317 993</p>
            </div>
            
            <div className='contactItem'>
              <svg className='socialIcons' width='128' height='128' viewBox='0 0 128 128' x='0' y='0'>
                <path d="M9.5,16.1L54,66.6c2.5,2.9,6.2,4.5,10,4.5c3.8,0,7.5-1.6,10-4.5L117.7,17c0.4-0.4,0.8-0.7,1.2-1c-1.9-0.8-3.9-1.3-6-1.3 H15.1c-2.1,0-4,0.4-5.8,1.2C9.4,16,9.5,16,9.5,16.1z"/>
                <path d="M125.7,21.8c-0.2,0.5-0.5,1-0.9,1.4L81.1,72.9c-4.3,4.9-10.6,7.7-17.1,7.7c-6.5,0-12.8-2.8-17.1-7.7L2.4,22.4 c-0.1-0.1-0.2-0.2-0.2-0.3C0.8,24.3,0,27,0,29.8v68.3c0,8.3,6.8,15.1,15.1,15.1h97.8c8.3,0,15.1-6.8,15.1-15.1V29.8 C128,26.9,127.1,24.1,125.7,21.8z"/>
              </svg>
              <p>yerevanrecart@gmail.com</p>
            </div>

            <div className='contactItem cButton'>
              <svg className='socialIcons' width='128' height='128' viewBox='0 0 128 128' x='0' y='0'>
                <path d="M64.2,29.2h-0.3c-18.9,0-34.5,15.9-34.5,34.8c0,19.2,15.6,34.8,34.5,34.8h0.3C83.1,98.8,99,83.2,99,64
                  C99,45.1,83.1,29.2,64.2,29.2z M64.2,87.2h-0.3c-12.5,0-22.9-10.4-22.9-23.2c0-12.5,10.4-22.9,22.9-22.9h0.3
                  c12.5,0,22.9,10.4,22.9,22.9C87.1,76.8,76.7,87.2,64.2,87.2z"/>
                <path d="M98.4,22.5c-4.3,0-7.3,3.4-7.3,7.3c0,4,3.1,7.3,7.3,7.3c4,0,7.3-3.4,7.3-7.3C105.7,25.8,102.3,22.5,98.4,22.5z"/>
                <path d="M93.5,0.2h-59C15.6,0.2,0,15.7,0,34.7v58.7c0,18.9,15.6,34.5,34.5,34.5h59c18.9,0,34.5-15.6,34.5-34.5V34.7
                  C128,15.7,112.4,0.2,93.5,0.2z M117,93c0,13.1-10.7,23.8-23.8,23.8H34.8C21.7,116.8,11,106.2,11,93V35c0-13.1,10.7-23.8,23.8-23.8
                  h58.3c13.1,0,23.8,10.7,23.8,23.8V93z"/>
              </svg>
              <a hrefLang='eng' href='https://www.instagram.com/recart.yerevan' target='blank'><p>recart.yerevan</p></a>
            </div>
        </div>

        <div id='contactsTextHolder2' className='infoText'>
            
            <div>
              <a className='contactItem2 cButton2' href='https://www.youtube.com/@yerevanrecart3614' target='blank'>
                <svg className='socialIcons' width='128' height='128' viewBox='0 0 128 128' x='0' y='0'>
                  <path d="M99.9,19.2H28.1C12.6,19.2,0,31.8,0,47.3v33.4c0,15.5,12.6,28.1,28.1,28.1h71.8c15.5,0,28.1-12.6,28.1-28.1V47.3
                    C128,31.8,115.4,19.2,99.9,19.2z M85.8,66.5L53.6,82.4c-1.3,0.7-5.6-0.2-5.6-1.7V48.1c0-1.5,4.3-2.4,5.6-1.6l30.8,16.8
                    C85.7,63.9,87.1,65.8,85.8,66.5z"/>
                </svg>
                <p>@yerevanrecart3614</p>
              </a>
            </div>

            <div>
              <a className='contactItem2 cButton2' href='https://www.facebook.com/recartyerevan' target='blank'>
                <svg className='socialIcons' width='128' height='128' viewBox='0 0 128 128' x='0' y='0'>
                  <path d="M64,0C28.7,0,0,28.7,0,64c0,31.9,23.4,58.4,54,63.2V82.5H37.7V64H54V49.9c0-16,9.6-24.9,24.2-24.9c7,0,14.3,1.2,14.3,1.2
                    V42h-8.1c-8,0-10.4,4.9-10.4,10v12h17.7l-2.8,18.5H74v44.7c30.6-4.8,54-31.3,54-63.2C128,28.7,99.3,0,64,0z"/>
                </svg>
                <p>recartyerevan</p>
              </a>
            </div>
        </div>

        <div id='contactsBackground'></div>
        <svg className='decorationLines' width='1920' height='1080' viewBox='0 0 1920 1080' x='0' y='0'>
          <defs>
            <clipPath id='contactsBackgroundMask'>
              <rect x="1631" y="846.7" transform="matrix(0.213 -0.9771 0.9771 0.213 643.364 2493.1152)" width="476.5" height="1"/>
              <rect x="1353" y="741.9" transform="matrix(0.213 -0.9771 0.9771 0.213 611.4049 2243.7773)" width="691.1" height="1"/>
              <rect x="1273.1" y="753.7" transform="matrix(0.213 -0.9771 0.9771 0.213 527.4503 2163.1929)" width="666.9" height="1"/>
              <rect x="1210.1" y="763" transform="matrix(0.213 -0.9771 0.9771 0.213 461.2794 2099.6782)" width="647.8" height="1"/>
              <rect x="1156.5" y="770.9" transform="matrix(0.213 -0.9771 0.9771 0.213 404.9449 2045.6056)" width="631.6" height="1"/>
              <rect x="1109.2" y="777.9" transform="matrix(0.213 -0.9771 0.9771 0.213 355.3023 1997.9554)" width="617.3" height="1"/>
              <rect x="1066.8" y="784.2" transform="matrix(0.213 -0.9771 0.9771 0.213 310.7068 1955.1504)" width="604.4" height="1"/>
              <rect x="1028.2" y="789.9" transform="matrix(0.213 -0.9771 0.9771 0.213 270.1645 1916.2356)" width="592.8" height="1"/>
              <rect x="992.8" y="795.1" transform="matrix(0.213 -0.9771 0.9771 0.213 233.0127 1880.5751)" width="582.1" height="1"/>
              <rect x="960.3" y="800" transform="matrix(0.213 -0.9771 0.9771 0.213 198.7812 1847.7178)" width="572.2" height="1"/>
              <rect x="930.1" y="804.4" transform="matrix(0.213 -0.9771 0.9771 0.213 167.1261 1817.3334)" width="563.1" height="1"/>
              <rect x="902.2" y="808.6" transform="matrix(0.213 -0.9771 0.9771 0.213 137.7782 1789.1635)" width="554.6" height="1"/>
              <rect x="876.3" y="812.4" transform="matrix(0.213 -0.9771 0.9771 0.213 110.527 1763.0059)" width="546.7" height="1"/>
              <rect x="852.2" y="816" transform="matrix(0.213 -0.9771 0.9771 0.213 85.1976 1738.6936)" width="539.4" height="1"/>
              <rect x="829.8" y="819.3" transform="matrix(0.213 -0.9771 0.9771 0.213 61.6558 1716.0966)" width="532.7" height="1"/>
              <rect x="808.9" y="822.4" transform="matrix(0.213 -0.9771 0.9771 0.213 39.7801 1695.0994)" width="526.4" height="1"/>
              <rect x="789.6" y="825.2" transform="matrix(0.213 -0.9771 0.9771 0.213 19.4705 1675.605)" width="520.5" height="1"/>
              <rect x="771.7" y="827.9" transform="matrix(0.213 -0.9771 0.9771 0.213 0.6427 1657.5332)" width="515.1" height="1"/>
              <rect x="755.1" y="830.3" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -16.6945 1640.9177)" width="510.1" height="1"/>
              <rect x="740.9" y="834" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -34.3976 1626.2955)" width="502.5" height="1"/>
              <rect x="728.4" y="837.9" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -51.3244 1613.1632)" width="494.5" height="1"/>
              <rect x="716.8" y="841.5" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -66.8347 1601.1301)" width="487.1" height="1"/>
              <rect x="706.3" y="844.8" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -80.9779 1590.1575)" width="480.3" height="1"/>
              <rect x="696.8" y="847.8" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -93.7196 1580.3197)" width="474.2" height="1"/>
              <rect x="688.2" y="850.5" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -105.3388 1571.3069)" width="468.7" height="1"/>
              <rect x="679.9" y="853.1" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -116.5077 1562.5924)" width="463.4" height="1"/>
              <rect x="671.9" y="855.6" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -127.1639 1554.3762)" width="458.3" height="1"/>
              <rect x="664.2" y="858" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -137.6342 1546.2019)" width="453.3" height="1"/>
              <rect x="656.7" y="860.4" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -147.738 1538.3636)" width="448.5" height="1"/>
              <rect x="649.4" y="862.7" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -157.5679 1530.7374)" width="443.8" height="1"/>
              <rect x="642.3" y="864.9" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -167.1493 1523.3035)" width="439.3" height="1"/>
              <rect x="635.3" y="867.1" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -176.502 1516.0479)" width="434.8" height="1"/>
              <rect x="628.5" y="869.2" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -185.6409 1508.9573)" width="430.5" height="1"/>
              <rect x="621.9" y="871.3" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -194.5205 1502.1243)" width="426.2" height="1"/>
              <rect x="615.4" y="873.3" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -203.2838 1495.3262)" width="422" height="1"/>
              <rect x="609" y="875.3" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -211.9419 1488.5526)" width="417.9" height="1"/>
              <rect x="602.7" y="877.3" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -220.3153 1482.114)" width="413.9" height="1"/>
              <rect x="596.5" y="879.2" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -228.6055 1475.6833)" width="410" height="1"/>
              <rect x="590.5" y="881.1" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -236.8197 1469.2515)" width="406.1" height="1"/>
              <rect x="584.5" y="883" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -244.8428 1463.0272)" width="402.3" height="1"/>
              <rect x="578.6" y="884.8" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -252.687 1457.002)" width="398.5" height="1"/>
              <rect x="572.8" y="886.6" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -260.5379 1450.8507)" width="394.8" height="1"/>
              <rect x="567.1" y="888.4" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -268.1664 1444.9946)" width="391.1" height="1"/>
              <rect x="561.5" y="890.2" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -275.8084 1439.0031)" width="387.5" height="1"/>
              <rect x="555.9" y="891.9" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -283.2467 1433.2961)" width="383.9" height="1"/>
              <rect x="550.4" y="893.7" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -290.7094 1427.4431)" width="380.4" height="1"/>
              <rect x="545" y="895.4" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -298.0317 1421.7617)" width="376.9" height="1"/>
              <rect x="539.6" y="897" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -305.2794 1416.1389)" width="373.5" height="1"/>
              <rect x="534.3" y="898.7" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -312.4521 1410.5737)" width="370" height="1"/>
              <rect x="529" y="900.4" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -319.5068 1405.1672)" width="366.7" height="1"/>
              <rect x="523.7" y="902" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -326.6024 1399.5962)" width="363.3" height="1"/>
              <rect x="518.6" y="903.6" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -333.5351 1394.2853)" width="360" height="1"/>
              <rect x="513.4" y="905.3" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -340.4621 1388.912)" width="356.7" height="1"/>
              <rect x="508.3" y="906.9" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -347.3854 1383.4719)" width="353.4" height="1"/>
              <rect x="503.2" y="908.4" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -354.162 1378.2842)" width="350.2" height="1"/>
              <rect x="498.2" y="910" transform="matrix(0.213 -0.9771 0.9771 0.213 -361.0398 1372.8082)" width="346.9" height="1"/>
              <rect x="493.2" y="911.6" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -367.6799 1367.7975)" width="343.7" height="1"/>
              <rect x="489.4" y="912.1" transform="matrix(0.213 -0.9771 0.9771 0.213 -373.3141 1361.8091)" width="338.5" height="1"/>
              <rect x="488.8" y="910.2" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -375.8867 1354.86)" width="328.2" height="1"/>
              <rect x="488.2" y="908.3" transform="matrix(0.213 -0.9771 0.9771 0.213 -378.6314 1347.5203)" width="317.9" height="1"/>
              <rect x="487.6" y="906.4" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -381.1794 1340.6412)" width="307.7" height="1"/>
              <rect x="486.9" y="904.5" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -383.8077 1333.5802)" width="297.6" height="1"/>
              <rect x="486.3" y="902.6" transform="matrix(0.213 -0.9771 0.9771 0.213 -386.5129 1326.337)" width="287.5" height="1"/>
              <rect x="485.7" y="900.7" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -389.076 1319.4379)" width="277.4" height="1"/>
              <rect x="486.1" y="900.2" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -393.1459 1313.3195)" width="264.7" height="1"/>
              <rect x="487.4" y="900.6" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -398.4281 1307.7063)" width="249.9" height="1"/>
              <rect x="488.7" y="901.1" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -403.6956 1302.1097)" width="235.2" height="1"/>
              <rect x="489.9" y="901.6" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -408.991 1296.4224)" width="220.4" height="1"/>
              <rect x="491.2" y="902" transform="matrix(0.2129 -0.9771 0.9771 0.2129 -414.2323 1290.8527)" width="205.8" height="1"/>
              <rect x="492.5" y="902.5" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -419.4242 1285.3995)" width="191.1" height="1"/>
              <rect x="493.7" y="903" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -424.6461 1279.8506)" width="176.5" height="1"/>
              <rect x="495" y="903.4" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -429.8606 1274.3098)" width="161.9" height="1"/>
              <rect x="496.2" y="903.9" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -435.069 1268.7767)" width="147.3" height="1"/>
              <rect x="497.5" y="904.4" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -440.2714 1263.249)" width="132.7" height="1"/>
              <rect x="498.7" y="904.8" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -445.4702 1257.726)" width="118.2" height="1"/>
              <rect x="500" y="905.3" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -450.6647 1252.2061)" width="103.6" height="1"/>
              <rect x="501.2" y="905.8" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -455.8578 1246.689)" width="89.1" height="1"/>
              <rect x="502.5" y="906.2" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -461.0491 1241.1732)" width="74.5" height="1"/>
              <rect x="503.7" y="906.7" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -466.2403 1235.6586)" width="60" height="1"/>
              <rect x="511" y="902.3" transform="matrix(0.2128 -0.9771 0.9771 0.2128 -465.8556 1227.3557)" width="35.5" height="1"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <svg id='contactsMask'>
        <defs>
          <clipPath id='contactsInfoMask'>
            <polygon points={points}/>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Contacts;