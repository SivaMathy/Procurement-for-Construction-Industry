import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import logo from "../assets/logo.webp";
import register from "../assets/n_register.svg";
import "./n_login/n_Login.css";
import { Link, useNavigate } from "react-router-dom";

export default class n_EditProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ageGroup: "",
      gender: "",
      sample: "",
      desc: "",
      price: "",
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
    //const id = this.props.match.params.id;
    const id = "6326cc429c3a1d51a4ba767a";
    const { title, ageGroup, gender, sample, desc, price } = this.state;
   // const navigate = useNavigate;
    const data = {
      title: title,
      ageGroup: ageGroup,
      gender: gender,
      sample: sample,
      desc: desc,
      price: price,
    };

    console.log(data);

    axios
      .put(`http://localhost:8000/program/update/${id}`, data)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            title: "",
            ageGroup: "",
            gender: "",
            sample: "",
            desc: "",
            price: "",
          });
          alert("Updated Successfully");
        }
      });
  };

  componentDidMount() {
    console.log("nish");
    //const id = this.props.match.params.id;
    const id = "6326cc429c3a1d51a4ba767a";

    axios.get(`http://localhost:8000/program/${id}`).then((res) => {
      //console.log("Fail");
      if (res.data.success) {
        this.setState({
          title: res.data.program.title,
          ageGroup: res.data.program.ageGroup,
          gender: res.data.program.gender,
          sample: res.data.program.sample,
          desc: res.data.program.desc,
          price: res.data.program.price,
        });
        console.log(this.state.program);
      }
    });
  }

  render() {
    return (
      <>
        <Container className="mt-12">
          <form class="text-left was-validated">
            <img class="icon-img-R" src={logo} />
            <label for="Register" className="title font-weight-bold">
              Edit Medical Program
            </label>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div class="form-group">
                  <label for="patient name">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    class="form-control"
                    placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    pattern=".{8,}"
                    title="Eight or more characters"
                    required
                  />
                  <div class="invalid-feedback font-weight-bold">
                    Invalid Input.
                  </div>
                  <div class="valid-feedback font-weight-bold">Looks good!</div>
                </div>
                <div class="form-group">
                  <label for="patient name">Age group</label>
                  {/* <input
                    type="text"
                    id="ageGroup"
                    name="ageGroup"
                    class="form-control"
                    placeholder="Enter ageGroup"
                    value={this.state.ageGroup}
                    onChange={this.handleInputChange}
                    pattern=".{8,}"
                    required
                  /> */}

                  <select
                    class="form-control"
                    id="ageGroup"
                    name="ageGroup"
                    value={this.state.ageGroup}
                    onChange={this.handleInputChange}
                  >
                    <option>1 - 8</option>
                    <option>9 - 18</option>
                    <option>19 - 30</option>
                    <option>45+</option>
                    <option>Any age group</option>
                  </select>

                  <div class="invalid-feedback font-weight-bold">
                    Invalid Input.
                  </div>
                  <div class="valid-feedback font-weight-bold">Looks good!</div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 mb-3">
                    <label for="phone">Gender</label>
                    {/* <input
                      type="text"
                      id="gender"
                      name="gender"
                      class="form-control"
                      placeholder="Enter gender"
                      value={this.state.gender}
                      onChange={this.handleInputChange}
                      pattern=".{8,}"
                      title="Eight or more characters"
                      required
                    /> */}
                    <select
                      class="form-control"
                      id="gender"
                      name="gender"
                      value={this.state.gender}
                      onChange={this.handleInputChange}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <div class="invalid-feedback font-weight-bold">
                      Invalid Input.
                    </div>
                  </div>
                  <div class="form-group col-md-6 mb-3">
                    <label for="phone">Sample</label>
                    <input
                      type="text"
                      id="sample"
                      name="sample"
                      class="form-control"
                      placeholder="Enter sample"
                      value={this.state.sample}
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
                {/* 
                <button
                  type="submit"
                  class="btn btn-success text-center btn-block"
                  onClick={this.onSubmit}
                >
                  Submit
                </button> */}
              </Col>

              <Col lg={6} md={6} sm={12}>
                <div class="form-group">
                  <label for="phone">Description</label>
                  <textarea
                    type="text"
                    id="desc"
                    name="desc"
                    rows="4"
                    class="form-control"
                    placeholder="Enter desc"
                    value={this.state.desc}
                    onChange={this.handleInputChange}
                    required
                    pattern=".{8,}"
                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                  />{" "}
                  <div class="invalid-feedback font-weight-bold">
                    Invalid Input.
                  </div>
                </div>

                <div class="form-group">
                  <label for="phone">Price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    class="form-control"
                    placeholder="Enter price"
                    value={this.state.price}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div class="invalid-feedback font-weight-bold">
                    Invalid Input.
                  </div>
                  <div class="valid-feedback font-weight-bold">Looks good!</div>
                </div>

                <button
                  type="submit"
                  class="btn btn-success text-center btn-block"
                  onClick={this.onSubmit}
                  style={{
                    width: "250px",
                    marginLeft: "400px",
                    marginTop: "30px",
                  }}
                >
                  Submit
                </button>
              </Col>
            </Row>
          </form>
        </Container>
      </>
    );
  }
}
