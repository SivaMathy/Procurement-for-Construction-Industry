import React, { Component } from "react";
import axios from "axios";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import logo from "../assets/logo4.png";
import register from "../assets/n_register.svg";
import "./n_login/n_Login.css";
export default class n_CreatePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      phone: "",
      password: "",
      dob: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { userName, email, phone, password, dob } = this.state;

    const data = {
      userName: userName,
      email: email,
      phone: phone,
      password: password,
      dob: dob,
    };

    console.log(data);

    axios.post("http://localhost:8000/user/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          userName: "",
          email: "",
          phone: "",
          password: "",
          dob: "",
        });
        alert("Registered Successfully");
      } else {
        alert("Registration Failed!!!");
      }
    });
  };

  render() {
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col lg={5} md={6} sm={12}>
              <form class="text-left was-validated">
                <img class="icon-img-R" src={logo} />
                <label for="Register" className="title font-weight-bold">
                  Register
                </label>
                <div class="form-group">
                  <label for="patient name">Employee Name</label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    class="form-control"
                    placeholder="Enter Name"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    pattern="[a-z]{8,}"
                    title="Eight or more characters"
                    required
                  />
                  <div class="invalid-feedback font-weight-bold">
                    Invalid Input.
                  </div>
                  <div class="valid-feedback font-weight-bold">Looks good!</div>
                </div>
                <div class="form-group">
                  <label for="emil">Email address</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                  <div class="invalid-feedback font-weight-bold">
                    Invalid Input.
                  </div>
                  <div class="valid-feedback font-weight-bold">Looks good!</div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 mb-3">
                    <label for="phone">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      class="form-control"
                      placeholder="Enter Phone Number"
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                      pattern="[0-9]{10}"
                      title="Eight or more characters"
                      required
                    />
                    <div class="invalid-feedback font-weight-bold">
                      Invalid Input.
                    </div>
                    <div class="valid-feedback font-weight-bold">
                      Looks good!
                    </div>
                  </div>
                  <div class="form-group col-md-6 mb-3">
                    <label for="phone">NIC Number</label>
                    <input
                      type="text"
                      id="dob"
                      name="dob"
                      class="form-control"
                      placeholder="Enter DoB"
                      value={this.state.dob}
                      onChange={this.handleInputChange}
                      required
                    />
                    <div class="invalid-feedback font-weight-bold">
                      Invalid Input.
                    </div>

                    <div class="valid-feedback font-weight-bold">
                      Looks good!
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="phone">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                  />{" "}
                  <div class="invalid-feedback font-weight-bold">
                    Invalid Input.
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-success text-center btn-block"
                  onClick={this.onSubmit}
                >
                  Register
                </button>
              </form>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <img class="login-img" src={register} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
