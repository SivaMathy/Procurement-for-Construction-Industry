import React, { useRef, Component } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo4.png";
import slide1 from "../assets/n_slide1.jpg";
import slide2 from "../assets/n_slide2.jpg";
import slide3 from "../assets/n_slide3.jpg";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class n_Patients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.retriveUsers();
  }

  retriveUsers() {
    axios.get("http://localhost:8000/users").then((res) => {
      if (res.data.success) {
        this.setState({
          users: res.data.existingUsers,
        });

        console.log(this.state.users);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/user/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retriveUsers();
    });
  };

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/users").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingUsers, searchKey);
      }
    });
  };

  filterData(users, searchKey) {
    const result = users.filter((user) => user.userName.includes(searchKey));

    this.setState({ users: result });
  }

  pdfGeneate = (users) => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    const columns = [
      { title: "Name", field: "userName" },
      { title: "Phone", field: "phone" },
      { title: "Email", field: "email" },
      { title: "Password", field: "password" },
      { title: "DoB", field: "dob" },
    ];
    // const tableRows = [users];
    doc.addImage(logo, "JPG", 20, 3, 30, 30);
    doc.text(70, 10, "Hospital Zone Patient Details");
    //doc.addPage();
    //doc.text(120, 414, "Nishanthan Kanagasunderam");
    //doc.text(120, 600, `{this.state.users}`);
    doc.autoTable({
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: this.state.users,
    });
    doc.text(460, 200, "Printed Date : " + this.getCurrentDate());
    doc.text(460, 215, "Printed Time : " + this.getTime());
    doc.save("Zone_patients.pdf");
  };

  getCurrentDate(separator = ".") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  getTime() {
    var today = new Date(),
      time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return time;
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
          All Patients
        </p>
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
        <>
          <Container className="mt-5">
            <Row>
              <Col lg={9} md={6} sm={12}>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">User Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Password</th>
                      <th scope="col">Dob</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map((users, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <a
                            href={`http://localhost:8000/user/${users._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            {users.userName}
                          </a>
                        </td>
                        <td>{users.email}</td>
                        <td>{users.phone}</td>
                        <td>{users.password}</td>
                        <td>{users.dob}</td>
                        <td>
                          {/* <a
                            className="btn btn-warning"
                            href={`/editPatient/${users._id}`}
                          >
                            <i className="fas fa-edit"></i>&nbsp;Edit
                          </a> */}
                          &nbsp;
                          <a
                            className="btn btn-danger"
                            href="#"
                            onClick={() => this.onDelete(users._id)}
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
                <button
                  className="btn btn-success text-left"
                  style={{ marginRight: "210px" }}
                  onClick={this.pdfGeneate}
                >
                  {" "}
                  <i className="fas fa-print"></i>&nbsp;&nbsp;
                  <a
                    className="text-decoration-none text-white "
                    href="/patients"
                  >
                    Print
                  </a>
                </button>
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
