import { FaFacebookF, FaPlay } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TiSocialLinkedin, TiSocialInstagram } from 'react-icons/ti'
import HeroImg from '../assets/dev.png'

import './home.css'

const Home = () => {
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
    </div>
  )
}

export default Home