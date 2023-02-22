import React from "react";
import '../style/header.css';

const Header = () => {

    return (
        <header className="header">
            <nav className="navigation-bar">
                <button className="navigation-button">
                    <a className="nav-link" href="#hero">
                        Welcome
                    </a>
                </button>
                <button className="navigation-button">
                    <a className="nav-link" href="#about">
                        About
                    </a>
                </button>
                <button className="navigation-button">
                    <a className="nav-link" href="#projects">
                        Projects
                    </a>
                </button>
                <button className="navigation-button">
                    <a className="nav-link" href="#contact">
                        Contact
                    </a>
                </button>
            </nav>
        </header>
    )

}

export default Header;