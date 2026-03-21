import React from "react";
import PrincipalImage from "./PrincipalImage.png";

export default function ComputerPage() {
  return (
    <div className='branch-main-container'>
      <div className="row" >
        <div className="branch-left-container col-md-8">
          <h1 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Computer Engineering</h1>
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
              <td>120</td>
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
              <td>Diploma in Computer Engineering</td>
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
          To be a globally recognized department in Computer Engineering, committed to academic excellence, innovation, and research. <br /> We aim to produce skilled professionals who contribute to technological advancements and societal well-being.
          </p>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Mission</h2><hr />
          <p>
            <ol>
                <li>Provide high-quality education in computer engineering with a focus on theoretical and practical aspects.</li>
                <li>Foster innovation, research, and development in emerging technologies.</li>
                <li>Prepare students to meet industry demands and excel in the field of computer engineering.</li>
                <li>Promote ethical practices, social responsibility, and lifelong learning in the computing profession.</li>
                <li>Offer a conducive learning environment for the holistic development of students.</li>   
            </ol>
          </p>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Program Outcomes (POs)</h2><hr />
          <ul>
              <li>Apply mathematical foundations, algorithmic principles, and computer science theory to solve complex engineering problems.</li>
              <li>Design, implement, and evaluate computer-based systems to meet specified requirements.</li>
              <li>Function effectively in multidisciplinary teams, communicate technical information, and work ethically in professional contexts.</li>
              <li>Identify, analyze, and design solutions for computing-related challenges.</li>
              <li>Stay current with technological advancements and engage in lifelong learning in the field of computer engineering.</li>   
          </ul>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Program Specific Outcomes (PSOs)</h2><hr />
          <ul>
              <li>Apply knowledge of computer science and engineering principles to design and develop software and hardware systems.</li>
              <li>Demonstrate proficiency in the use of modern tools, techniques, and technologies for software development and system analysis.</li>
              <li>Analyze and solve real-world problems related to computer systems and applications.</li>
              <li>Collaborate on projects, demonstrating effective communication, leadership, and teamwork skills.</li>
              <li>Pursue advanced studies, research, or entrepreneurial activities in the field of computer engineering.</li>   
          </ul>
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Program Educational Objectives (PEOs)</h2><hr />
          <ul>
              <li>Graduates will have successful careers in computer engineering, software development, or related industries.</li>
              <li>Graduates will pursue higher education and research in computer science and engineering.</li>
              <li>Graduates will adapt to evolving technologies and contribute to innovation in the computing profession.</li>
              <li>Graduates will demonstrate leadership, teamwork, and effective communication skills.</li>
              <li>Graduates will uphold ethical values, social responsibility, and engage in lifelong learning.</li>    
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
            Welcome to the Computer Engineering Department! It's my pleasure to lead a department that has been at the forefront of technological advancements since 1957. Our commitment is to provide a conducive learning environment, foster innovation, and prepare students for successful careers in computer engineering.
            <br /><br />
            As the Head of the Department, I am passionate about equipping students with the skills and knowledge needed to thrive in the dynamic field of computer engineering. Our dedicated faculty members focus on delivering quality education, conducting impactful research, and guiding students in their academic and professional journeys.
            <br /><br />
            We encourage students to explore cutting-edge technologies, engage in hands-on projects, and contribute to the ever-evolving world of computing. Our aim is to produce graduates who not only excel in their careers but also make meaningful contributions to the advancement of technology.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
