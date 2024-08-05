import { useState } from 'react'
import Switch from 'react-switch'
import { useTheme } from '../../context/useTheme'
import './header.css'

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="wrapper container">
            <div className="logo">Fallon Carrington</div>
            <ul className={`menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                <li className="menu-item">
                    <a href="#home">Home</a>
                </li>
                <li className="menu-item">
                    <a href="#services">Services</a>
                </li>
                <li className="menu-item">
                    <a href="#skills">Skills</a>
                </li>
                <li className="menu-item">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className="menu-item">
                    <a href="#contact">Contact</a>
                </li>
                <li className="buttons">
                    <label htmlFor="" className="switch">
                        <Switch 
                            height={24}
                            width={48}
                            onColor="#4D4D4D"
                            offColor="#ccc"
                            onChange={toggleTheme}
                            checked={isDarkTheme}
                        />
                    </label>
                    <a href="" className="button">
                        <div className="hover"></div>
                        Hire Me
                    </a>
                </li>
            </ul>
        </div>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>
    </div>
  )
}

export default Header
