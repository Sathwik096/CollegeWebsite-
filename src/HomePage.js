import React, { useRef } from "react";
import Notification from "./Notification";
import CollegeImage from "./CollegeImage2.jpg";
import PrincipalImage from "./PrincipalImage.png";
import CollegePhoto from "./CollegePhoto.JPG";
import CollegePhoto2 from "./CollegeImage5.jpg";
import TextContainer from "./textContainer";
import Download from "./download.png";
import Noticeboard from "./noticeboard.png";
import Facility from "./facility.png";
import Tender from "./tender.jpeg";
import Grievance from "./grievance.png";
import NewTag from "./newTag";
import C21CSCurriculum from "./C21_CS.zip";
import MotivationVideo from "./motivation-video.mp4";

export default function HomePage() {
  const videoRef = useRef(null);

  return (
    <div className="home-main-container">
      <>
      <p><Notification notificationText="C-24 New Curriculum is released" /></p>
      </>
      <div className="row">
        <div className="col-md-9">
        <div id="carouselExampleIndicators" className="left-container carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={CollegePhoto}
                className="college-picture d-block w-100"
                alt="collegePhoto"
              />
            </div>
            <div className="carousel-item">
              <img
                src={CollegeImage}
                className="college-picture d-block w-100"
                alt="collegePhoto2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={CollegePhoto2}
                className="college-picture d-block w-100"
                alt="collegePhoto3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
        <div className="col-md-3">
        <div className="principal-container">
          <img src={PrincipalImage} alt="principalPhoto" className="image-container" />{" "}
          <br />
          <b>Principal</b> <br />
          <b>Dr. N. Rajeshwari Devi</b> <br />
          <p style={{ fontFamily: "times new roman" }}>
            Government Polytechnic Hyderabad, Masabtank
          </p>
        </div>
        </div>
      </div>
      <div className="large-text-container">
        <h1
          style={{ color: "hsl(240, 70%, 35%)", fontFamily: "times new roman" }}
        >
          About Us
        </h1>
        <hr style={{ color: "blue" }} />
        <p style={{ textAlign: "justify", fontSize: "18px" }}>
          Government Polytechnic, Masab Tank, Hyderabad formerly Osmania Central
          Technical College is a Govt institution established in the year 1923
          to provide quality technical education. The Institute is located in
          the Mint Compound at Masab Tank Asif Nagar, Mandal, in the state of
          Telangana was renamed as Government Polytechnic in 1954. <br /><br /> The institute
          offers diploma courses in Civil, Automobile, Mechanical,
          Telecommunications, Computers and Pharmacy. Apart from regular
          courses, the institute also has a National Cadet Corps scheme for
          better development of students, enriching their overall personality.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <TextContainer
            title="Downloads"
            ContainerData={
              <>
                  <NewTag />{" "}
                  <a
                    href={C21CSCurriculum}
                    download
                    style={{
                      textDecoration: "none",
                      color: "hsl(240, 70%, 35%)",
                    }}
                  >
                    CS C-21 Curriculum
                  </a><hr />
                  <NewTag />{" "}
                  <a
                    href={C21CSCurriculum}
                    download
                    style={{
                      textDecoration: "none",
                      color: "hsl(240, 70%, 35%)",
                    }}
                  >
                    EC C-21 Curriculum
                  </a><hr />
                  <NewTag />{" "}
                  <a
                    href={C21CSCurriculum}
                    download
                    style={{
                      textDecoration: "none",
                      color: "hsl(240, 70%, 35%)",
                    }}
                  >
                    EE C-21 Curriculum
                  </a><hr />
              </>
            }
            ContainerImage={Download}
            BorderColor="hsl(240, 40%, 80%)"
          />
        </div>
        <div className="col-md-6">
          <TextContainer
            title="Notice Board"
            ContainerData={
              <>
                <NewTag />{" "}
                  <a
                    href={C21CSCurriculum}
                    download
                    style={{
                      textDecoration: "none",
                      color: "hsl(240, 70%, 35%)",
                    }}
                  >
                    2024 TS EPASS
                  </a><hr />
                  <NewTag />{" "}
                  <a
                    href={C21CSCurriculum}
                    download
                    style={{
                      textDecoration: "none",
                      color: "hsl(240, 70%, 35%)",
                    }}
                  >
                    Mid-2 Time Table
                  </a><hr />
              </>
            }
            ContainerImage={Noticeboard}
            BorderColor="hsl(210, 60%, 85%)"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <TextContainer
            title="Facilities"
            ContainerData={
              <>
                  <a
                    href={PrincipalImage}
                    download
                    style={{
                      textDecoration: "none",
                      color: "hsl(240, 70%, 35%)",
                    }}
                  >
                    Libraby
                  </a><hr />
                  <a
                    href={PrincipalImage}
                    download
                    style={{
                      textDecoration: "none",
                      color: "hsl(240, 70%, 35%)",
                    }}
                  >
                    Laboratories
                  </a><hr />
                  <a
                    href={PrincipalImage}
                    download
                    style={{
                      textDecoration: "none",
                      color: "hsl(240, 70%, 35%)",
                    }}
                  >
                    Sports Facility
                  </a><hr />
                  <a
                    href={PrincipalImage}
                    download
                    style={{
                      textDecoration: "none",
                      color: "hsl(240, 70%, 35%)",
                    }}
                  >
                    NCC
                  </a><hr />
              </>
            }
            ContainerImage={Facility}
            BorderColor="hsl(240, 40%, 80%)"
          />
        </div>
        <div className="col-md-4">
          <TextContainer
            title="Tender and Quotations"
            ContainerData={
              <>
                <hr />
              </>
            }
            ContainerImage={Tender}
            BorderColor="hsl(210, 60%, 85%)"
          />
        </div>
        <div className="col-md-4">
          <TextContainer
            title="Grievance and Redressal"
            ContainerData={
              <>
                  <a
                    href={PrincipalImage}
                    download
                    style={{
                      textDecoration: "none",
                      color: "hsl(240, 70%, 35%)",
                    }}
                  >
                    Launch Grievance
                  </a><hr />
                  <a
                    href={PrincipalImage}
                    download
                    style={{
                      textDecoration: "none",
                      color: "hsl(240, 70%, 35%)",
                    }}
                  >
                    View Complaint Status
                  </a><hr />
              </>
            }
            ContainerImage={Grievance}
            BorderColor="hsl(240, 40%, 80%)"
          />
        </div>
      </div>
      <div className="large-text-container">
        <h1 style={{ color: "hsl(240, 70%, 35%)", fontFamily: "times new roman" }}>
          Quick Links
        </h1>
        <hr style={{ color: "blue" }} />
        <div className="links-list">
          <a href="#">AICTE</a> <br />
          <a href="#">NBA</a>
          <br />
          <a href="#">SBTET</a>
          <br />
          <a href="#">MASB</a>
          <br />
          <a href="#">CURRICULUM</a>
        </div>
      </div>
      <div className="last-container-homepage row">
        <div className="vision-mission col-md-7">
            <h1 style={{ color: "hsl(240, 70%, 35%)", fontFamily: "times new roman" }}>Vision</h1><hr style={{ color: "blue" }}/>
            <p style={{ textAlign: "justify", fontSize: "18px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium nostrum, hic nisi illum ipsam. Sapiente accusantium, ab optio, laudantium adipisci corporis cumque ut, facilis amet harum ratione temporibus corrupti!
            </p>
            <h1 style={{ color: "hsl(240, 70%, 35%)", fontFamily: "times new roman" }}>Mission</h1><hr style={{ color: "blue" }}/>
            <p style={{ textAlign: "justify", fontSize: "18px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, facere illum. Debitis laborum, libero voluptas labore magnam eum quibusdam. Impedit saepe nisi non, accusamus eaque culpa rem et sed aliquid.
            </p>
        </div>
        <div className="motivation-video col-md-4" onMouseOver={() => videoRef.current.play()} onMouseOut={() => videoRef.current.pause()}>
            <h1 style={{ color: "hsl(240, 70%, 35%)", fontFamily: "times new roman" }}>Motivation</h1>
          <video className="videoStyle" src={MotivationVideo} ref={videoRef} controls muted ></video>
        </div>
      </div>
    </div>
  );
}
