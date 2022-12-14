import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class SupplierOrderDetails extends Component {
  state = {
    delivery: [],
    uauditor: "",
    ucomments: "",
    uid: "",
    ucomments_supplier:"",
    usupplier_status:""
  };
  getDelivery = () => {
    axios.get("http://localhost:8000/order/show").then((res) => {
      console.log(res);
      this.setState({ delivery: res.data });
    });
  };
  onDeleteClick(id) {
    axios
      .delete(`http://localhost:8000/order/delete/${id}`)
      .then((res) => {
        this.props.history.push("/supplier");
      })
      .catch((err) => {
        console.log("Error ");
      });
  }
  componentDidMount = () => {
    this.onDeleteClick();
    this.getDelivery();
  };
  handleUpdate = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleModalUpdate = (e) => {
    console.log("mathy");
    axios
      .put(`http://localhost:8000/order/update/${this.state.uid}`, {
        comments: this.state.ucomments,
        auditor_status: this.state.uauditor,
        comments_supplier: this.state.ucomments_supplier,
        supplier_status: this.state.usupplier_status,
      })
      .then((res) => {
        console.log(res);
        this.setState({usupplier_status:"",ucomments_supplier:""});
        window.location = "/supplier";
      });
  };
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value

    axios.get("http://localhost:8000/delivary/find").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingDelivary, searchKey);
      }
    });
  };

  filterData(delivery, searchKey) {
    const result = delivery.filter((delivery) =>
      delivery.fname.includes(searchKey)
    );

    this.setState({ delivery: result });
  }
 
  render() {
    return (
      <div className="container">
        <div className="">
          <div className="col-md-12 m-auto">
            <h1 className="display-12 text-center">
              <b> Supplier Page</b>
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
                  <th scope="col">Order ID </th>

                  <th scope="col">Company Name</th>
                  <th scope="col">Site Name</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Description</th>
                  <th scope="col">Agreed Item Price</th>
                  <th scope="col">Delivery Address</th>
                  <th scope="col">Delivery Date</th>

                  <th scope="col">Supplier Status</th>
                  <th scope="col">Comments</th>
                </tr>
              </thead>
              <tbody>
                {this.state.delivery.map((delivery) => (
                  delivery.auditor_status==="Accepted"?
                  <tr key={delivery._id}>
                    <th>{delivery._id}</th>
                    <td>{delivery.company_name}</td>
                    <td>{delivery.site_name}</td>
                    <td>{delivery.supplier_name}</td>
                    <td>{delivery.item}</td>
                    <td>{delivery.quantity}</td>
                    <td>{delivery.description}</td>
                    <td>{delivery.agreed_price}</td>
                    <td>{delivery.delivery_address}</td>
                    <td>{delivery.delivery_date}</td>
                    <td>{delivery.supplier_status}</td>
                    <td>{delivery.comments_supplier}</td>
                    
                    <td></td>

                    <td>
                      <button
                        type="button"
                        class="btn btn-warning"
                        data-toggle="modal"
                        data-target="#myModal"
                        onClick={() => {
                          this.setState({
                            uid: delivery._id,
                            ucomments_supplier:delivery.comments_supplier,
                            usupplier_status:delivery.supplier_status
                          });
                        }}
                      >
                        
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                    <td>
                    <button
                        type="button"
                        class="btn btn-danger"
                        onClick={this.onDeleteClick.bind(this, delivery._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  :
                  <td></td>
                  
               ))}
              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm"></div>
            <div class="col-sm" style={{ paddingLeft: "600px" }}>
             
              <br /> <br />
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
                <select
                  onChange={(e) => this.handleUpdate(e)}
                  value={this.state.usupplier_status}
                  name="usupplier_status"
                  class="form-control"
                >
                  <option>Accepted</option>
                  <option>Rejected</option>
                  <option>Pendding</option>
                </select>
              </div>
              <div class="modal-body">
                <input
                  onChange={(e) => this.handleUpdate(e)}
                  value={this.state.ucomments_supplier}
                  name="ucomments_supplier"
                  class="form-control"
                  style={{
                    marginBottom: "10px",
                    fontFamily: "cursive",
                    fontSize: "15px",
                  }}
                  placeholder="Comments"
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
                    this.setState({ucomments_supplier: "",usupplier_status: "" });
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

export default SupplierOrderDetails;
