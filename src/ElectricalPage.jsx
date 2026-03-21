import React from "react";
import PrincipalImage from "./PrincipalImage.png";

export default function ElectricalPage() {
  return (
    <div className='branch-main-container'>
      <div className="row">
        <div className="branch-left-container col-md-8">
          <h1 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Electrical and Electronics Engineering</h1>
          <p>
            The Electrical and Electronics Engineering department was established in the year 1957 and began functioning under the Autonomous Polytechnic when the institute was awarded academic autonomy.
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
              <th>No. of faculty</th>
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
              <td>Diploma in Electrical and Electronics Engineering</td>
              <td>AICTE</td>
              <td>
                State Board of Technical Education and Training, Telangana
              </td>
              <td>60</td>
            </tr>
          </table>
          <br />
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Vision</h2><hr />
          <p>
            To be a global leader in Electrical and Electronics Engineering education, fostering excellence in innovation, research, and technological advancement. We aspire to produce graduates who contribute significantly to society and industry.
          </p>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Mission</h2><hr />
          <p>
            <ol>
              <li>Provide high-quality education in electrical and electronics engineering with a strong foundation in theory and practical applications.</li>
              <li>Foster a culture of innovation, research, and development in emerging technologies.</li>
              <li>Equip students to meet industry demands, excel in their careers, and contribute to the field of electrical and electronics engineering.</li>
              <li>Promote ethical practices, social responsibility, and continuous learning in the profession.</li>
              <li>Create a conducive learning environment that nurtures the holistic development of students.</li>
            </ol>
          </p>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Outcomes (POs)</h2><hr />
          <ul>
            <li>Apply mathematical and scientific principles to analyze and solve electrical and electronics engineering problems.</li>
            <li>Design and implement electrical and electronics systems to meet specified requirements.</li>
            <li>Collaborate effectively in multidisciplinary teams and communicate technical information clearly.</li>
            <li>Identify, analyze, and solve real-world problems related to electrical and electronics engineering.</li>
            <li>Stay updated with technological advancements and engage in lifelong learning.</li>
          </ul>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Specific Outcomes (PSOs)</h2><hr />
          <ul>
            <li>Apply knowledge of electrical and electronics engineering principles to design and analyze systems.</li>
            <li>Demonstrate proficiency in using modern tools and technologies for engineering practice.</li>
            <li>Analyze and solve real-world problems related to electrical and electronics systems.</li>
            <li>Work collaboratively on projects, demonstrating effective communication and teamwork skills.</li>
            <li>Pursue advanced studies or engage in research in the field of electrical and electronics engineering.</li>
          </ul>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Educational Objectives (PEOs)</h2><hr />
          <ul>
            <li>Graduates will have successful careers in electrical and electronics engineering or related industries.</li>
            <li>Graduates will pursue higher education and research in the field of electrical and electronics engineering.</li>
            <li>Graduates will adapt to evolving technologies and contribute to innovation in the profession.</li>
            <li>Graduates will demonstrate leadership, teamwork, and effective communication skills.</li>
            <li>Graduates will uphold ethical values, social responsibility, and engage in lifelong learning.</li>
          </ul>
        </div>
        <div className="branch-right-container col-md-3">
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>HOD's Desk</h2>
          <div className='hod-container'>
            <img src={PrincipalImage} alt="principalPhoto" className='hod-image-style' />{" "}
            <br />
            <b>Head Of Department</b> <br />
            <b>Dr. N. Rajeshwari Devi</b> <br /><br />
            <p style={{ textAlign: 'justify' }}>
              Welcome to the Electrical and Electronics Engineering Department! I am excited to lead a department with a rich history and a commitment to excellence.
              <br /><br />
              As the Head of the Department, I am dedicated to providing a dynamic and engaging learning environment. Our experienced faculty is focused on delivering quality education, conducting impactful research, and guiding students in their academic and professional journeys.
              <br /><br />
              We encourage students to explore the latest technologies, engage in hands-on projects, and contribute to the ever-evolving world of electrical and electronics engineering. Our goal is to nurture graduates who not only excel in their careers but also make meaningful contributions to the advancement of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
