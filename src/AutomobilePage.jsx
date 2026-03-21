import React from "react";
import PrincipalImage from "./PrincipalImage.png";

export default function AutomobilePage() {
  return (
    <div className='branch-main-container'>
      <div className="row" >
        <div className="branch-left-container col-md-8">
          <h1 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Automobile Engineering</h1>
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
              <td>Diploma in Automobile Engineering</td>
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
          To be a leading department in Automobile Engineering, recognized for excellence in education, research, and innovation. We aim to nurture competent professionals who contribute to the advancement of automotive technology and sustainable practices, meeting the global challenges of the industry.
          </p>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Mission</h2><hr />
          <p>
            <ol>
              <li>Provide high-quality education in the field of Automobile Engineering.</li>
              <li>Equip students with practical skills and theoretical knowledge.</li>
              <li>Foster innovation and research in automotive technologies.</li>
              <li>Promote ethical and sustainable practices in the automotive industry.</li>
              <li>Prepare students for successful careers and lifelong learning.</li>
            </ol>
          </p>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Program Outcomes (POs)</h2><hr />
          <ul>
            <li>Apply knowledge of mathematics, science, and engineering to solve complex engineering problems.</li>
            <li>Design and conduct experiments, as well as analyze and interpret data.</li>
            <li>Design a system, component, or process to meet desired needs within realistic constraints.</li>
            <li>Function effectively as a member or leader in a multidisciplinary team.</li>
            <li>Communicate effectively in both verbal and written forms.</li>
          </ul>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Program Specific Outcomes (PSOs)</h2><hr />
          <ul>
            <li>Apply principles of automotive engineering to design and analyze automotive systems.</li>
            <li>Demonstrate proficiency in using modern tools for automotive design and analysis.</li>
            <li>Apply knowledge of safety, environmental, and ethical practices in automotive engineering projects.</li>
            <li>Work collaboratively on industry-oriented projects related to automobile engineering.</li>
            <li>Adapt to evolving technologies and pursue advanced studies or research in the field.</li>
          </ul>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Program Educational Objectives (PEOs)</h2><hr />
          <ul>
            <li>Graduates will have successful careers in the field of Automobile Engineering or related industries.</li>
            <li>Graduates will pursue higher education and engage in lifelong learning.</li>
            <li>Graduates will demonstrate leadership, teamwork, and effective communication skills.</li>
            <li>Graduates will contribute to the sustainable development of society through ethical practices.</li>
            <li>Graduates will adapt to emerging technologies and contribute to the innovation in the field.</li>
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
              Welcome to the Department of Automobile Engineering! Our department is committed to providing a dynamic learning environment that fosters innovation, research, and practical skills in the field of automobile engineering.
              <br /><br />
              As the Head of the Department, I am dedicated to ensuring the holistic development of our students by imparting quality education, promoting industry-oriented projects, and encouraging ethical practices. Our faculty members are experienced and passionate about nurturing the next generation of engineers.
              <br /><br />
              We aim to prepare our students to meet the challenges of the automotive industry and contribute to the technological advancements in this ever-evolving field.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
