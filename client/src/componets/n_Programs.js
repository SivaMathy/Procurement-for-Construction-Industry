import React, { Component } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.webp";
import slide1 from "../assets/n_slide1.jpg";
import slide2 from "../assets/n_slide2.jpg";
import slide3 from "../assets/n_slide3.jpg";

export default class n_programs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: [],
    };
  }

  componentDidMount() {
    this.retrivePrograms();
  }

  retrivePrograms() {
    axios.get("http://localhost:8000/programs").then((res) => {
      if (res.data.success) {
        this.setState({
          programs: res.data.existingPrograms,
        });

        console.log(this.state.programs);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/program/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrivePrograms();
    });
  };

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/programs").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPrograms, searchKey);
      }
    });
  };

  filterData(programs, searchKey) {
    const result = programs.filter((program) =>
      program.title.includes(searchKey)
    );

    this.setState({ programs: result });
  }

  render() {
    return (
      <div className="container">
        <p
          className="font-weight-bold"
          style={{
            color: "black",
            width: "250px",
            fontSize: "30px",
            marginTop: "25px",
          }}
        >
          All Programs
        </p>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="col-lg-9 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="search"
                name="searchbar"
                onChange={this.handleSearchArea}
                style={{
                  width: "250px",
                }}
              ></input>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <button className="btn btn-info tab" type="submit">
              <a
                className="text-decoration-none text-dark "
                href="/createProgram"
              >
                Add Medical Program
              </a>
              <i className="bi bi-box-arrow-in-right"></i>
            </button>
          </Col>
        </Row>
        <>
          <Container className="mt-5">
            <Row>
              <Col lg={9} md={6} sm={12}>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Age Group</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Sample</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price(Rs)</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.programs.map((programs, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <a
                            href={`/program/${programs._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            {programs.title}
                          </a>
                        </td>
                        <td>{programs.ageGroup}</td>
                        <td>{programs.gender}</td>
                        <td>{programs.sample}</td>
                        <td>{programs.desc}</td>
                        <td>{programs.price}</td>
                        <td>
                          <a
                            className="btn btn-warning"
                            href={`/editProgram/${programs._id}`}
                          >
                            <i className="fas fa-edit"></i>&nbsp;Edit
                          </a>
                          &nbsp;
                          <a
                            className="btn btn-danger"
                            href="#"
                            onClick={() => this.onDelete(programs._id)}
                          >
                            <i className="fas fa-trash"></i>&nbsp;Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <br></br>
                <hr></hr>
                <h3>ZONE</h3>
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        class="d-block w-100"
                        src={slide1}
                        alt="First slide"
                      ></img>
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                        style={{
                          width: "250px",
                          height: "200px",
                        }}
                      ></img>
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                      ></img>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      </div>
    );
  }
}
