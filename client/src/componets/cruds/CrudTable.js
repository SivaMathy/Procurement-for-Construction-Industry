import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudTable() {
	const [cruds, setCruds] = useState([]);
	const [search, setsearch] = useState("");

	const updatesearch = (e) => {
		
		setsearch(e.target.value)
	}
	

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



    //    handleSearchArea = (e) => {
    // const searchKey = e.currentTarget.value;

    // axios.get("api/cruds").then((res) => {
    //   if (res.data.success) {
    //     this.filterData(res.data.existingPrograms, searchKey);
    //   }
    // });
	// };
	
	

//     axios.get("localhost:8080/cruds").then(res=>{
//         if(res.data.success){
//             filterData(res.data.existingOffers,searchKey)
//         }
//     });
// }
     

	return (
		<div className="container">
			<div>
				<h2>
				Appointment Details
					<p>
						
					</p>
				</h2>
				<hr />
			</div>
				<div className="input-group rounded">
					<div className="mb-3 col-4 mx-auto text-center">
						
						<input
						type="text"
					onChange={updatesearch}
                     style={{ marginLeft: "220px" ,}}
						className="form-control mr-sm-2"
						placeholder="Search" 
						/>
					</div>
				</div>




                        <div className="table-responsive">
			<table  className="table riped  table-hover table-bordered container">
				<thead>
					<tr>
							<th>Doctor Name</th>
							<th>Patient Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th> Date</th>
							<th>Time</th>
						<th>View</th>
						<th>Edit</th>
						<th>Cancel</th>
					</tr>
				</thead>
				<tbody>
					{cruds &&
							cruds.filter((crud) => {
								if (search === "") return crud;
								else if (crud.companyName.includes(search)) return crud;
							}).map((crud, index) => {
							return (
							
								<tr key={index}>
									<td>
										<Link to={`crud.companyName/cruds/${crud._id}`} className="link-line">
											{crud.companyName}
										</Link>
									</td>
									<td>{crud.description}</td>
									<td>{crud.phone}</td>
									<td>{crud.email}</td>
									<td>{ crud.link}</td>
									<td>{crud.location}</td>
								
									<td>
										<Link to={`/cruds/${crud._id}`} className="btn btn-warning">
											View
										</Link>
									</td>
									<td>
										<Link
											to={`/cruds/${crud._id}/edit`}
											className="btn btn-success"
										>
											Edit
										</Link>
									</td>
									<td>
										<Link
											to={`/cruds/${crud._id}/delete`}
											className="btn btn-danger"
										>
											Cancel
										</Link>
									</td>
									</tr>
							
									);
									
						})}
				
								</tbody>
			</table>
			</div>
			
		</div>
	);
}

export default CrudTable;
