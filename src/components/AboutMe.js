import React from "react";

import MyParticles from "./Particles";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typist from "react-typist";

const AboutMe = () => {
  return (
    <Row id="about" name="about" className="about-wrapper">
      <MyParticles />
      <Col className="about-text">
        <div>
          <Typist cursor={{ hideWhenDone: true }}>
            <span>Welcome.</span>
            <Typist.Delay ms={1000} />
            <br />
            <span>I'm Thomas, a self-taught IT savvy from France.</span>
            <Typist.Delay ms={1000} />
            <br />
            <span>Let's get to know each other.</span>
          </Typist>
        </div>
      </Col>
    </Row>
  );
};

export default AboutMe;
