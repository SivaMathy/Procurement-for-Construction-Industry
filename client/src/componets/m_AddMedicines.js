import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class AddMedicines extends Component {
  state = {
    name: "",
    id: "",
    strength: "",
    description: "",
    manufacturer: "",
    m_price: "",
    r_price: "",
  };

  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    if (this.state.name !== "" && this.state.id !== "") {
      axios
        .post("http://localhost:8000/medicine/med", this.state)
        .then((res) => {
          console.log("successfully posted");
          this.setState({
            name: "",
            id: "",
            strength: "",
            description: "",
            manufacturer: "",
            m_price: "",
            r_price: "",
          });
        });
      window.location = "/";
    }
  };
  render() {
    return (
      <div>
        <div className="AddMedicines">
          <div className="container container text-left">
            <br />
            <br />
            <div className="border border-secondary" id="addmed">
              <div className="row">
                <div className="col-md-8 m-auto"></div>
                <div className="col-md-2 m-auto">
                  <br />
                  <Link to="/show" className="btn btn-outline-warning">
                    Show All Medicines
                  </Link>
                </div>
              </div>
              <div className="col-md-8 m-auto">
                <h3
                  className="display-4 text-center "
                  style={{ color: "black" }}
                >
                  <b> Add Medicines</b>
                </h3>
                <br />

                <form
                  onSubmit={() => this.handleSubmit()}
                  className="was-validated"
                >
                  <div className="form-group">
                    <label>Medicine ID:-</label>
                    <input
                      type="text"
                      placeholder="ID of the Medicine"
                      name="id"
                      className="form-control"
                      value={this.state.id}
                      required
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Medicine Name:-</label>
                    <input
                      type="text"
                      placeholder="Name of the Medicine"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      required
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Strength:-</label>
                    <input
                      type="text"
                      placeholder="Strength"
                      name="strength"
                      className="form-control"
                      value={this.state.strength}
                      required
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Medicine Details:-</label>
                    <input
                      type="text"
                      placeholder="Describe this Medicine"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      required
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Manufacturer:-</label>
                    <input
                      type="text"
                      placeholder="Manufacturer"
                      name="manufacturer"
                      className="form-control"
                      value={this.state.manufacturer}
                      required
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Manufacturer Price:-</label>
                    <input
                      type="price"
                      placeholder="Manufacturer Price"
                      name="m_price"
                      className="form-control"
                      value={this.state.m_price}
                      required
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Retail Price:-</label>
                    <input
                      type="price"
                      placeholder="Reatial Price"
                      name="r_price"
                      className="form-control"
                      value={this.state.r_price}
                      required
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <center>
                    <button type="submit" className="btn btn-info">
                      Submit <i className="fas fa-angle-double-right"></i>
                    </button>
                  </center>
                  <br /> <br />
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default AddMedicines;
