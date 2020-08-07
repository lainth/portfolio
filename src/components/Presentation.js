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
                I've earned a Bachelor degree in Computer Science in 2014.
                Continued my studies into a Master degree, and dropped out, a
                year and half after. I know, at this point, you must've already
                some questions popping up in the back of your head. And yes,
                those questions will be answered in due time. In order not to
                turn this portoflio into a Medium article, I will simply say,
                that I realised my mistake, and I am working on fixing it. I've
                earned a Bachelor degree in Computer Science in 2014. Continued
                my studies into a Master degree, and dropped out, a year and
                half after. I know, at this point, you must've already some
                questions popping up in the back of your head. And yes, those
                questions will be answered in due time. In order not to turn
                this portoflio into a Medium article, I will simply say, that I
                realised my mistake, and I am working on fixing it.
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
