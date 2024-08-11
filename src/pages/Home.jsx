import { useEffect, useRef } from 'react'
import { FaFacebookF, FaPlay } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TiSocialLinkedin, TiSocialInstagram } from 'react-icons/ti'

import SkillView from '../components/skillView/SkillView'
import './home.css'

import HeroImg from '../assets/dev.png'
import htmlLogo from '../assets/html5-logo.png'
import cssLogo from '../assets/css3-logo.png'
import jsLogo from '../assets/javascript-logo.png'
import reactLogo from '../assets/react-logo.webp'
import gitLogo from '../assets/git-logo.png'

import Project01 from '../assets/project-01.png';
import Project02 from '../assets/project-02.png';
import Project03 from '../assets/project-03.png';
import Project04 from '../assets/project-04.png';
import Project05 from '../assets/project-05.png';
import Project06 from '../assets/project-06.png';
import Contact from '../components/contact/Contact'


const Home = () => {

    const skillRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
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

    const showSideImage = (imageId) => {
        const images = document.querySelectorAll('.card-images img')
        images.forEach(image => {
            image.classList.remove('active')
            // image.style.left = '100%';
            // image.style.opacity = '0';
        })

        const current = document.getElementById(imageId);
        current.classList.add('active')
        // current.style.left = '0%';
        // current.style.opacity = '1';
    }

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
                        <SkillView fillColor={'#0c73b8'} percentage={100} />
                    </div>
                    <div className="item desktop">
                        <h3>JavaScript</h3>
                        <SkillView fillColor={'#e4a228'} percentage={100} />
                    </div>
                    <div className="item desktop">
                        <h3>React</h3>
                        <SkillView fillColor={'#00d8ff'} percentage={100} />
                    </div>
                    <div className="item desktop">
                        <h3>Git</h3>
                        <SkillView fillColor={'#f1502f'} percentage={100} />
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

            <section className='courses' id='courses'>
                <h2 className='main-title'>My Courses</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias fuga iusto error ullam, dignissimos ex!
                    Eum nihil doloremque impedit atque? Doloribus eius porro vitae est officia excepturi!
                </p>
                <div className="card">    
                    <div className="card-list">
                        <a href='https://github.com/Amir-Mohebali/simple-table'  className='card-title' onMouseOver={()=>showSideImage('card-image-1')}>Table</a>
                        <a href='https://github.com/Amir-Mohebali/github-design' className='card-title' onMouseOver={()=>showSideImage('card-image-2')}>Github</a>
                        <a href='https://github.com/Amir-Mohebali/rose'          className='card-title' onMouseOver={()=>showSideImage('card-image-3')}>Rose</a>
                        <a href='https://github.com/Amir-Mohebali/card-item'     className='card-title' onMouseOver={()=>showSideImage('card-image-4')}>Card Design</a>
                        <a href='https://github.com/Amir-Mohebali/to-do-app-and-form-validation' className='card-title' onMouseOver={()=>showSideImage('card-image-5')}>Login Form</a>
                        <a href='https://github.com/Amir-Mohebali/to-do-app-and-form-validation' className='card-title' onMouseOver={()=>showSideImage('card-image-6')}>to-do app</a>
                    </div>
                    <div className="card-images">
                        <img src={Project01} alt="" id="card-image-1" className='active' />
                        <img src={Project02} alt="" id="card-image-2" />
                        <img src={Project03} alt="" id="card-image-3" />
                        <img src={Project04} alt="" id="card-image-4" />
                        <img src={Project05} alt="" id="card-image-5" />
                        <img src={Project06} alt="" id="card-image-6" />
                    </div>
                </div>
                {/* <div className='portfolio__grid'>
                    <div className='portfolio__card'>
                        <img src={Portfolio1} alt='portfolio 1' />
                        <a href='' className='portfolio__card-title'>Portfolio 1</a>
                    </div>
                    <div className='portfolio__card'>
                        <img src={Portfolio2} alt='portfolio 2' />
                        <a href='' className='portfolio__card-title'>Portfolio 2</a>
                    </div>
                    <div className='portfolio__card'>
                        <img src={Portfolio3} alt='portfolio 3' />
                        <a href='' className='portfolio__card-title'>Portfolio 3</a>
                    </div>
                    <div className='portfolio__card'>
                        <img src={Portfolio4} alt='portfolio 4' />
                        <a href='' className='portfolio__card-title'>Portfolio 4</a>
                    </div>
                    <div className='portfolio__card'>
                        <img src={Portfolio3} alt='portfolio 5' />
                        <a href='' className='portfolio__card-title'>Portfolio 5</a>
                    </div>
                    <div className='portfolio__card'>
                        <img src={Portfolio1} alt='portfolio 6' />
                        <a href='' className='portfolio__card-title'>Portfolio 6</a>
                    </div>
                </div> */}
            </section>

            <section className='contact' id='contact'>
                <h2 className='main-title'>Contact Me</h2>
                <Contact />
            </section>
        </div>
    )
}

export default Home