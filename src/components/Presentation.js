import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ReactRevealText from "react-reveal-text";
import VizSensor from "react-visibility-sensor";

import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 1.5em;
  color: white;
  font-family: "Rubik", sans-serif;
  border-radius: 5px;
`;

const StyledList = styled.ul`
  padding-inline-start: 0px;
`;

const StyledH4 = styled.h4`
  font-weight: 800;
`;

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.keepChange = this.keepChange.bind(this);
  }

  keepChange(isVisible) {
    if (isVisible) {
      this.setState({ show: true });
    }
  }

  render() {
    return (
      <Row id="pres" name="pres" className="pres-wrapper">
        <Col xs={12}>
          <h2 className="pres-section-title">About Me</h2>
        </Col>
        <VizSensor active={this.show} onChange={this.keepChange}>
          <Col xs={12} xl={8}>
            <p className="pres-text">
              <ReactRevealText show={this.state.show}>
                I am a savvy developper who developped a passion for programming
                and solving problems. My goal is to become a full-stack software
                engineer. In order to do so, I decided to specialise, in the
                first place, in Front end and UX design. Once I'm comfortable
                working on front end technologies, I intend to learn and work on
                back end oriented solutions. System design, Algorithms, Data
                Dtructures and working with differents kind of databases are
                skills that I am really eager to improve.
              </ReactRevealText>
            </p>
          </Col>
        </VizSensor>
        <VizSensor active={this.show} onChange={this.keepChange}>
          <Col xs={12} xl={4}>
            <StyledDiv>
              <StyledH4>Education</StyledH4>
              <StyledList>
                Bachelor Degree (CS Fundamentals)
                <br />
                Harvard CS50 Course
                <br />
                Self-teaching throught projects
              </StyledList>
              <StyledH4>Languages</StyledH4>
              <StyledList>
                French (native)
                <br />
                English (fluent)
              </StyledList>
              <StyledH4>Hobbies</StyledH4>
              <StyledList>
                Gaming
                <br />
                Swimming
                <br />
                Hiking
                <br />
                Biking
              </StyledList>
            </StyledDiv>
          </Col>
        </VizSensor>
      </Row>
    );
  }
}

export default Presentation;
