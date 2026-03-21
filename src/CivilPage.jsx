import React from "react";
import PrincipalImage from "./PrincipalImage.png";

export default function CivilPage() {
  return (
    <div className='branch-main-container'>
      <div className="row" >
        <div className="branch-left-container col-md-8">
          <h1 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Civil Engineering</h1>
          <p>
            Department was established in year 1957. It started functioning
            under Autonomous Polytechnic when the Institute was awarded Academic
            Autonomy.
          </p>
          <br />
          <table>
            <tr>
              <th>Intake</th>
              <td>:</td>
              <td>60</td>
            </tr>
            <tr>
              <th>Head of Department</th>
              <td>:</td>
              <td>01</td>
            </tr>
            <tr>
              <th>No. of fauclty</th>
              <td>:</td>
              <td>10</td>
            </tr>
            <tr>
              <th>No. of supporting staff</th>
              <td>:</td>
              <td>5</td>
            </tr>
          </table>
          <br />
          <table style={{ border: "2px solid #f5f5f5", textAlign: "center" }}>
            <style jsx>{`
              th,
              td {
                padding: 2px;
              }
            `}</style>
            <tr
              style={{
                backgroundColor: "hsl(205, 85%, 35%)",
                color: "white",
                padding: "10px",
              }}
            >
              <th>Sr. no.</th>
              <th>Name of the Programme</th>
              <th>Approved by</th>
              <th>Affiliated Body</th>
              <th>Annual Intake</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Diploma in Civil Engineering</td>
              <td>AICTE</td>
              <td>
                State Board of Technical Education and Training, Telangana
              </td>
              <td>60</td>
            </tr>
          </table>
          <br />
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Vision</h2><hr />
          <p>
          To be a leading department in Civil Engineering, recognized for excellence in education, research, and innovation. <br /> We aim to contribute to the sustainable development of society by producing competent professionals in the field of civil engineering.
          </p>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Mission</h2><hr />
          <p>
            <ol>
                <li>Provide high-quality education in civil engineering with a focus on theoretical and practical knowledge.</li>
                <li>Foster research and innovation in civil engineering to address societal challenges.</li>
                <li>Promote ethical and sustainable practices in the planning and execution of civil engineering projects.</li>
                <li>Prepare students for successful careers in the civil engineering profession.</li>
                <li>Instill a commitment to lifelong learning and professional development.</li>
            </ol>
          </p>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Program Outcomes (POs)</h2><hr />
          <ul>
              <li>Apply knowledge of mathematics, science, and engineering principles to solve civil engineering problems.</li>
              <li>Design and conduct experiments, as well as analyze and interpret data in the civil engineering context.</li>
              <li>Design and plan civil engineering projects considering societal, environmental, and economic factors.</li>
              <li>Work effectively in multidisciplinary teams and communicate technical information.</li>
              <li>Adopt sustainable practices and consider ethical, social, and environmental aspects in civil engineering projects.</li>
          </ul>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Program Specific Outcomes (PSOs)</h2><hr />
          <ul>
              <li>Apply principles of civil engineering to analyze, design, and execute structural and infrastructural projects.</li>
              <li>Utilize modern tools and technologies for the planning and management of civil engineering projects.</li>
              <li>Demonstrate proficiency in relevant software applications used in civil engineering practices.</li>
              <li>Conduct experiments, analyze data, and interpret results related to civil engineering systems and structures.</li>
              <li>Collaborate on research projects and contribute to innovations in the field of civil engineering.</li>
          </ul>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Program Educational Objectives (PEOs)</h2><hr />
          <ul>
              <li>Graduates will have successful careers in civil engineering or related industries.</li>
              <li>Graduates will pursue higher education and engage in research and development activities.</li>
              <li>Graduates will demonstrate leadership, teamwork, and effective communication skills in their professional endeavors.</li>
              <li>Graduates will contribute to the development of sustainable and resilient infrastructure.</li>
              <li>Graduates will adapt to emerging technologies and contribute to the advancement of civil engineering practices.</li>
          </ul>
        </div>
        <div className="branch-right-container col-md-3">
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>HOD's Desk</h2>
          <div className='hod-container'>
          <img src={PrincipalImage} alt="principalPhoto" className='hod-image-style' />{" "}
          <br />
          <b>Head Of Department</b> <br />
          <b>Dr. N. Rajeshwari Devi</b> <br /><br />
          <p style={{textAlign:'justify'}}>
            Welcome to the Civil Engineering Department! It's an honor to lead a department with a rich history dating back to 1957. Our commitment is to provide quality education, foster research, and prepare our students to excel in the field of civil engineering.
            <br /><br />
            As the Head of the Department, I am passionate about creating an environment where students can develop their technical skills, critical thinking abilities, and ethical values. Our faculty members are dedicated to imparting knowledge and guiding students towards successful careers.
            <br /><br />
            We encourage students to actively participate in projects, internships, and research activities to gain practical experience. Our goal is to produce graduates who not only meet industry standards but also contribute to the betterment of society through sustainable engineering practices.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
