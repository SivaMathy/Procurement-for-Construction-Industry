import React, { Component } from "react";

export default class n_EditPatient extends Component {
  render() {
    return (
      <div className="col-md-6 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit User</h1>
        <form class="text-left">
          <div class="form-group">
            <label for="patient name">Patient Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              class="form-control"
              placeholder="Enter Name"
              value={this.state.userName}
              onChange={this.handleInputChange}
            ></input>
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
            ></input>
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
              ></input>
            </div>
            <div class="form-group col-md-6 mb-3">
              <label for="phone">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                class="form-control"
                placeholder="Enter DoB"
                value={this.state.dob}
                onChange={this.handleInputChange}
              ></input>
            </div>
          </div>
          <div class="form-group">
            <label for="phone">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              placeholder="Enter DoB"
              value={this.state.password}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            ></input>
            <label class="form-check-label" for="exampleCheck1">
              Accept term & conditions
            </label>
          </div>
          <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
