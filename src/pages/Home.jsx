import { useEffect, useRef } from 'react'
import { FaFacebookF, FaPlay } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TiSocialLinkedin, TiSocialInstagram } from 'react-icons/ti'
import HeroImg from '../assets/dev.png'
import htmlLogo from '../assets/html5-logo.png'
import cssLogo from '../assets/css3-logo.png'
import jsLogo from '../assets/javascript-logo.png'
import reactLogo from '../assets/react-logo.webp'
import gitLogo from '../assets/git-logo.png'

import './home.css'
import SkillView from '../components/skillView/SkillView'

const Home = () => {

  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                animateProgressbar();
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillRef.current);

    return () => {
        observer.disconnect();
    };
  }, []);

  const animateProgressbar = () => {
    const progressBars = document.querySelectorAll('.skill .progress-line');

    progressBars.forEach((progressBar) => {
        const percent = progressBar.getAttribute('data-width');
        progressBar.style.width = `${percent}%`;
    });
  };

  return (
    <div className='container home'>
        <section className="hero-section" id="home">
            <div className='left'>
                <div className="special-text">
                    Hello! I am <br /> Fallon
                </div>
                <div className="paragraph">
                    <h3>
                        Frontend Developer specialised in HTML, CSS, JavaScript and React
                    </h3>
                </div>
                <a href="/resume.pdf" download="resume.pdf" className="button">
                    <div className="hover"></div>
                    Get Resume
                </a>
            </div>
            <div className='right'>
                <div className="image">
                    <img src={HeroImg} alt="hero image" />
                    <div className="half-round-shape"></div>
                </div>
            </div>
        </section>

        <section className='skill' id='skills' ref={skillRef}>
			<h2 className='main-title'>My Special skills</h2>
            <div className="item-list">
                <div className="item desktop">
                    <h3>HTML</h3>
                    <SkillView fillColor={'#e45126'} percentage={100} />
                </div>
                <div className="item desktop">
                    <h3>CSS</h3>
                    <SkillView fillColor={'#0c73b8'} percentage={100}/>
                </div>
                <div className="item desktop">
                    <h3>JavaScript</h3>
                    <SkillView fillColor={'#e4a228'} percentage={100}/>
                </div>
                <div className="item desktop">
                    <h3>React</h3>
                    <SkillView fillColor={'#00d8ff'} percentage={100}/>
                </div>
                <div className="item desktop">
                    <h3>Git</h3>
                    <SkillView fillColor={'#f1502f'} percentage={100}/>
                </div>
                    
                <div className="item mobile">
                    <img src={htmlLogo} />
                    <h4 className="title">HTML</h4>
                    <span className="percent">100%</span>
                </div>
                <div className="item mobile">
                    <img src={cssLogo} />
                    <h4 className="title">CSS</h4>
                    <span className="percent">100%</span>
                </div>
                <div className="item mobile">
                    <img src={jsLogo} />
                    <h4 className="title">JS</h4>
                    <span className="percent">100%</span>
                </div>
                <div className="item mobile">
                    <img src={reactLogo} />
                    <h4 className="title">React</h4>
                    <span className="percent">100%</span>
                </div>
                <div className="item mobile">
                    <img src={gitLogo} />
                    <h4 className="title">Git</h4>
                    <span className="percent">100%</span>
                </div>
            </div>
		</section>
    </div>
  )
}

export default Home