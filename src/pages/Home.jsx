import { useEffect, useRef } from 'react'

// import SkillView from '../components/skillView/SkillView'
import Slider from '../components/slider/Slider'
import Contact from '../components/contact/Contact'
import './home.css'

import me08_new from '../assets/myPhoto.png'
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

    const showSideImage = (event, imageId) => {
        const images = document.querySelectorAll('.card-images img')
        const cards = document.querySelectorAll('.card-title')
        images.forEach(image => {
            image.classList.remove('active')
        })
        cards.forEach(card => {
            card.classList.remove('active')
        })

        const current = document.getElementById(imageId);
        current.classList.add('active')
        event.target.classList.add('active')
    }

    return (
        <div className='container home'>
            <section className="hero-section" id="intro">
                <div className='left'>
                    <div className="special-text">
                        Hello! I am <br /> AmirHossein
                    </div>
                    <div className="paragraph">
                        <h3>
                            A computer engineering graduate and junior front-end
                            developer. I love programming and my main goal is to improve my 
                            skills as a developer and share my knowledge. Check out my portfolio 
                            to see my skills and works.
                        </h3>
                    </div>
                    {/* eslint-disable-next-line */}
                    <a href="https://uploadkon.ir/uploads/35b617_24resume.pdf" target="_blank" download="resume.pdf" className="button">
                        <div className="hover"></div>
                        Get Resume
                    </a>
                </div>
                <div className='right'>
                    <div className="image">
                        <img src={me08_new} alt="hero_image" />
                        <div className="graphic-shape"></div>
                        <div className="graphic-shape"></div>
                        <div className="graphic-shape"></div>
                        <div className="graphic-shape"></div>
                        <div className="graphic-shape"></div>
                    </div>
                </div>
            </section>

            <section className='skill' id='skills' ref={skillRef}>
                <h2 className='main-title'>My Special skills</h2>
                <div className="item-list">
                    {/* <div className="item desktop">
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
                    </div> */}

                    <div className="item mobile">
                        <img src={htmlLogo} alt="html_logo"/>
                        <h4 className="title">HTML</h4>
                    </div>
                    <div className="item mobile">
                        <img src={cssLogo} alt="css_logo"/>
                        <h4 className="title">CSS</h4>
                    </div>
                    <div className="item mobile">
                        <img src={jsLogo} alt="js_logo"/>
                        <h4 className="title">JS</h4>
                    </div>
                    <div className="item mobile">
                        <img src={reactLogo} alt="react_logo"/>
                        <h4 className="title">React</h4>
                    </div>
                    <div className="item mobile">
                        <img src={gitLogo} alt="git_logo"/>
                        <h4 className="title">Git</h4>
                    </div>
                </div>
            </section>

            <section className='courses' id='courses'>
                <h2 className='main-title'>My Courses</h2>
                <p>
                    On April 3, 2024, I participated in the course <b><i style={{color: "var(--special-text)"}}>"Front-End Programming with React" </i></b> 
                    of <b><i style={{color: "var(--special-text)"}}>Daneshkar Academy</i></b> and after 6 months, successfully completed the course. 
                    Some of my projects during this course are as follows:
                </p>
                <div className="card">    
                    <div className="card-list">
                        <a 
                            href='https://github.com/Amir-Mohebali/simple-table'
                            className='card-title active' 
                            onMouseOver={(e)=>showSideImage(e, 'card-image-1')} 
                            target='_blank'
                            rel="noreferrer"
                        >
                                Table
                        </a>
                        <a 
                            href='https://github.com/Amir-Mohebali/github-design'
                            className='card-title' 
                            onMouseOver={(e)=>showSideImage(e, 'card-image-2')} 
                            target='_blank'
                            rel="noreferrer"
                        >
                                Github Design
                        </a>
                        <a 
                            href='https://github.com/Amir-Mohebali/rose'
                            className='card-title' 
                            onMouseOver={(e)=>showSideImage(e, 'card-image-3')} 
                            target='_blank'
                            rel='noreferrer'
                        >
                                Rose
                        </a>
                        <a 
                            href='https://github.com/Amir-Mohebali/card-item'
                            className='card-title' 
                            onMouseOver={(e)=>showSideImage(e, 'card-image-4')} 
                            target='_blank'
                            rel='noreferrer'
                        >
                                Card Design
                        </a>
                        <a 
                            href='https://github.com/Amir-Mohebali/to-do-app-and-form-validation' 
                            className='card-title' 
                            onMouseOver={(e)=>showSideImage(e, 'card-image-5')} 
                            target='_blank'
                            rel='noreferrer'
                        >
                            Login Form
                        </a>
                        <a 
                            href='https://github.com/Amir-Mohebali/to-do-app-and-form-validation' 
                            className='card-title' 
                            onMouseOver={(e)=>showSideImage(e, 'card-image-6')} 
                            target='_blank'
                            rel='noreferrer'
                        >
                            to-do app
                        </a>
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
            </section>

            <section className='projects' id='projects'>
                <h2 className='main-title'>My Projects</h2>
                <Slider />
            </section>

            <section className='contact' id='contact'>
                <h2 className='main-title'>Contact Me</h2>
                <Contact />
            </section>
        </div>
    )
}

export default Home