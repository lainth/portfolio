import React from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faIdCardAlt } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MainButtonDiv = styled.div`
  margin-top: 1em;
  position: fixed;
  top: 0;
  right: 10px;
  z-index: 1;

  @media screen and (min-width: 568px) {
    margin-top: 0.5em;
  }

  @media screen and (min-width: 667px) {
    margin-top: 1em;
  }
`;

const Button = styled.button`
  display: block;
  font-size: 1.5em;
  border-radius: 25px;
  border: 0;
  background-color: hsl(0, 0%, 20%);
  color: white;
  width: 50px;
  height: 50px;

  &:focus {
    outline: 0;
  }
`;

const LinkButtonsDiv = styled.div`
  margin-top: 5em;
  position: fixed;
  right: 10px;
  z-index: 1;

  @media screen and (min-width: 568px) {
    margin-top: 3.7em;
  }

  @media screen and (min-width: 667px) {
    margin-top: 4.5em;
  }
`;

const LinkButton = styled.button`
  text-decoration: none;
  font-size: 1.5em;
  border-radius: 25px;
  border: 0;
  background-color: hsl(0, 0%, 20%);
  color: white;
  width: 50px;
  height: 50px;
  margin-bottom: 0.5em;

  @media screen and (min-width: 568px) {
    margin-bottom: 0.1em;
  }

  @media screen and (min-width: 667px) {
    margin-bottom: 0.5em;
  }
`;

const StyledAnchor = styled.a`
  color: white;

  &:hover {
    color: hsl(94, 100%, 47%);
  }
`;

export default class MobileNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <MainButtonDiv>
          <Button onClick={this.onClick}>
            <FontAwesomeIcon className="ios-display-fix" icon={this.state.active ? faTimes : faBars} />
          </Button>
        </MainButtonDiv>
        <LinkButtonsDiv>
          <LinkButton style={{ display: this.state.active ? "block" : "none" }}>
            <StyledAnchor href="#about">
              <FontAwesomeIcon className="ios-display-fix" icon={faHome} />
            </StyledAnchor>
          </LinkButton>
          <LinkButton style={{ display: this.state.active ? "block" : "none" }}>
            <StyledAnchor href="#pres">
              <FontAwesomeIcon className="ios-display-fix" icon={faIdCardAlt} />
            </StyledAnchor>
          </LinkButton>
          <LinkButton style={{ display: this.state.active ? "block" : "none" }}>
            <StyledAnchor href="#projects">
              <FontAwesomeIcon className="ios-display-fix" icon={faCode} />
            </StyledAnchor>
          </LinkButton>
          <LinkButton style={{ display: this.state.active ? "block" : "none" }}>
            <StyledAnchor href="#techno">
              <FontAwesomeIcon className="ios-display-fix" icon={faTools} />
            </StyledAnchor>
          </LinkButton>
          <LinkButton style={{ display: this.state.active ? "block" : "none" }}>
            <StyledAnchor href="#contact">
              <FontAwesomeIcon className="ios-display-fix" icon={faEnvelope} />
            </StyledAnchor>
          </LinkButton>
        </LinkButtonsDiv>
      </React.Fragment>
    );
  }
}
