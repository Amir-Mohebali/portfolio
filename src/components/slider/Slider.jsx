import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './slider.css'

import Project01 from '../../assets/project_azki.png'
import Project02 from '../../assets/project_behome.png'
import Project03 from '../../assets/project_shop.png'

import Project01_medium from '../../assets/project_azki_medium.png'
import Project02_medium from '../../assets/project_behome_medium.png'
import Project03_medium from '../../assets/project_shop_medium.png'

import Project01_Small from '../../assets/project_azki_small.png'
import Project02_Small from '../../assets/project_behome_small.png'
import Project03_Small from '../../assets/project_shop_small.png'


const Slider = () => {

  const slides = [
    {
        title: "Azki HomePage",
        image: [Project01, Project01_medium, Project01_Small],
        url: "https://azki.pages.dev/",
    },
    {
        title: "BeHome Design",
        image: [Project02, Project02_medium, Project02_Small],
        url: "https://behome.pages.dev/",
    },
    {
        title: "Online Shop",
        image: [Project03, Project03_medium, Project03_Small],
        url: "https://online-shop-dz8.pages.dev/",
    }
  ]

  const len = slides.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, len]);

  return (
    <div className="slider-container">
        {slides.map((slide, index) => (
            <div
                key={index} 
                className={index === activeIndex ? "slides active" : "inactive"}
            >
                <img className="slide-image large" src={slide.image[0]} alt={slide.title} />
                <img className="slide-image medium" src={slide.image[1]} alt={slide.title} />
                <img className="slide-image small" src={slide.image[2]} alt={slide.title} />
                <Link 
                    to={slide.url}
                    target='_blank' 
                    className="slide-title"
                >
                    {slide.title}
                </Link>
            </div>
        ))}
        <div className="arrows">
            <span className="prev" onClick={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}>
                &#10094;
            </span>
            <span className="next" onClick={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}>
                &#10095;
            </span>
        </div>
        <div className="all-dots">
            {slides.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={() => setActiveIndex(index)}
                >
                </span>
            ))}
        </div>
    </div>
  )
}

export default Slider