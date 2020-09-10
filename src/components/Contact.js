import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template-portfolio", e.target, "user_fDJh6rzxowfr4fhKECLs1")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <Row id="contact" name="contact">
      <Col xs={12}>
        <h2 className="contact-title" data-aos="zoom-in" data-aos-once={true}>
          Contact
        </h2>
      </Col>
      <Col>
        <Form onSubmit={sendEmail}>
          <Form.Group>
            <Form.Label htmlFor="full-name" className="contact-label">
              Name *
            </Form.Label>
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email" className="contact-label">
              Email address *
            </Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              I'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="subject" className="contact-label">
              Subject *
            </Form.Label>
            <Form.Control
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter a subject"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message" className="contact-label">
              Message *
            </Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows="3"
              placeholder="Enter your message..."
              required
            />
          </Form.Group>
          <Button
            className="contact-submit-btn"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Contact;
