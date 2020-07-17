import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Projects = () => {
    return (
        
        <Row className="projects-anim">
            <Col xs={12}>
                <h2 className="projects-section-title">Projects:</h2>
            </Col>
            <Col xs={12} sm={4} className="projects-wrapper">
                <Card className="text-center">
                    <Card.Body className="projects-body">
                        <Card.Title className="projects-titles">Quotes generator</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React - Bootstrap - HTML/CSS</Card.Subtitle>
                        <Card.Text>
                            A mini application fetching quotes from an API and rendering them via 
                            React.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="projects-footer">
                    <a 
                        href="#" 
                        target="_blank">
                        <FontAwesomeIcon icon={faGithub} /> Check it out
                    </a>
                    </Card.Footer>  
                </Card>
            </Col>
            <Col xs={12} sm={4} className="projects-wrapper">
                <Card className="projects-anim text-center">
                    <Card.Body className="projects-body">
                        <Card.Title className="projects-titles">Wikipedia Viewer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React - Bootstrap - HTML/CSS</Card.Subtitle>
                        <Card.Text>
                            An application using Wikipedia API in order to display a random article
                            or specific one.
                        </Card.Text>                  
                    </Card.Body>
                    <Card.Footer className="projects-footer">
                        <a 
                            href="#" 
                            target="_blank">
                            <FontAwesomeIcon icon={faGithub} /> Check it out
                        </a>
                    </Card.Footer>  
                </Card>
            </Col>
            <Col xs={12} sm={4} className="projects-wrapper">
                <Card className="projects-anim text-center">
                    <Card.Body className="projects-body">
                        <Card.Title className="projects-titles">Portfolio</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React - Bootstrap - HTML/CSS</Card.Subtitle>
                        <Card.Text>
                            The first version of my portfolio.
                        </Card.Text>              
                    </Card.Body>
                    <Card.Footer className="projects-footer">
                        <a 
                            href="https://github.com/lainth/portfolio" 
                            target="_blank">
                            <FontAwesomeIcon icon={faGithub} /> Check it out
                        </a>
                    </Card.Footer>  
                </Card>
            </Col>
        </Row>
    );
}

export default Projects;