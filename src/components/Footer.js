import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const popover = (
  <Popover id="popover-mail">
    <Popover.Content>xxxx.xxxx@xxxx.xxx</Popover.Content>
  </Popover>
);

const Footer = () => {
  return (
    <Row className="footer-wrapper">
      <Col xs={12}>
        <p className="footer-title">Want to know more?</p>
      </Col>
      <Col xs={12} sm={4} className="text-center">
        <Nav className="mr-auto flex-column">
          <Nav.Link
            href="https://github.com/lainth"
            target="_blank"
            className="footer-links"
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </Nav.Link>
        </Nav>
      </Col>
      <Col xs={12} sm={4} className="text-center">
        <Nav className="mr-auto flex-column">
          <Nav.Link
            href="https://twitter.com/ilainth"
            target="_blank"
            className="footer-links"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </Nav.Link>
        </Nav>
      </Col>
      <Col xs={12} sm={4} className="text-center">
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <Button className="footer-button">Email Me!</Button>
        </OverlayTrigger>
      </Col>
      <Col xs={12} className="text-center footer-copy">
        <div>
          <span>&copy; 2020 Thomas Laine. All Rights Reserved.</span>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
