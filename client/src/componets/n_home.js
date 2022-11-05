import React, { Component } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/n_notFound.svg";
import dash from "../assets/n_dash.jpg";
import logo from "../assets/logo4.png";
import userManagement from "../assets/userManagement.png";
import labManagement from "../assets/labManagement.png";
import programManagement from "../assets/programManagement.png";
import medicine from "../assets/medicine.png";
import doctor from "../assets/doctor.png";
import delivery from "../assets/vehicle.png";
// import "./n_design.css";
export default class n_home extends Component {
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

    if (!this.state.password.includes("1")) {
      passwordError = "invalid Password";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }

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
        <div
          style={{
            marginTop: "25px",
          }}
        >
          <h2> Admin Dashboard</h2>
        </div>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={12} sm={12}>
              <img
                class="d-block w-100"
                src={logo}
                alt="First slide"
                style={{
                  height: "650px",
                  width: "650px",
                }}
              ></img>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <div class="container">
                  <div class="row">
                    <div class="col">
                      {" "}
                      <button
                        className="btn btn-info tab"
                        type="submit"
                        style={{
                          color: "black",
                          fontSize: "20px",
                          background: "white",
                          height: "200px",
                          width: "200px",
                        }}
                      >
                        <a
                          className="text-decoration-none text-dark "
                          href="/patients"
                        >
                          <img
                            class="d-block w-100"
                            src={userManagement}
                            alt="First slide"
                            style={{
                              height: "150px",
                              width: "150px",
                            }}
                          ></img>
                          Manage Employees
                        </a>
                        <i className="bi bi-box-arrow-in-right"></i>
                      </button>
                    </div>
                    <div class="col">
                      {" "}
                      <button
                        className="btn btn-info tab"
                        type="submit"
                        style={{
                          color: "black",
                          fontSize: "20px",
                          background: "white",
                          height: "200px",
                          width: "200px",
                          hover: "background:'red'",
                        }}
                      >
                        <a
                          className="text-decoration-none text-dark "
                          href="/programs"
                        >
                          <img
                            class="d-block w-100"
                            src={programManagement}
                            alt="First slide"
                            style={{
                              height: "150px",
                              width: "150px",
                            }}
                          ></img>
                          Manage Suppliers
                        </a>
                        <i className="bi bi-box-arrow-in-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Row>
              <Row>
                <div
                  class="container"
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <div class="row">
                    <div class="col">
                      {" "}
                      <button
                        className="btn btn-info tab"
                        type="submit"
                        style={{
                          color: "black",
                          fontSize: "20px",
                          background: "white",
                          height: "200px",
                          width: "200px",
                        }}
                      >
                        <a
                          className="text-decoration-none text-dark "
                          href="/supplier"
                        >
                          <img
                            class="d-block w-100"
                            src={labManagement}
                            alt="First slide"
                            style={{
                              height: "150px",
                              width: "150px",
                            }}
                          ></img>
                          Manage Orders
                        </a>
                        <i className="bi bi-box-arrow-in-right"></i>
                      </button>
                    </div>
                    <div class="col">
                      {" "}
                      <button
                        className="btn btn-info tab dasButton"
                        type="submit"
                        style={{
                          color: "black",
                          fontSize: "20px",
                          background: "white",
                          height: "200px",
                          width: "200px",
                        }}
                      >
                        <a
                          className="text-decoration-none text-dark "
                          href="/view"
                        >
                          <img
                            class="d-block w-100"
                            src={delivery}
                            alt="First slide"
                            style={{
                              height: "150px",
                              width: "150px",
                            }}
                          ></img>
                          Manage Sites
                        </a>
                        <i className="bi bi-box-arrow-in-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Row>
              <Row>
                <div
                  class="container"
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <div class="row">
                    <div class="col">
                      {" "}
                      <button
                        className="btn btn-info tab"
                        type="submit"
                        style={{
                          color: "black",
                          fontSize: "20px",
                          background: "white",
                          height: "200px",
                          width: "200px",
                        }}
                      >
                        <a
                          className="text-decoration-none text-dark "
                          href="/accountant"
                        >
                          <img
                            class="d-block w-100"
                            src={medicine}
                            alt="First slide"
                            style={{
                              height: "150px",
                              width: "150px",
                            }}
                          ></img>
                          Manage Budget
                        </a>
                        <i className="bi bi-box-arrow-in-right"></i>
                      </button>
                    </div>
                    <div class="col">
                      {" "}
                      <button
                        className="btn btn-info tab dasButton"
                        type="submit"
                        style={{
                          color: "black",
                          fontSize: "20px",
                          background: "white",
                          height: "200px",
                          width: "200px",
                        }}
                      >
                        <a
                          className="text-decoration-none text-dark "
                          href="/addmed"
                        >
                          <img
                            class="d-block w-100"
                            src={doctor}
                            alt="First slide"
                            style={{
                              height: "150px",
                              width: "150px",
                            }}
                          ></img>
                          Manage Delivery
                        </a>
                        <i className="bi bi-box-arrow-in-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
          <br></br>
        </Container>
      </>
    );
  }
}
