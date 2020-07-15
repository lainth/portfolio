import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
        <Row>
            <Col xs={12} className="header-wrapper">
                <div>
                    <h1 className="header-title">Welcome.</h1>
                </div>
            </Col>
            <Col xs={12}>
            </Col>
        </Row>
    );
}

export default Header;