import React from "react";
import IMAGE from "./IMAGE.png";
import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <>
      <header>
        <div className="main-container">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="subdivision col-md-3">
              <img className="college-logo" src={IMAGE} alt="College logo" />
            </div>
            <div className="subdivision-1 col-md-6">
              <h1 className="college-name">
                Government Polytechnic Hyderabad, Masabtank
              </h1>
              <span>
                (Approved by AICTE New Delhi and Affiliated to SBTET Telangana
                State)
              </span>{" "}
              <br />
              <p>(Accredited by NBA)</p>
            </div>
            <div className="subdivision-2 col-md-2">
              <i className="fa fa-phone"></i>
              <span> +91-020-25559200 (Principal)</span> <br />
              <i className="fa fa-envelope"></i>
              <span> principal@gptmasb.ac.in</span>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "hsl(205, 85%, 25%)", color: "white" }}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/Branches"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Branches
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/AutomobilePage">
                        Automobile Engineering
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/CivilPage">
                        Civil Engineering
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ComputerPage">
                        Computer Engineering
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ElectricalPage">
                        Electrical and Electronics Engineering
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/ElectronicsAndCommunicationPage"
                      >
                        Electronics and Communication Engineering
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/MechanicalPage">
                        Mechanical Engineering
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/PharmacyPage">
                        Pharmaceutical Engineering
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Placementspage"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Training and Placement Cell
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/ViewAttendance"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    View Attendance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Facultypage"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Faculties
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/FacultyLogin"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Faculty Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/AdminLogin"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Admin Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Contactus"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Contact Us 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
