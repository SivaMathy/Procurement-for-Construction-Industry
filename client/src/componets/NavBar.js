import React from "react";
import logo from "../assets/logo4.png";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
          class="card-img-top ml-3"
          src={logo}
          style={{ height: "100px", width: "100px" }}
        />
        <span className=" text-uppercase text-primary">
          <h2 className="navbar mt-3">&nbsp;&nbsp;Silva&Sons</h2>
        </span>

        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container">
              <ul className="navbar-nav me-auto mb-6 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/home">
                    Home
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/thhome">
                    Book Appointment
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/labdash"
                  >
                    Book Lab Test
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/view">
                    View Lab Appointments
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/phar">
                    Buy Medicines
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/patientsProgram"
                  >
                    Health Programs
                  </a>
                </li>
              </ul>
            </div>
            <form className="d-flex" style={{ marginLeft: "260px" }}>
              <button className="btn btn-info tab" type="submit">
                <a className="text-decoration-none text-dark " href="/login">
                  Login
                </a>
                <i className="bi bi-box-arrow-in-right"></i>
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-outline-info " type="submit">
                <a className="text-decoration-none text-white" href="/register">
                  Registration
                </a>
                <i className="bi bi-save2"></i>
              </button>
              &nbsp;&nbsp;
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
