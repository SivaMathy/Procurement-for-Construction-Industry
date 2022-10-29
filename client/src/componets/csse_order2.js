import React, { Component } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

class Order extends Component {
  state = {
    order_id: "",
    company_name: "",
    company_id: "",
    supplier_name: "",
    supplier_id: "",
    item: "",
    quantity: "",
    agreed_price: "",
    delivery_address: "",
    delivery_date: "",
    site_name: "",
    auditor_status: "Pendding",
    supplier_status: "Pendding",
  };

  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    if (this.state.name !== "" && this.state.id !== "") {
      axios.post("http://localhost:8000/order/add", this.state).then((res) => {
        console.log("successfully posted");
        this.setState({
          order_id: "",
          company_name: "",
          company_id: "",
          supplier_name: "",
          description:"",
          item: "",
          quantity: "",
          agreed_price: "",
          delivery_address: "",
          delivery_date: "",
          site_name: "",
          auditor_status: "Pendding",
          supplier_status: "Pendding",
        });
      });
      window.location = "/";
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
                <b> Purchase Details</b>
              </h3>
            </div>
            <div className="container text-left" style={{ padding: "50px" }}>
              <div>
                <form
                  onSubmit={() => this.handleSubmit()}
                  className="was-validated"
                >
                    <div className="form-group">
                    <label htmlFor="">Order ID</label>
                    <input
                      type="text"
                      name="order_id"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.order_id}
                      id="order_id"
                      pattern="[a-zA-Z]{8,}"
                      required
                    />
                    </div>
                  <div className="form-group">
                    <label htmlFor="">Company ID</label>
                    <input
                      type="text"
                      name="company_id"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.company_id}
                      id="company_id"
                      pattern="[a-zA-Z]{8,}"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Company Name</label>
                    <input
                      type="text"
                      name="company_name"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.company_name}
                      id="company_name"
                      pattern="[a-zA-Z]{8,}"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Site Name</label>
                    <input
                      type="text"
                      name="site_name"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.site_name}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Company ID</label>
                    <input
                      type="text"
                      name="company_id"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.company_id}
                      id="fname"
                      pattern="[a-zA-Z]{8,}"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Supplier Name</label>
                    <input
                      type="text"
                      name="supplier_name"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.supplier_name}
                      id="fname"
                      pattern="[a-zA-Z]{8,}"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Item </label>
                    <input
                      type="text"
                      name="item"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.item}
                      pattern="[a-zA-Z]{8,}"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.quantity}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.description}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Agreed Item Price </label>
                    <input
                      type="text"
                      name="agreed_price"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.agreed_price}
                      pattern="[a-z]{4,}"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="">Delivery Address</label>
                    <input
                      type="text"
                      name="delivery_address"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.delivery_address}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Delivery Date</label>
                    <input
                      type="text"
                      name="delivery_date"
                      className="form-control"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.delivery_date}
                      required
                    />
                  </div>
                  
                  
                  <br></br>
                  <br />
                  <center>
                    <button
                      class="btn btn-success"
                      type="submit"
                      variant="contained"
                    >
                      Next <i class="far fa-hand-point-right"></i>
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
export default Order;
