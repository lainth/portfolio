import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay} from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        
        <Row id="projects" name="projects" className="projects-anim projects-wrapper">
            <Col xs={12}>
                <h2 className="projects-section-title">Projects</h2>
            </Col>
            <Col xs={12} sm={6}>
                <Card className="text-center projects-card-border-top projects-card-border-right">
                    <Card.Body className="projects-body">
                        <Card.Title className="projects-titles">Quotes generator</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React - Bootstrap - HTML/CSS</Card.Subtitle>
                        <Card.Text>
                            A mini application fetching quotes from an API and rendering them via 
                            React.
                        </Card.Text>
                        <Card.Footer>
                            <a 
                            href="#" 
                            target="_blank"
                            className="projects-link">
                            <FontAwesomeIcon icon={faGithub} /> Code here
                            </a>
                            <br/>
                            <a 
                            href="#" 
                            target="_blank"
                            className="projects-link">
                            <FontAwesomeIcon icon={faPlay} /> Live version
                            </a>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6}>
                <Card className="text-center projects-card-border-top">
                    <Card.Body className="projects-body">
                        <Card.Title className="projects-titles">Quotes generator</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React - Bootstrap - HTML/CSS</Card.Subtitle>
                        <Card.Text>
                            A mini application fetching quotes from an API and rendering them via 
                            React.
                        </Card.Text>
                        <Card.Footer>
                        <a 
                            href="#" 
                            target="_blank"
                            className="projects-link">
                            <FontAwesomeIcon icon={faGithub} /> Code here
                            </a>
                            <br/>
                            <a 
                            href="#" 
                            target="_blank"
                            className="projects-link">
                            <FontAwesomeIcon icon={faPlay} /> Live version
                            </a>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6}>
                <Card className="text-center projects-card-border-top projects-card-border-rtop projects-card-border-right ">
                    <Card.Body className="projects-body">
                        <Card.Title className="projects-titles">Quotes generator</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React - Bootstrap - HTML/CSS</Card.Subtitle>
                        <Card.Text>
                            A mini application fetching quotes from an API and rendering them via 
                            React.
                        </Card.Text>
                        <Card.Footer>
                        <a 
                            href="#" 
                            target="_blank"
                            className="projects-link">
                            <FontAwesomeIcon icon={faGithub} /> Code here
                            </a>
                            <br/>
                            <a 
                            href="#" 
                            target="_blank"
                            className="projects-link">
                            <FontAwesomeIcon icon={faPlay} /> Live version
                            </a>
                        </Card.Footer>  
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6}>
                <Card className="text-center projects-card-border-bot projects-card-border-rtop">
                    <Card.Body className="projects-body">
                        <Card.Title className="projects-titles">Portfolio</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React - Bootstrap - HTML/CSS</Card.Subtitle>
                        <Card.Text>
                            The first version of my portfolio.
                        </Card.Text>             
                        <Card.Footer>
                        <a 
                            href="#" 
                            target="_blank"
                            className="projects-link">
                            <FontAwesomeIcon icon={faGithub} /> Code here
                            </a>
                            <br/>
                            <a 
                            href="#" 
                            target="_blank"
                            className="projects-link">
                            <FontAwesomeIcon icon={faPlay} /> Live version
                            </a>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Projects;