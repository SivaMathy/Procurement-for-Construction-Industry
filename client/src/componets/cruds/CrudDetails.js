import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pdf from "react-to-pdf";
import "jspdf-autotable";


function CrudDetails(props) {
	const [crud, setCrud] = useState({});
const ref = React.createRef();
	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`/api/cruds/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`/api/cruds/${_id}`);
			navigate("/cruds");
		} catch (error) {
			console.error(error);
		}
	}

// 	 function jsPdfGenerator () {
		
// 		const doc = new jsPDF({ unit: 'pt' }) // create jsPDF object
//   const pdfElement = document.getElementById('pdf') // HTML element to be converted to PDF

//   doc.html(pdfElement, {
//     callback: (pdf) => {
//       pdf.save('MyPdfFile.pdf')
//     },
//     margin: 32, // optional: page margin
//     // optional: other HTMLOptions
//   })
// 	}

	return (
		<div className="container text-left">
			
			<div ref={ref}>
			<div className="btn-group">
					
			<br/><br/> <br/><br/>
					<button
						type="button"
						
						className="btn btn-secondary"
					>
					------------------Appointment Details -----------------
					</button>
				</div>
				<br/><br/> <br/><br/>
			<form >
				<div className="form-group">
					<label style={{fontSize:15}}>Doctor Name</label>
					<input
						name="companyName"
						type="text"
						required
						value={crud.companyName}
						
						className="form-control"
					/>
					<div className="form-group">
					<label>Experience</label>
					<input
						name="description"
						row="10"
						value={crud.description}
					
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
						
						className="form-control"/>
					
	
					
				</div>

				
                      <br/><br/>
				
			</form>
			
				</div>
			<p>
				<small>
					<b>ID</b>: {crud._id}
				</small>
			</p>

			<div className="btn-group ">
			 <Pdf targetRef={ref} className="btn btn-outline-success my-2 my-sm-0" filename="Genaratereport.pdf">
					{({ toPdf }) =>
						<button  className="btn btn-danger" onClick={toPdf}>Generate Pdf</button>}
				</Pdf>
				

			</div>
			
			<hr />
		</div>
	);
}

export default CrudDetails;
