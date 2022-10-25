import React, { useState, useEffect, useContext } from "react";
import { EditOutlined } from "@ant-design/icons";
import { LeftCircleOutlined } from "@ant-design/icons";
import { CalendarOutlined } from "@ant-design/icons";
import { Input} from "antd";
import { Link, useParams, useNavigate } from "react-router-dom";
import { updatedata } from "./context/ContextProvider";
function P_UserEdit() {
  const {  setUPdata } = useContext(updatedata);

  const history = useNavigate();
  const [inpval, setINP] = useState({
    name: "",
    rdate: "",
  });
  function GetDateOnly(date) {
    if (!date) {
      return "-";
    }
    let newDate = date.split("T");
    return newDate[0];
  }
  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`http://localhost:8000/getpatient/${id}`, {
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
      setINP(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updatepatient = async (e) => {
    e.preventDefault();

    const { name, rdate } = inpval;

    const res2 = await fetch(`http://localhost:8000/updatepatient/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        rdate,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      history("/");
      setUPdata(data2);
      // alert("data updated");
    }
  };

  return (
    <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container mt-5 bg-white shadow-xl rounded border-2 border-gray-600 ">
        <p className="text-center font-bold text-5xl text-blue-800 hover:text-blue-700 text-opacity-100 hover:underline ">
          Edit Your Appointment
        </p>
        <div class="btn-group-toggle" data-toggle="buttons">
          <Link to="/">
            <p className="text-left font-bold text-xl text-blue-800 hover:text-blue-700 text-opacity-100 -mt-8 ml-3">
              <LeftCircleOutlined style={{ fontSize: "26px" }} /> Back
            </p>
          </Link>
        </div>
        <form className="mt-4">
          <div className="row">
            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label
                for="exampleInputEmail1"
                class="form-label font-bold text-lg"
              >
                Full Name
              </label>
              <Input
                prefix={<EditOutlined />}
                placeholder="Full Name"
                size="large"
                name="name"
                type="text"
                value={inpval.name}
                onChange={setdata}
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label class="form-label font-bold text-lg">Date</label>
              <Input
                prefix={<CalendarOutlined />}
                size="large"
                name="rdate"
                type="date"
                value={GetDateOnly(inpval.rdate)}
                onChange={setdata}
              />
              <div class="flex justify-end">
                <div class="flex space-x-4 mt-5 ">
                 <a href="/"><button type="button" class="btn btn-outline-danger">
                    Cancel
                  </button>
                  </a> 
                  <button
                    type="button"
                    onClick={updatepatient}
                    class="btn btn-primary"
                  >
                    Assign
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default P_UserEdit;
