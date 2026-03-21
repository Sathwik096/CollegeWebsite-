import React from "react";
import PrincipalImage from "./PrincipalImage.png";

export default function PharmacyPage() {
  return (
    <div className='branch-main-container'>
      <div className="row" >
        <div className="branch-left-container col-md-8">
          <h1 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Pharmaceutical Engineering</h1>
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
              <td>Diploma in Pharmaceutical Engineering</td>
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
            To emerge as a center of excellence in Pharmaceutical Engineering education and research, fostering innovation and contributing to the healthcare industry.
          </p>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Mission</h2><hr />
          <p>
            <ol>
              <li>Provide comprehensive education in Pharmaceutical Engineering with a focus on theoretical knowledge and practical skills.</li>
              <li>Foster a research-oriented environment to address challenges in the pharmaceutical and healthcare sectors.</li>
              <li>Prepare students for successful careers by instilling ethical values, effective communication, and teamwork.</li>
              <li>Collaborate with the industry and academia to stay abreast of advancements in pharmaceutical technology.</li>
              <li>Contribute to societal well-being by producing graduates committed to improving healthcare systems.</li>
            </ol>
          </p>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Outcomes (POs)</h2><hr />
          <ul>
            <li>Apply fundamental principles of Pharmaceutical Engineering to solve complex problems in drug development and manufacturing.</li>
            <li>Design and optimize pharmaceutical processes and formulations considering safety, efficacy, and quality.</li>
            <li>Use modern tools and technologies to analyze pharmaceutical data and ensure compliance with regulatory standards.</li>
            <li>Work effectively in interdisciplinary teams, demonstrating leadership and communication skills.</li>
            <li>Adapt to evolving technologies and engage in continuous learning for professional growth.</li>
          </ul>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Specific Outcomes (PSOs)</h2><hr />
          <ul>
            <li>Apply knowledge of pharmaceutical engineering to design and develop drug formulations and delivery systems.</li>
            <li>Utilize analytical and research skills to contribute to advancements in pharmaceutical science and technology.</li>
            <li>Collaborate with pharmaceutical industries to address real-world challenges and implement innovative solutions.</li>
            <li>Demonstrate ethical practices, professionalism, and societal responsibility in the pharmaceutical domain.</li>
            <li>Pursue higher education or engage in research in Pharmaceutical Engineering and related fields.</li>
          </ul>
          <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'hsl(205, 85%, 25%)' }}>Program Educational Objectives (PEOs)</h2><hr />
          <ul>
            <li>Graduates will have successful careers in pharmaceutical and healthcare industries.</li>
            <li>Graduates will pursue higher education and research in Pharmaceutical Engineering.</li>
            <li>Graduates will demonstrate leadership, effective communication, and ethical values in their professional endeavors.</li>
            <li>Graduates will contribute to the development and improvement of pharmaceutical technologies.</li>
            <li>Graduates will engage in continuous learning, adapting to emerging trends in the pharmaceutical sector.</li>
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
              Welcome to the Pharmaceutical Engineering department. Our mission is to provide quality education, foster innovation, and contribute to the pharmaceutical and healthcare sectors. We aim to produce graduates equipped with knowledge, skills, and ethical values. Explore our programs and join us in shaping the future of pharmaceutical engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
