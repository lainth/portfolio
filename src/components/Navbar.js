import React from "react";

import Button from "react-bootstrap/Button";
import styled from "styled-components";

import Pdf from "../files/resume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const StyledSpan = styled.span`
  font-size: 1.5em;
  color: hsl(60, 100%, 97%);
  margin-right: 0.5em;
`;

const StyledA = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const NavBar = () => {
  return (
    <div className="navigation text-center">
      <div className="top-title">
        <h1 className="nav-title">Thomas</h1>
        <p className="nav-subtitle">Web Developer</p>
        <StyledSpan>
          <FontAwesomeIcon icon={faGamepad} title="Gaming" />
        </StyledSpan>
        <StyledSpan>
          <FontAwesomeIcon icon={faSwimmer} title="Swimming" />
        </StyledSpan>
        <StyledSpan>
          <FontAwesomeIcon icon={faBook} title="Reading" />
        </StyledSpan>
        <StyledSpan>
          <FontAwesomeIcon icon={faHiking} title="Hiking" />
        </StyledSpan>
      </div>
      <div className="center-link">
        <a href="#about">Home</a>
        <a href="#pres">About</a>
        <a href="#projects">Projects</a>
        <a href="#techno">Technologies</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="download-link center-block">
        <Button className="download-button border-white">
          <StyledA href={Pdf} target="_blank" rel="noopener noreferrer">
            Check out my resume
          </StyledA>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
