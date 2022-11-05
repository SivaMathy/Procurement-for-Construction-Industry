import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { adddata, updatedata, deldata } from "./context/ContextProvider";
import jsPDF from "jspdf";
import "jspdf-autotable";

function P_ViewAllAppointments() {
  const { udata } = useContext(adddata);
  const { updata } = useContext(updatedata);

  const { dltdata } = useContext(deldata);
  const [getSitedata, setSitedata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(getSitedata);

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
    setSitedata(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setSitedata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deletesite = async (id) => {
    const res2 = await fetch(`http://localhost:8000/deletesite/${id}`, {
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
      console.log("site deleted");

      getdata();
    }
  };
  const pdfGenerate = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    const columns = [
      { title: "Site Name", field: "name" },
      { title: "Site Manager", field: "mname" },
      { title: "Address", field: "address" },
      { title: "Contact Number", field: "num" },
      { title: "Start Date", field: "sdate" },
      { title: "End Date", field: "edate" },
    ];

    doc.text(70, 10, "sites' Details");
    doc.autoTable({
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: getSitedata,
    });
    doc.save("Sites_Details.pdf");
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
            All Construction Site Details
          </p>

          <div class="flex space-x-64">
            <div className="mb-1 space-x-2">
              <button
                className="btn btn-primary "
                style={{ marginRight: "50px" }}
              >
                <i className="fas fa-plus"></i>&nbsp;&nbsp;
                <a className="text-decoration-none text-white " href="/form">
                  ADD
                </a>
              </button>
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
                <th scope="col">Site Name</th>
                <th scope="col">Manager Name</th>
                <th scope="col">Address</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                {/* <th scope="col" className="text-center">
                  Assign Report Date
                </th> */}
                <th scope="col">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {getSitedata
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
                        <td>{element.mname}</td>
                        <td>{element.address}</td>
                        <td>{element.num}</td>
                        <td>{GetDateOnly(element.sdate)}</td>
                        <td>{GetDateOnly(element.edate)}</td>

                        {/* <td className="d-flex ml-3">
                          <NavLink to={`editdate/${element._id}`}>
                            <button className="btn btn-primary">
                              <CalendarTodayIcon />
                            </button>
                          </NavLink>
                        </td> */}
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deletesite(element._id)}
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
