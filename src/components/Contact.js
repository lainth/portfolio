import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <Row id="contact" name="contact">
      <Col xs={12}>
        <h2 className="contact-title" data-aos="zoom-in" data-aos-once={true}>
          Contact
        </h2>
      </Col>
      <Col>
        <Form>
          <Form.Group controlId="Name">
            <Form.Label className="contact-label">Name *</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required/>
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label className="contact-label">Email address *</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  required/>
            <Form.Text className="text-muted">
              I'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="Textarea">
            <Form.Label className="contact-label">Message *</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Enter your message..." required/>
          </Form.Group>
          <Button className="contact-submit-btn" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Contact;
