import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import jsPdf from "jspdf";
import axios from "axios";



class DeliveryDetails extends Component {
  state = {
    delivery: [],
    ucheck:"",
    uid:"",

  };
  getDelivery = () => {
    axios.get("http://localhost:8000/delivary/show").then((res) => {
      console.log(res);
      this.setState({ delivery: res.data });
    });
  };
  onDeleteClick(id) {
    axios
      .delete(`http://localhost:8000/delivary/delete/${id}`)
      .then((res) => {
        this.props.history.push("/delivery");
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
      .put(`http://localhost:8000/delivary/update/${this.state.uid}`, {
        isCheck: this.state.ucheck,
        

      })
      .then((res) => {
        console.log(res);
        this.setState({ ucheck: ""
       });
        window.location = "/delivery";
      });
  };
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/delivary/find").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingDelivary, searchKey);
      }
    });
  };

  filterData( delivery, searchKey) {
    const result = delivery.filter((delivery) =>delivery.fname.includes(searchKey));

    this.setState({ delivery: result });
  }
  //pdf generation
 
  jsPdfGenerator=(delivery)=>{
    var doc=new jsPdf('p','pt');
    
    const columns=[
      {title:"First Name",field:"fname"},
      {title:"Last Name",field:"lname"},
      {title:"Email",field:"email"},
      {title:"Phone Number",field:"phonenum"},
      {title:"City",field:"city"},
      {title:"District",field:"district"},
    ];
   
   // const tableRows=[delivery];
    doc.text(20,20, 'Delivery Details Report');
    doc.addFont('helvetica', 'normal');

    doc.autoTable({
      columns:columns.map((col)=>({...col,dataKey:col.field})),
      body:this.state.delivery,
    })
    doc.save("DeliveryDetails.pdf");
    
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
                <div className="col-md-16 m-auto">
                  <br />
                
                </div>
              </div>
              <div className="col-md-10 m-auto">
                <h1 className="display-3 text-center">
                  <b> Delivery Details</b>
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
                    <th scope="col">First Name </th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Phone Number</th>
                      
                      <th scope="col">City</th>
                      <th scope="col">District</th>
                      <th scope="col">Province</th>
                      <th scope="col">Address</th>
                      <th scope="col">isCheck</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.delivery.map((delivery) => (
                      <tr key={delivery._id}>
                        <th>{delivery.fname}</th>
                        <td>{delivery.lname}</td>
                        <td>{delivery.phonenum}</td>
                        
                        <td>{delivery.city}</td>
                        <td>{delivery.province}</td>
                        <td>{delivery.district}</td>
                        <td>{delivery.address}</td>
                        <td>{delivery.isCheck}</td>
                        <td>
          
                        </td>
                        <td>
                        <button
                            type="button"
                            class="btn btn-warning"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={() => {
                              this.setState({
                                uid: delivery._id,
                                ucheck:delivery.isCheck

                              });
                            }}
                          >
                            UPDATE
                          </button>
                          
                        </td>
                        <td><button
                            type="button"
                            class="btn btn-danger"
                            onClick={this.onDeleteClick.bind(
                              this, delivery._id
                             
                            )}
                          >
                          DELETE
                          </button></td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div class="row">
              <div class="col-sm">

              </div>
              <div class="col-sm">
                
              </div>
              <div class="col-sm" style={{paddingLeft:"600px"}}>
              <button
                            type="button"
                            class="btn btn-info"
                            onClick={this.jsPdfGenerator}
                          >
                            <i class="bi bi-printer-fill"> PRINT</i>
                        
                          </button>
                          <br/> <br/> 
                         
              </div>
             
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
                  value={this.state.ucheck}
                  name="ucheck"
                  class="form-control"
                  style={{
                    marginBottom: "10px",
                    fontFamily: "cursive",
                    fontSize: "15px",
                  }}
                  placeholder="Check"
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
                    this.setState({ ucheck: "" });
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

export default DeliveryDetails;
