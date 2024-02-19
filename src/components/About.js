import React, { useState, useEffect } from 'react';

import '../css/about.css';

const About = ({ animate }) => {
  const initialPoints = '345,933 345,893 481.9,755.9 815,462 1420,166 1420,166 1433,0 1420,166 815,462 481.9,755.9 345,893';
  const basePoints = '320,906.3 341.9,868.4 529,818.1 985.2,724.9 1642,770 1920,373.3 1920,0 468,0 395.9,227.8 335.3,719.2 320,894.5';
  const portservPoints = '319.3,902.4 322.3,868.6 334.8,724.8 402.3,270.1 522.1,0 522.1,0 522.1,0 522.1,0 402.3,270.1 334.8,724.8 322.3,868.6';

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

    if(which === 'about'){
      finalPoints = basePoints;
    }else{
      if(which === 'portfolio' || which === 'services'){
        console.log('portfolio or services');
        finalPoints = portservPoints;
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
    <div id='aboutInfo'>

      <div id='aboutInfoHolder'>
        
        <div id='aboutTextHolder' className='infoText'>
          <h1>Welcome to Recart Studio, where creativity meets precision.</h1>
          <br/>
          <p>Since 2017 our focus has been, on reshaping the art of storytelling. As a video production company</p>
          <p>we specialize in crafting commercials, impactful short films, immersive feature films, compelling TV</p>
          <p>shows and captivating music videos.</p>
          <br/>
          <p>We strongly believe in the ability of communication to inspire engage and establish connections with</p>
          <p>your audience. Whether you're a brand looking to enhance your marketing approach or an artist</p>
          <p>wanting to share your narrative we are dedicated to transforming your concepts into experiences.</p>
          <br/>
          <p>Understanding the importance of maintaining a identity we also excel in commercial photography.</p>
          <p>From product introductions to lifestyle campaigns we have the skills needed to showcase your</p>
          <p>brand in its light.</p>
          <br/>
          <p>Moreover we offer logistical support for video production. From planning to flawless execution we</p>
          <p>oversee every aspect of the production process to ensure a journey from start, to finish. Whether its</p>
          <p>arrangements or staffing needs consider it taken care of.</p>
          <br/>
          <p>Join us on this voyage through innovation and creativity. Lets collaborate and bring something into</p>
          <p>existence together.</p>
        </div>

        <div id='aboutBackground'></div>
        <svg className='decorationLines' width='1920' height='1080' viewBox='0 0 1920 1080' x='0' y='0'>
          <defs>
            <clipPath id='aboutBackgroundMask'>
            <rect x="1592.9" y="-101.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 293.4838 1198.4072)" class="st0" width="1" height="692.7"/>
            <rect x="1394.7" y="-135.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 177.0841 1082.4332)" class="st0" width="1" height="926.1"/>
            <polygon points="1304.1,882.5 1303.6,883.8 1303.1,882.5 1304.1,882.5"/>
            <rect x="1219.1" y="-158.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 85.8876 974.7087)" class="st0" width="1" height="1085.2"/>
            <rect x="1128.9" y="-157.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 61.7365 909.9775)" class="st0" width="1" height="1076.1"/>
            <rect x="1049.4" y="-156.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 40.455 852.9359)" class="st0" width="1" height="1068.1"/>
            <rect x="977.9" y="-155.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 21.3362 801.6921)" class="st0" width="1" height="1060.9"/>
            <rect x="913" y="-154.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 3.9552 755.1067)" class="st0" width="1" height="1054.3"/>
            <rect x="853.5" y="-153.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -11.9721 712.4167)" class="st0" width="1" height="1048.4"/>
            <rect x="812.9" y="-118.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -32.542 687.3121)" class="st0" width="1" height="1002.6"/>
            <rect x="780.8" y="-72.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -53.8072 669.5116)" class="st0" width="1" height="944.9"/>
            <rect x="751" y="-30.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -73.5231 653.0084)" class="st0" width="1" height="891.5"/>
            <rect x="723.4" y="8.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -91.8297 637.6844)" class="st0" width="1" height="841.9"/>
            <rect x="698.3" y="45" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -109.1104 624.0821)" class="st0" width="1" height="797.6"/>
            <rect x="678.9" y="77" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -126.7599 615.2709)" class="st0" width="1" height="767.2"/>
            <rect x="660.8" y="106.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -143.1598 607.0859)" class="st0" width="1" height="739"/>
            <rect x="644.9" y="136.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -158.7787 600.4323)" class="st0" width="1" height="710.2"/>
            <rect x="631.3" y="167" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -173.6788 595.281)" class="st0" width="1" height="680.6"/>
            <rect x="618.6" y="195" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -187.4659 590.5156)" class="st0" width="1" height="653.1"/>
            <rect x="606.9" y="220.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -200.1907 586.1154)" class="st0" width="1" height="627.8"/>
            <rect x="596.2" y="244.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -211.8964 582.0688)" class="st0" width="1" height="604.6"/>
            <rect x="586.4" y="266.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -222.623 578.3604)" class="st0" width="1" height="583.2"/>
            <rect x="577.4" y="286.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -232.4044 574.9785)" class="st0" width="1" height="563.8"/>
            <rect x="569.3" y="304.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -241.2689 571.9144)" class="st0" width="1" height="546.2"/>
            <rect x="561.9" y="320.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -249.3038 569.1369)" class="st0" width="1" height="530.2"/>
            <rect x="554.8" y="336" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -256.9764 566.4836)" class="st0" width="1" height="514.9"/>
            <rect x="548" y="351" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -264.3961 563.9188)" class="st0" width="1" height="500.2"/>
            <rect x="541.4" y="365.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -271.5874 561.4324)" class="st0" width="1" height="485.9"/>
            <rect x="535" y="379.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -278.5744 559.0171)" class="st0" width="1" height="472"/>
            <rect x="528.8" y="393.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -285.3731 556.6668)" class="st0" width="1" height="458.5"/>
            <rect x="522.7" y="407" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -291.9994 554.3756)" class="st0" width="1" height="445.3"/>
            <rect x="516.8" y="420.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -298.4673 552.14)" class="st0" width="1" height="432.4"/>
            <rect x="511" y="433" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -304.7879 549.9543)" class="st0" width="1" height="419.9"/>
            <rect x="505.3" y="445.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -310.9743 547.8157)" class="st0" width="1" height="407.6"/>
            <rect x="499.8" y="457.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -317.0343 545.7206)" class="st0" width="1" height="395.5"/>
            <rect x="494.3" y="469.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -322.9769 543.666)" class="st0" width="1" height="383.7"/>
            <rect x="489" y="481.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -328.8115 541.6481)" class="st0" width="1" height="372.1"/>
            <rect x="483.7" y="493.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -334.5441 539.6674)" class="st0" width="1" height="360.7"/>
            <rect x="478.5" y="504.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -340.1829 537.72)" class="st0" width="1" height="349.5"/>
            <rect x="473.4" y="516" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -345.731 535.8003)" class="st0" width="1" height="338.5"/>
            <rect x="468.4" y="527.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -351.197 533.9104)" class="st0" width="1" height="327.6"/>
            <rect x="463.5" y="538" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -356.5854 532.0475)" class="st0" width="1" height="316.9"/>
            <rect x="458.6" y="548.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -361.9009 530.2091)" class="st0" width="1" height="306.3"/>
            <rect x="453.8" y="559.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -367.1466 528.3959)" class="st0" width="1" height="295.9"/>
            <rect x="449" y="570" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -372.3292 526.6042)" class="st0" width="1" height="285.6"/>
            <rect x="444.3" y="580.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -377.4514 524.8334)" class="st0" width="1" height="275.4"/>
            <rect x="439.7" y="590.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -382.5153 523.0816)" class="st0" width="1" height="265.3"/>
            <rect x="435.2" y="600.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -387.5612 521.4312)" class="st0" width="1" height="255.6"/>
            <rect x="430.8" y="610.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -392.6054 519.9156)" class="st0" width="1" height="246.3"/>
            <rect x="426.5" y="620.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -397.6043 518.421)" class="st0" width="1" height="237.1"/>
            <rect x="422.2" y="630.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -402.5573 516.934)" class="st0" width="1" height="228"/>
            <rect x="418" y="640.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -407.469 515.4628)" class="st0" width="1" height="218.9"/>
            <rect x="413.8" y="649.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -412.3397 514.0015)" class="st0" width="1" height="210"/>
            <rect x="409.6" y="659.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -417.1742 512.5539)" class="st0" width="1" height="201.1"/>
            <rect x="405.5" y="668.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -421.9742 511.1138)" class="st0" width="1" height="192.2"/>
            <rect x="401.4" y="678.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -426.7437 509.686)" class="st0" width="1" height="183.4"/>
            <rect x="397.3" y="687.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -431.481 508.2661)" class="st0" width="1" height="174.7"/>
            <rect x="393.3" y="697" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -436.2041 506.8862)" class="st0" width="1" height="165.9"/>
            <rect x="389.4" y="706.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -440.9431 505.6153)" class="st0" width="1" height="156.9"/>
            <rect x="385.5" y="716.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -445.6576 504.3509)" class="st0" width="1" height="148"/>
            <rect x="381.6" y="725.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -450.3486 503.0906)" class="st0" width="1" height="139.1"/>
            <rect x="377.8" y="735.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -455.0187 501.8356)" class="st0" width="1" height="130.2"/>
            <rect x="374" y="744.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -459.6721 500.5926)" class="st0" width="1" height="121.4"/>
            <rect x="370.1" y="753.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -464.3053 499.3474)" class="st0" width="1" height="112.6"/>
            <rect x="366.3" y="763.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -468.9234 498.1092)" class="st0" width="1" height="103.8"/>
            <rect x="362.5" y="772.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -473.5251 496.8688)" class="st0" width="1" height="95.1"/>
            <rect x="358.8" y="781.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -478.1175 495.6443)" class="st0" width="1" height="86.3"/>
            <rect x="343.7" y="818.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -496.3693 490.736)" class="st0" width="1" height="51.7"/>
            <rect x="330.5" y="854.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -515.2545 487.6526)" class="st0" width="1" height="22.2"/>
            <rect x="355" y="791.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -482.6964 494.4169)" class="st0" width="1" height="77.6"/>
            <rect x="351.2" y="800.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -487.2614 493.1843)" class="st0" width="1" height="69"/>
            <rect x="347.5" y="809.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -491.8203 491.9619)" class="st0" width="1" height="60.3"/>
            <rect x="340" y="827.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -500.9163 489.5237)" class="st0" width="1" height="43"/>
            <rect x="336.2" y="837.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -505.4585 488.3163)" class="st0" width="1" height="34.4"/>
            <rect x="332.5" y="846.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -509.9897 487.0945)" class="st0" width="1" height="25.8"/>
            <rect x="328.6" y="863.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -520.5234 488.2308)" class="st0" width="1" height="18.7"/>
            <rect x="326.7" y="871.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -525.8126 488.8582)" class="st0" width="1" height="15.2"/>
            <rect x="324.8" y="879.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -531.0628 489.4038)" class="st0" width="1" height="11.8"/>
            <rect x="322.9" y="888.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -536.3591 490.0501)" class="st0" width="1" height="8.3"/>
            <rect x="321.1" y="897" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -541.6844 490.7726)" class="st0" width="1" height="4.4"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <svg id='aboutMask'>
        <defs>
          <clipPath id='aboutInfoMask'>
            <polygon points={points}/>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default About;