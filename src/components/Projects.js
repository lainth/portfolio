import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Projects = () => {
    return (
        
        <Row>
            <Col xs={12} className="projects-wrapper">
                <Card className="projects-anim text-center">
                    <Card.Body className="projects-body">
                        <Card.Title className="projects-titles">Quotes Generator</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React | Bootstrap | HTML/CSS</Card.Subtitle>
                        <Card.Text>
                            A mini application fetching quotes from an API and rendering them via 
                            React.
                        </Card.Text>
                        <Button 
                        variant="primary" 
                        href="#" 
                        target="_blank"
                        className="projects-btn">
                        <FontAwesomeIcon icon={faGithub} /> Check it out
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} className="projects-wrapper">
                <Card className="projects-anim text-center">
                    <Card.Body className="projects-body">
                        <Card.Title className="projects-titles">Wikipedia Viewer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React | Bootstrap | HTML/CSS</Card.Subtitle>
                        <Card.Text>
                            An application using Wikipea API in order to display a random article
                            or specific one.
                        </Card.Text>
                        <Button 
                        variant="primary" 
                        href="#" 
                        target="_blank"
                        className="projects-btn">
                        <FontAwesomeIcon icon={faGithub} /> Check it out
                        </Button>                    
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} className="projects-wrapper">
                <Card className="projects-anim text-center">
                    <Card.Body className="projects-body">
                        <Card.Title className="projects-titles">Portfolio</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React | Bootstrap | HTML/CSS</Card.Subtitle>
                        <Card.Text>
                            The first version of my portfolio.
                        </Card.Text>
                        <Button 
                        variant="primary" 
                        href="https://github.com/lainth/portfolio" 
                        target="_blank"
                        className="projects-btn">
                        <FontAwesomeIcon icon={faGithub} /> Check it out
                        </Button>                 
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Projects;