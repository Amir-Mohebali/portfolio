import { useEffect, useRef } from 'react';
import './skillview.css'

const SkillView = ({ fillColor, percentage }) => {

    const skillRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateProgressbar();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );
  
      observer.observe(skillRef.current);
  
      return () => {
        observer.disconnect();
      };
    }, []);

    const animateProgressbar = () => {
      const fills = document.querySelectorAll('.water-fill');
        
      fills.forEach((fill) => {
        const percent = fill.getAttribute('data-width');
        fill.style.transform = `translate(0, ${100 - percent}%)`;
      });
    };

  return (
    <div className="circle" ref={skillRef}>
        <div className="show-percent">
          <div className="percentNum" id="count">{percentage}</div>
          <div>%</div>
        </div>
        
        <div id="fill" className="water-fill" data-width={percentage} style={{ backgroundColor: fillColor }} >
          <svg viewBox="0 0 560 20" className="water-wave front" style={{ fill: fillColor }} >
            <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
            <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
            <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
            <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
          </svg>
        </div>
    </div>
  )
}

export default SkillView