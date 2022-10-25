import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";




function AddnewDoctor(props) {
	const initialState = {
		companyName: "",
		phone: "",
		email: "",
		location: "",
		link: " ",
		description: "",
	};
	const [crud, setCrud] = useState(initialState);
	//const [selects, setSelects] = useState();


	//const Time = ["1.00", "2.00"];
	

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		//if (!crud.companyName || !crud.email) return;
		async function postCrud() {
			try {
				const response = await post("/api/cruds/", crud);
				navigate(`/cruds/tab`);
				// navigate(`/cruds/${response.data._id}`);
			} catch (error) {
				console.log("error", error);
			}
		}
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/cruds");
	}

	return (
		<div className="container text-left" style={{ maxWidth: "400px" }}>
			<h1> Doctor Details </h1>
			<hr />
			<form onSubmit={handleSubmit} >
				<div className="form-group">
					<label>Doctor Name</label>
					<input
						name="companyName"
						type="text"
						required
						value={crud.companyName}
						onChange={handleChange}
						className="form-control"
					/>
					<div className="form-group">
					<label>Experience</label>
					<input
						name="description"
						row="10"
						value={crud.description}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						name="phone"
						type="tel"
						pattern="(094)-[0-9]{}"
						required
						value={crud.phone}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: 094-XXXXXXXXX</small>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={crud.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Speciality</label>
					<input
						name="location"
						type="text"
						required
						value={crud.location}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Date</label>
					<input
						name="link"
						type="text"
						required
						value={crud.link}
						onChange={handleChange}
						className="form-control"/>
					
	
					
				</div>

				
                      <br/><br/>
				<div className="btn-group">
					
					<input type="submit" value="Submit" className="btn btn-primary" />
					&nbsp;&nbsp;&nbsp;
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddnewDoctor;
