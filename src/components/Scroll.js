import React from 'react';
import './Scroll.css';

const Scroll = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById('about');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
      
          // Fallback for Safari
          if (!('scrollBehavior' in document.documentElement.style)) {
            window.scroll({
              top: nextSection.offsetTop,
              left: 0,
              behavior: 'smooth'
            });
          }
        }
      };
    return (
        <div class="scrolldown-wrapper" onClick={handleScroll}>
	        <div class="scrolldown">
		        <svg height="30" width="10">
			      <circle class="scrolldown-p1" cx="5" cy="15" r="2" />
			      <circle class="scrolldown-p2" cx="5" cy="15" r="2" />
		        </svg>
	        </div>
        </div>
    )
}

export default Scroll;