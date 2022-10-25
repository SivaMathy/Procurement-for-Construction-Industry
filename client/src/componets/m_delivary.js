import React, { Component } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar";

class Map extends Component {
  state = {
    fname: "",
    lname: "",
    phonenum: "",
    email: "",
    city: "",
    province: "",
    district: "",
    address: "",
    amount:"",
  };

  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    if (this.state.name !== "" && this.state.id !== "") {
      axios
        .post("http://localhost:8000/delivary/add", this.state)
        .then((res) => {
          console.log("successfully posted");
          this.setState({
            fname: "",
            lname: "",
            phonenum: "",
            email: "",
            city: "",
            province: "",
            district: "",
            address: "",
          });
        });
      window.location = "/phar";
    }
  };
  

  render() {
    
   
    
    return (
      <div>

      
      <div className="container">
       
        <br></br>
        <div className="contanier ">
          <div className="col-md-8 m-auto">
            <br />
            <h3 className="display-4 text-center" style={{ color: "black" }}>
              <b> Delivery Details</b>
            </h3>
          </div>
          <div className="container text-left" style={{ padding: "50px" }}>
            <div>
              <form
                onSubmit={() => this.handleSubmit()}
                className="was-validated"
              >
                <div className="form-group">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.fname}
                    id="fname"
                    pattern="[a-zA-Z]{8,}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.lname}
                    pattern="[a-zA-Z]{8,}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="text"
                    name="phonenum"
                    className="form-control"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.phonenum}
                   
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">E-Mail Address</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.city}
                    pattern="[a-z]{4,}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">District</label>
                  <input
                    type="text"
                    name="district"
                    className="form-control"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.district}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Province</label>
                  <input
                    type="text"
                    name="province"
                    className="form-control"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.province}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.address}
                    required
                  />
                </div>
                <br></br><br/>
                <center>
                  <button
                    class="btn btn-success"
                    type="submit"
                    variant="contained"
                    
                  >
                   Next       <i class="far fa-hand-point-right"></i>
                  </button>
                </center>
                
                <br></br>
                <br></br>
              </form>
            </div>
          </div>
        </div>
        <br></br>
      </div>
      </div>
      
    );
  }
}
export default Map;
