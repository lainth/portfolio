import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
      emailSent: false,
    });
  };

  render() {
    return (
      <Row id="contact" name="contact">
        <Col xs={12}>
          <h2 className="contact-title" data-aos="zoom-in" data-aos-once={true}>
            Contact
          </h2>
        </Col>
        <Col>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name" className="contact-label">
                Name *
              </Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
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
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                I'll never share your email with anyone else.
              </Form.Text>
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
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="Enter your message..."
                required
              />
            </Form.Group>
            <Button
              className="contact-submit-btn"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Submit
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline contact-success-msg">
                You email has been successfully sent, I'll get back to you
                quickly.
              </p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline contact-err-msg">
                Something went wrong, your email could not be sent...
              </p>
            )}
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Contact;
