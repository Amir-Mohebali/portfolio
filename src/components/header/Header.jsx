import { useState } from 'react'
import Switch from 'react-switch'
import { IoSunny, IoMoon } from "react-icons/io5";
import { useTheme } from '../../context/useTheme'
import './header.css'

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div className={`nav`}>
        <div className="wrapper container">
            <div className="logo">AmirHossein Mohebali</div>
            <div className="menu">
                <ul className={`links ${isMobileMenuOpen ? 'mobile-links' : ''}`}>
                    <li className="item">
                        <a href="#intro">Intro</a>
                    </li>
                    <li className="item">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="item">
                        <a href="#courses">Courses</a>
                    </li>
                    <li className="item">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <label htmlFor="" className="switch">
                                <Switch 
                                    uncheckedIcon={
                                        <IoMoon 
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "100%",
                                                fontSize: "16px",
                                                color: "#112E59",
                                                marginLeft: "6px"
                                            }} 
                                        />
                                    }
                                    checkedIcon={
                                        <IoSunny
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "100%",
                                                fontSize: "16px",
                                                color: "#fffe03",
                                                marginLeft: "4px"
                                            }} 
                                        />
                                    }
                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                    height={25}
                                    width={50}
                                    onColor="#4D4D4D"
                                    offColor="#ccc"
                                    onChange={toggleTheme}
                                    checked={isDarkTheme}
                                />
                </label>
                <div className="hamburger-menu" onClick={toggleMobileMenu}>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
