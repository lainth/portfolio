import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typist from 'react-typist';

const AboutMe = () => {
    return (
        <Row>
            <Col className="about-wrapper">
                <div className="about-text">
                    <Typist 
                    startDelay={3500} 
                    avgTypingDelay={50}
                    cursor={{ show: true, hideWhenDone: true, hideWhenDoneDelay: 0 }}>
                        <span>I'm Thomas.</span>
                        <Typist.Backspace count={11} delay={25} />
                        <span>I'm 28 years old.</span>
                        <Typist.Backspace count={17} delay={25} />
                        <span>I live in France.</span>
                        <Typist.Backspace count={17} delay={25} />
                        <span>Speak English.</span>
                        <Typist.Backspace count={14} delay={25} />
                        <span>And French.</span>
                        <Typist.Backspace count={11} delay={25} />
                        <span>I'm a developer.</span>
                        <Typist.Backspace count={16} delay={25} />
                        <span>A curious one.</span>
                        <Typist.Backspace count={14} delay={25} />
                        <span>I love to learn new things.</span>
                        <Typist.Backspace count={27} delay={25} />
                        <span>And solve problems.</span>
                        <Typist.Backspace count={19} delay={25} />
                        <span>And...</span>
                        <Typist.Backspace count={6} delay={2000} />
                        <span>Wait...</span>
                        <Typist.Backspace count={10} delay={2000} />
                        <span>I'm sorry.</span>
                        <Typist.Backspace count={12} delay={2000} />
                        <span>I got a little too excited.</span>
                        <Typist.Backspace count={27} delay={2000} />
                        <span className="about-last-elem">Let's start over.</span>
                    </Typist>
                 </div>
            </Col>
        </Row>
    );
}

export default AboutMe;