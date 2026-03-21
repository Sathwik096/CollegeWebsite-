import React from "react";
import PrincipalImage from "./PrincipalImage.png";

export default function MechanicalPage() {
  return (
    <div className='branch-main-container'>
      <div className="row" >
        <div className="branch-left-container col-md-8">
          <h1 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Mechanical Engineering</h1>
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
              <td>Diploma in Mechanical Engineering</td>
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
            To be a renowned center for Mechanical Engineering education and research, producing skilled professionals and contributing to technological advancements.
          </p>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Mission</h2><hr />
          <p>
            <ol>
              <li>Provide quality education in Mechanical Engineering with a focus on both theoretical knowledge and practical skills.</li>
              <li>Foster a culture of innovation and research to address industry challenges and societal needs.</li>
              <li>Prepare students for successful careers by developing strong problem-solving and analytical abilities.</li>
              <li>Instill ethical values, effective communication skills, and a commitment to social responsibility.</li>
              <li>Facilitate continuous learning and professional development to adapt to evolving industry requirements.</li>
            </ol>
          </p>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Outcomes (POs)</h2><hr />
          <ul>
            <li>Apply fundamental principles of Mechanical Engineering to solve engineering problems.</li>
            <li>Design and analyze mechanical systems, components, and processes.</li>
            <li>Use modern engineering tools and techniques to address real-world challenges.</li>
            <li>Work effectively in multidisciplinary teams, demonstrating leadership and communication skills.</li>
            <li>Adapt to evolving technologies and engage in lifelong learning for professional growth.</li>
          </ul>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Specific Outcomes (PSOs)</h2><hr />
          <ul>
            <li>Apply knowledge of Mechanical Engineering to design and manufacture mechanical systems and components.</li>
            <li>Utilize modern software tools for analysis, simulation, and optimization of mechanical systems.</li>
            <li>Develop solutions for industry-specific problems and contribute to technological advancements.</li>
            <li>Collaborate effectively in a team to address complex engineering challenges.</li>
            <li>Pursue higher education or engage in research in Mechanical Engineering and related fields.</li>
          </ul>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Educational Objectives (PEOs)</h2><hr />
          <ul>
            <li>Graduates will have successful careers in Mechanical Engineering or related industries.</li>
            <li>Graduates will pursue higher education and research in Mechanical Engineering.</li>
            <li>Graduates will demonstrate leadership, effective communication, and ethical values in their professional endeavors.</li>
            <li>Graduates will adapt to emerging technologies and contribute to innovation in Mechanical Engineering.</li>
            <li>Graduates will engage in continuous learning, keeping pace with advancements in the field.</li>
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
              Welcome to the Mechanical Engineering department. Our mission is to provide a comprehensive education in Mechanical Engineering, foster innovation, and prepare students for successful careers. We strive to create an environment that promotes learning, research, and ethical values. Explore our programs and opportunities for personal and professional growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
