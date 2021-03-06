import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ReactRevealText from "react-reveal-text";
import VizSensor from "react-visibility-sensor";

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
        <VizSensor
          active={this.show}
          onChange={this.keepChange}
          partialVisibility={true}
        >
          <Col xs={12} xl={12}>
            <p className="pres-text">
              <ReactRevealText show={this.state.show}>
                I am a savvy and hard working developer who has a passion for
                programming, problem solving and IT in general, I learn fast and
                enjoy to be challenged. I am a very easy going person who can
                adjust to many situations, working as a waiter in a luxury
                restaurant taught me how to work alongside people with different
                personnalities, work efficiently as a team and work under a lot
                of pressure. My goal is to be able to live off of my passion
                which is the IT industry, to do so, I'm working on improving my
                knowledges through several online ressources such as
                OpenClassrooms, FreeCodeCamp and much more.
              </ReactRevealText>
            </p>
          </Col>
        </VizSensor>
      </Row>
    );
  }
}

export default Presentation;
