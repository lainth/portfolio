import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';

const Techno = () => {
    return(
        <Row className="techno-wrapper techno-anim">
            <Col xs={12}>
                <h2 className="techno-title">Tech I'm using:</h2>
            </Col>
            <Col xs={12} sm={4} lg={2} className="text-center">
                <FontAwesomeIcon icon={faGit} size="6x" className="techno-fa" />
                <br/>
                <span className="techno-text">Git</span>
            </Col>
            <Col xs={12} sm={4} lg={2} className="text-center">
                <FontAwesomeIcon icon={faReact} size="6x" className="techno-fa" />
                <br/>
                <span className="techno-text">REACT</span>
            </Col>
            <Col xs={12} sm={4} lg={2} className="text-center">
                <FontAwesomeIcon icon={faJs} size="6x" className="techno-fa" />
                <br/>
                <span className="techno-text">JavaScript</span>
            </Col>
            <Col xs={12} sm={4} lg={2} className="text-center">
                <FontAwesomeIcon icon={faBootstrap} size="6x" className="techno-fa" />
                <br/>
                <span className="techno-text">Bootstrap</span>
            </Col>
            <Col xs={12} sm={4} lg={2} className="text-center">
                <FontAwesomeIcon icon={faHtml5} size="6x" className="techno-fa" />
                <br/>
                <span className="techno-text">HTML</span>
            </Col>
            <Col xs={12} sm={4} lg={2} className="text-center techno-last">
                <FontAwesomeIcon icon={faCss3} size="6x" className="techno-fa" />
                <br/>
                <span className="techno-text">CSS</span>
            </Col>
        </Row>
    );
}

export default Techno;