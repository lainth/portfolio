import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

const Presentation = () => {
    return (
        <Row className="pres-anim-jumbo">
            <Col className="pres-wrapper">
                <Jumbotron className="pres-style-jumbo">
                    <Row>
                        <Col xs={12}>
                            <Image 
                                src="https://pbs.twimg.com/profile_images/1278264520264290306/kg3onpTN_400x400.jpg"
                                alt="thomas-rounded-img"
                                roundedCircle
                                className="pres-img" 
                                />
                        </Col>
                        <Col xs={12}>
                            <p className="pres-text">
                                My name is Thomas, I am 28, and I'm a developer from France.
                            </p>
                            <p className="pres-text">
                                I studied Computer Science for a couple of years before dropping out
                                of college and taking a gap year in Australia.
                            </p>
                            <p className="pres-text">
                                When I came back, I found a job as a waiter in a 1 starred
                                Michelin restaurant.
                                Eventually, I realised this job and this life were never
                                meant for me.
                            </p>
                            <p className="pres-text">
                                I haven't spend a day without coding ever since...
                            </p>
                        </Col>
                    </Row>
                </Jumbotron>
            </Col>
        </Row>
    );
}

export default Presentation;



// https://pbs.twimg.com/profile_images/1278264520264290306/kg3onpTN_400x400.jpg