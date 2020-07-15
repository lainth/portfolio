import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typist from 'react-typist';

const AboutMe =() => {
    return (
        <Row>
            <Col className="about-wrapper">
                <div className="about-name">
                    <Typist>
                        <span>I'm Thomas.</span>
                        <Typist.Backspace count={11} delay={25} />
                        <span>28 years old.</span>
                        <Typist.Backspace count={13} delay={25} />
                        <span>France.</span>
                        <Typist.Backspace count={7} delay={25} />
                        <span>Speak English.</span>
                        <Typist.Backspace count={14} delay={25} />
                        <span>Developer.</span>
                        <Typist.Backspace count={10} delay={25} />
                        <span>Gamer.</span>
                        </Typist>
                 </div>
            </Col>
        </Row>
    );
}

export default AboutMe;