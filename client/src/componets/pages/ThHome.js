import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import pic1 from "../../assets/pic1.jpg"
import card from "../../assets/card.jpg"
import pic60 from "../../assets/pic60.jpg"
import pic5 from "../../assets/pic5.jpg"
import pic4 from "../../assets/pic4.jpg"
import pic3 from "../../assets/pic3.jpg"

function ThHome() {
	const [ setCruds] = useState([]);

	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get("/api/cruds");
				setCruds(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);

	return (
    <div className="container">
      <br/><br/>
      <h2>
        <center>
           Speciality
        </center>
				{/* <p>
					<Link to="/cruds/new" className="btn btn-primary float-right">
						Create CRUD
					</Link>
				</p> */}
			</h2>
			<hr />
			
			<div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card h-100">
            <img src={ pic1} class="card-img-top" alt="..."/> 
      <div class="card-body">
        <h3 >
        Dental</h3>
     
     <div class="card-footer d-flex align-items-center">
										<Link to="/cruds/new" className="btn btn-secondary">
										BOOK
                </Link>
                </div>
            </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
            <img src={ card} class="card-img-top" alt="..."/> 
      <div class="card-body">
        <h3 >Cardiology</h3>
        <div class="card-footer d-flex align-items-center">
										<Link to="/cruds/new" className="btn btn-secondary">
										BOOK
                </Link>
                </div>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
       <img src={pic3} class="card-img-top" alt="..."/> 
      <div class="card-body">
        <h3>Neurology</h3>
          <div class="card-footer d-flex align-items-center">
										<Link to="/cruds/new" className="btn btn-secondary">
										BOOK
                </Link>
                </div>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
       <img src={pic4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 >Dermatology</h3>
       <Link to="/cruds/new" className="btn btn-secondary">
										BOOK
                </Link>
      </div>
    </div>
        </div>
        
        <div class="col mb-4">
    <div class="card h-100">
       <img src={pic5} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 >Orthopedic</h3>
     
       
     <div class="card-footer d-flex align-items-center">
										<Link to="/cruds/new" className="btn btn-secondary">
										BOOk
                </Link>
                </div>
            </div>
    </div>
        </div>
        
        <div class="col mb-4">
    <div class="card h-100">
       <img src={pic60} class="card-img-top" alt="..."/> 
      <div class="card-body">
        <h3>General Physician</h3>
     
         
     <div class="card-footer d-flex align-items-center">
											<Link to="/cruds/new" className="btn btn-secondary">
										BOOk
                </Link>
                </div>
            </div>
    </div>
  </div>
</div>
							
						
				
			
		</div>
	);
}

export default ThHome;
