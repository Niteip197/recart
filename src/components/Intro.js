import React from 'react';

import '../css/intro.css';

const Intro = () => {

  return(
    <div id='introHolder'>
      <div id='introRotationHolder'>
        <div id='textHolder'>
          <div id='introT1' className='introText'>
            <p>from crafting stories</p>
          </div>
          <div id='introT2' className='introText'>
            <p>through capturing moments</p>
          </div>
          <div id='introT3' className='introText'>
            <p>to stunning results</p>
          </div>
          <div id='introT4' className='introText'>
            <p>your content</p>
          </div>
          <div id='introT5' className='introText'>
            <p>deserves to be made by <span className='orange'>professionals</span>.</p>
          </div>
        </div>

        <svg id='textMaskHolder'>
          <defs>
            <clipPath id='textMask'>
              <polygon points="1752.1,453 1072.8,622.8 675.3,802.1 567,910.4 1752.1,910.4 "/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default Intro;