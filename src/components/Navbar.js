import React from 'react';

import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <div className="navigation text-center">
            <div className="top-title">
                <h1 className="nav-title">Thomas</h1>
                <p className="nav-subtitle">Web Developer</p>
            </div>
            <div className="center-link">
                <a href="#about">About</a>
                <a href="#services">Projects</a>
                <a href="#clients">Technologies</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="download-link center-block">
                <Button className="download-button">Download my resume</Button>
            </div>
        </div>
    );
}

export default NavBar;