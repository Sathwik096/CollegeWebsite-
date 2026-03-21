import React from "react";
import PrincipalImage from "./PrincipalImage.png";

export default function ElectronicsAndCommunicationPage() {
  return (
    <div className='branch-main-container'>
      <div className="row">
        <div className="branch-left-container col-md-8">
          <h1 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Electronics and Communication Engineering</h1>
          <p>
            The department was established in the year 1957 and began functioning under Autonomous Polytechnic when the Institute was awarded Academic Autonomy.
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
              <td>Diploma in Electronics and Communication Engineering</td>
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
            To be a center of excellence in Electronics and Communication Engineering, producing skilled professionals and contributing to technological advancements.
          </p>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Mission</h2><hr />
          <p>
            <ol>
              <li>Provide quality education in Electronics and Communication Engineering with a focus on both theoretical and practical aspects.</li>
              <li>Foster research and innovation in emerging technologies to address real-world challenges.</li>
              <li>Equip students with the skills needed to excel in the field and adapt to evolving industry requirements.</li>
              <li>Promote ethical values, social responsibility, and effective communication skills among students.</li>
              <li>Create a conducive learning environment that encourages holistic development and lifelong learning.</li>
            </ol>
          </p>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Outcomes (POs)</h2><hr />
          <ul>
            <li>Apply principles of electronics and communication engineering to solve complex problems.</li>
            <li>Design and implement electronic systems to meet specific requirements.</li>
            <li>Effectively communicate and work in multidisciplinary teams.</li>
            <li>Analyze and solve real-world problems related to electronics and communication engineering.</li>
            <li>Stay updated with advancements in technology and engage in lifelong learning.</li>
          </ul>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Specific Outcomes (PSOs)</h2><hr />
          <ul>
            <li>Design and implement electronic circuits and systems using modern tools.</li>
            <li>Apply knowledge of communication systems to solve engineering problems.</li>
            <li>Develop and test software applications for electronic systems.</li>
            <li>Collaborate effectively in a team to address real-world challenges in the field.</li>
            <li>Pursue higher education or engage in research in electronics and communication engineering.</li>
          </ul>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Educational Objectives (PEOs)</h2><hr />
          <ul>
            <li>Graduates will have successful careers in electronics and communication engineering or related industries.</li>
            <li>Graduates will pursue higher education and research in the field of electronics and communication engineering.</li>
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
              Welcome to the Electronics and Communication Engineering Department! Our mission is to provide a high-quality education that prepares students for successful careers in the ever-evolving field of electronics and communication. We focus on a holistic approach to learning, combining theoretical knowledge with practical skills and promoting values that shape responsible and ethical professionals. I encourage you to explore the exciting opportunities and challenges offered by our department.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
