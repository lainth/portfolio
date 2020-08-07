import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <Row id="projects" name="projects" className="projects-wrapper">
      <Col xs={12} data-aos="zoom-in" data-aos-once={true}>
        <h2 className="projects-section-title">Projects</h2>
      </Col>
      <Col xs={12} sm={6} data-aos="zoom-in" data-aos-once={true}>
        <Card className="text-center projects-card-border-top projects-card-border-right">
          <Card.Body className="projects-body">
            <Card.Title className="projects-titles">Lorem ipsum</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Lorem - Lorem - Lorem
            </Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Card.Footer>
              <a href="#" target="_blank" className="projects-link">
                <FontAwesomeIcon icon={faGithub} /> Code here
              </a>
              <br />
              <a href="#" target="_blank" className="projects-link">
                <FontAwesomeIcon icon={faPlay} /> Live version
              </a>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} data-aos="zoom-in" data-aos-once={true}>
        <Card className="text-center projects-card-border-top projects-card-border-right">
          <Card.Body className="projects-body">
            <Card.Title className="projects-titles">Lorem ipsum</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Lorem - Lorem - Lorem
            </Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Card.Footer>
              <a href="#" target="_blank" className="projects-link">
                <FontAwesomeIcon icon={faGithub} /> Code here
              </a>
              <br />
              <a href="#" target="_blank" className="projects-link">
                <FontAwesomeIcon icon={faPlay} /> Live version
              </a>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} data-aos="zoom-in" data-aos-once={true}>
        <Card className="text-center projects-card-border-top projects-card-border-right projects-card-border-rtop">
          <Card.Body className="projects-body">
            <Card.Title className="projects-titles">Lorem ipsum</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Lorem - Lorem - Lorem
            </Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Card.Footer>
              <a href="#" target="_blank" className="projects-link">
                <FontAwesomeIcon icon={faGithub} /> Code here
              </a>
              <br />
              <a href="#" target="_blank" className="projects-link">
                <FontAwesomeIcon icon={faPlay} /> Live version
              </a>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} data-aos="zoom-in" data-aos-once={true}>
        <Card className="text-center projects-card-border-top projects-card-border-bot projects-card-border-rtop">
          <Card.Body className="projects-body">
            <Card.Title className="projects-titles">Lorem ipsum</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Lorem - Lorem - Lorem
            </Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Card.Footer>
              <a href="#" target="_blank" className="projects-link">
                <FontAwesomeIcon icon={faGithub} /> Code here
              </a>
              <br />
              <a href="#" target="_blank" className="projects-link">
                <FontAwesomeIcon icon={faPlay} /> Live version
              </a>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Projects;
