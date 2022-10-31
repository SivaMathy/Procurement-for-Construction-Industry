import React, { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink, useParams } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import WcIcon from "@mui/icons-material/Wc";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { updatedata, deldata } from "./context/ContextProvider";
function P_Details() {
  const { updata } = useContext(updatedata);

  const { dltdata } = useContext(deldata);
  const [getpatientdata, setPatientdata] = useState([]);
  console.log(getpatientdata);
  //const { id } = useParams("");
  function GetDateOnly(date) {
    if (!date) {
      return "-";
    }
    let newDate = date.split("T");
    return newDate[0];
  }
  const getdata = async () => {
    const res = await fetch(`http://localhost:8000/admin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

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
      console.log("user deleted");

      getdata();
    }
  };

  return (
    <>
      {updata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show mt-3"
            role="alert"
          >
            <strong>updated succesfully!</strong>
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
            class="alert alert-danger alert-dismissible fade show mt-3"
            role="alert"
          >
            <strong>Cancelled succesfully!</strong>
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
      <div className="container mt-3 text-left">
        <h1 style={{ fontWeight: 400 }}></h1>
        {getpatientdata.map((element) => {
          return (
            <>
              <div class="cards">
                <Card
                  sx={{ maxWidth: 1500 }}
                  className="mt-5 ml-8 border-primary  "
                >
                  <CardContent>
                    <div class="grid justify-items-end ...">
                      <div className="add_btn ">
                        <NavLink to={`/edit/${element._id}`}>
                          <button className="btn btn-primary mx-2">
                            <CreateIcon />
                          </button>
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          onClick={() => deletepatient(element._id)}
                        >
                          <DeleteOutlineIcon />
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="left_view col-lg-6 col-md-6 col-12">
                        <div class="flex space-x-4 mt-1 ">
                          {" "}
                          <img
                            src="/static/media/logo.904da08d3398460b35f7.webp"
                            style={{ width: 80 }}
                            alt="profile"
                            className="-mt-8"
                          />
                          <p className="text-center font-bold text-2xl text-blue-600">
                            Zone Hospital
                          </p>
                        </div>

                        <p className="mt-3 font-bold text-lg">
                          <CreateIcon />
                          Full Name: <span>{element.name}</span>
                        </p>
                        <p className="mt-3 font-bold text-lg">
                          <PersonIcon />
                          Age: <span>{element.age}</span>
                        </p>
                        <p className="mt-3 font-bold text-lg">
                          <HomeIcon />
                          Address: <span>{element.address}</span>
                        </p>
                      </div>

                      <div className="right_view  col-lg-6 col-md-6 col-12  mt-5 ">
                        <p className="mt-3 font-bold text-lg -mt-3">
                          <SummarizeIcon />
                          Report Date: <span>{element.rdate}</span>
                        </p>
                        <p className="mt-3 font-bold text-lg">
                          <CalendarTodayIcon />
                          Date: <span>{GetDateOnly(element.date)}</span>
                        </p>
                        <p className="mt-3 font-bold text-lg">
                          <WcIcon />
                          Gender: <span>{element.gender}</span>
                        </p>
                        <p className="mt-3 font-bold text-lg">
                          <PhoneEnabledIcon />
                          Phone Number: <span>{element.mobile}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default P_Details;
// test
