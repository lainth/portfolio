import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactRevealText from 'react-reveal-text';

class Presentation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ show: true });
        }, 2000);
      }

    render() {
        return (
            <Row id="pres" name="pres" className="pres-anim pres-wrapper">
                <Col xs={12}>
                <h2 className="pres-section-title">About Me</h2>
                    <p className="pres-text">
                        <ReactRevealText show={this.state.show}>
                            I've earned a Bachelor degree in Computer Science in 2014.
                            Continued my studies into a Master degree, and dropped out,
                            a year and half after.
                            I know, at this point, you must've already some questions popping up 
                            in the back of your head.
                            And yes, those questions will be answered in due time.
                            In order not to turn this portoflio into a Medium article, I will
                            simply say, that I realised my mistake, and I am working on fixing it.
                        </ReactRevealText>
                    </p>
                </Col>
            </Row>
        );
    }
}

export default Presentation;