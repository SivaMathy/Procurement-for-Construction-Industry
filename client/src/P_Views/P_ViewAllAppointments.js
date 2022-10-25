import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { adddata, updatedata, deldata } from "./context/ContextProvider";
import jsPDF from "jspdf";
import "jspdf-autotable";

function P_ViewAllAppointments() {
  const { udata} = useContext(adddata);
  const { updata } = useContext(updatedata);

  const { dltdata } = useContext(deldata);
  const [getpatientdata, setPatientdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(getpatientdata);

  function GetDateOnly(date) {
    if (!date) {
      return "-";
    }
    let newDate = date.split("T");
    return newDate[0];
  }
  const getdata = async () => {
    const res = await fetch("http://localhost:8000/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setPatientdata(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setPatientdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deletepatient = async (id) => {
    const res2 = await fetch(`http://localhost:8000/deletepatient/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("Patient deleted");

      getdata();
    }
  };
  const pdfGenerate = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    const columns = [
      { title: "Full Name", field: "name" },
      { title: "Age", field: "age" },
      { title: "Address", field: "address" },
      { title: "MobileNumber", field: "mobile" },
      { title: "Date", field: "date" },
      { title: "Report Date", field: "rdate" },
    ];
   

    doc.text(70, 10, "Patients' Lab Test Details");
    doc.autoTable({
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: getpatientdata,
    });
    doc.save("LabTest_Details.pdf");
  };

  return (
    <>
      {udata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{udata.name}</strong> added succesfully!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}
      {updata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Assigned Report date for <strong>{updata.name}</strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      {dltdata ? (
        <>
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>{dltdata.name}</strong> deleted succesfully!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="mt-5">
        <div className="container">
          <p className="text-center font-bold text-5xl text-blue-800 hover:text-blue-700 text-opacity-100 hover:underline -mt-6">
            All Laboratory Testing Appointments
          </p>
          <div class="flex space-x-64">
            <div className="mb-1">
              <button
                className="btn btn-primary text-left"
                style={{ marginRight: "210px" }}
                onClick={() => pdfGenerate()}
              >
                {" "}
                <i className="fas fa-print"></i>&nbsp;&nbsp;
                <a className="text-decoration-none text-white " href="/">
                  Export
                </a>
              </button>
            </div>
            <div className="float-right w-64 mb-3 ">
              {" "}
              <input
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
          </div>

          <table id="example" class="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">#ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Age</th>
                <th scope="col">Address</th>
                <th scope="col">MobileNumber</th>
                <th scope="col">Date</th>
                <th scope="col">Report Date</th>
                <th scope="col" className="text-center">
                  Assign Report Date
                </th>
                <th scope="col">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {getpatientdata
                .filter((element) => {
                  if (searchTerm == "") {
                    return element;
                  } else if (
                    element.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return element;
                  }
                })
                .map((element, id) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{id + 1}</th>
                        <td>{element.name}</td>
                        <td>{element.age}</td>
                        <td>{element.address}</td>
                        <td>{element.mobile}</td>
                        <td>{GetDateOnly(element.date)}</td>
                        <td>{GetDateOnly(element.rdate)}</td>

                        <td className="d-flex ml-3">
                          <NavLink to={`editdate/${element._id}`}>
                            <button className="btn btn-primary">
                              <CalendarTodayIcon />
                            </button>
                          </NavLink>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deletepatient(element._id)}
                          >
                            <DeleteOutlineIcon />
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default P_ViewAllAppointments;
