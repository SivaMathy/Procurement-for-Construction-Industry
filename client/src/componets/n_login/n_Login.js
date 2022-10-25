import React, { Component } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.webp";
import login from "../../assets/n_login.svg";
import "./n_Login.css";
export default class n_Login extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type == "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    if (!this.state.email.includes("1")) {
      emailError = "Invalid Email or Password";
    }

    // if (!this.state.password.includes("1")) {
    //   passwordError = "invalid Password";
    // }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    // if (passwordError) {
    //   this.setState({ passwordError });
    //   return false;
    // }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const navigate = useNavigate;
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //rediect to home
      navigate("/register");
    }
    console.log(this.state);
  };
  render() {
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Form class="text-left" onSubmit={this.handleSubmit}>
                <img class="icon-img" src={logo} />
                <label for="Login" className="login-title font-weight-bold">
                  Login
                </label>
                <div
                  style={{
                    fontSize: 18,
                    color: "red",
                    fontStyle: "italic",
                  }}
                >
                  {this.state.emailError}
                </div>
                <Form.Group
                  className="mb-3 text-left"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    // value={this.state.email}
                    onChange={this.handleChange}
                  />
                  {/* <div
                    style={{ fontSize: 16, color: "red", fontStyle: "italic" }}
                  >
                    {this.state.emailError}
                  </div> */}
                </Form.Group>

                <Form.Group
                  className="mb-3 text-left"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    // value={this.state.password}
                    onChange={this.handleChange}
                  />
                  {/* <div
                    style={{ fontSize: 16, color: "red", fontStyle: "italic" }}
                  >
                    {this.state.passwordError}
                  </div> */}
                </Form.Group>

                <Button variant="primary btn-block" type="submit">
                  Login
                </Button>

                <div className="text-left at-3">
                  <a href="/register">
                    <small className="account">Create an account</small>
                  </a>
                </div>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img class="login-img"  src={login} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
