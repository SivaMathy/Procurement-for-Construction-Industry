import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { Button } from "react-bootstrap";


class MedicinesAdmin extends Component {
  state = {
    medicines: [],
    uid: "",
    uname:"",
    ustrength:"",
    umprice:"",
    urprice:"",
    udescription:"",
    umanufaturer:""

  };

  getMedicine = () => {
    axios.get("http://localhost:8000/medicine/show").then((res) => {
      console.log(res);
      this.setState({ medicines: res.data });
    });
  };
  onDeleteClick(id) {
    axios
      .delete(`http://localhost:8000/medicine/delete/${id}`)
      .then((res) => {
        this.props.history.push("/delivery");
      })
      .catch((err) => {
        console.log("Error ");
        
      });
  }
  componentDidMount = () => {
    this.onDeleteClick();
    this.getMedicine();
  };
  handleUpdate = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleModalUpdate = (e) => {
    axios
      .put(`http://localhost:8000/medicine/update/${this.state.uid}`, {
        name: this.state.uname,
        Strength: this.state.ustrength,
        description: this.state.udescription,
        mprice: this.state.umprice,
       rprice: this.state.urprice,
        manufaturer: this.state.umanufaturer,

      })
      .then((res) => {
        console.log(res);
        this.setState({ uname: "", ustrength: "",udescription:"",umanufaturer:"",umprice:"",urprice:"" });
        window.location = "/show";
      });
  };
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/medicine/find").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingMedicine, searchKey);
      }
    });
  };

  filterData( medicine, searchKey) {
    const result = medicine.filter((medicine) =>medicine.name.includes(searchKey));

    this.setState({ medicine: result });
  }
  render() {
    return (
      <div>
       

        <div className="AddMedicines">
          <div className="container">
            <br />
            <br />
            <div className="border border-secondary">
            <div className="row">
                <div className="col-md-8 m-auto"></div>
                <div className="col-md-2 m-auto">
                  <br />
                  <Link to="/addmed" className="btn btn-outline-warning">
                   ADD Medicines
                  </Link>
                </div>
              </div>
              <div className="col-md-10 m-auto">
                <h1 className="display-3 text-center">
                  <b> All Medicines</b>
                </h1>
                <br />
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
          <br></br>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Medicine ID </th>
                      <th scope="col">Medicine Name</th>
                      <th scope="col">Strength</th>
                      <th scope="col">description</th>
                      <th scope="col">Manufacturer</th>
                      <th scope="col">Manufacture Price</th>
                      <th scope="col">Retail Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.medicines.map((medicines) => (
                      <tr key={medicines._id}>
                        <th>{medicines.id}</th>
                        <td>{medicines.name}</td>
                        <td>{medicines.strength}</td>
                        <td>{medicines.description}</td>
                        <td>{medicines.manufacturer}</td>
                        <td>{medicines.m_price}</td>
                        <td>{medicines.r_price}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-warning"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={() => {
                              this.setState({
                                uid: medicines._id,
                                uname: medicines.name,
                                ustrength: medicines.strength,
                                udescription:medicines.description,
                                umanufaturer:medicines.manufacturer,
                                umprice:medicines.m_price,
                                urprice:medicines.r_price

                              });
                            }}
                          >
                            UPDATE
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={this.onDeleteClick.bind(
                              this,
                              medicines._id
                            )}
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <div class="modal fade bd-example-modal-lg" id="myModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                
              </div>
              <div class="modal-body">
                <input
                  onChange={(e) => this.handleUpdate(e)}
                  value={this.state.uname}
                  name="uname"
                  class="form-control"
                  style={{
                    marginBottom: "10px",
                    fontFamily: "cursive",
                    fontSize: "15px",
                  }}
                  placeholder="Name"
                />
                <input
                  onChange={(e) => this.handleUpdate(e)}
                  value={this.state.ustrength}
                  name="ustrength"
                  class="form-control"
                  style={{
                    marginBottom: "10px",
                    fontFamily: "cursive",
                    fontSize: "15px",
                  }}
                  placeholder="Strength"
                />
                <input
                  onChange={(e) => this.handleUpdate(e)}
                  value={this.state.udescription}
                  name="udescription"
                  class="form-control"
                  style={{
                    marginBottom: "10px",
                    fontFamily: "cursive",
                    fontSize: "15px",
                  }}
                  placeholder="Description"
                />
                <input
                  onChange={(e) => this.handleUpdate(e)}
                  value={this.state.umanufaturer}
                  name="umanufaturer"
                  class="form-control"
                  style={{
                    marginBottom: "10px",
                    fontFamily: "cursive",
                    fontSize: "15px",
                  }}
                  placeholder="Manufacturer"
                />
                <input
                  onChange={(e) => this.handleUpdate(e)}
                  value={this.state.umprice}
                  name="umprice"
                  class="form-control"
                  style={{
                    marginBottom: "10px",
                    fontFamily: "cursive",
                    fontSize: "15px",
                  }}
                  placeholder="Manufacturer Price"
                />
                 <input
                  onChange={(e) => this.handleUpdate(e)}
                  value={this.state.urprice}
                  name="urprice"
                  class="form-control"
                  style={{
                    marginBottom: "10px",
                    fontFamily: "cursive",
                    fontSize: "15px",
                  }}
                  placeholder="Reatil Price"
                />
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-warning"
                  onClick={(e) => this.handleModalUpdate(e)}
                >
                  Update
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => {
                    this.setState({ uname: "", ustrength: "",udescription:"",umanufaturer:"",umprice:"",urprice:"" });
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MedicinesAdmin;
