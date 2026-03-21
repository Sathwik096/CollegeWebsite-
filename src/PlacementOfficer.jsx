import React from "react";
import PrincipalImage from "./PrincipalImage.png";

export default function PlacementOfficer() {
  return (
    <div className="placementofficer-container">
      <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>From the Desk of Training And Placement Officer</h2>
      <hr />
      <div style={{ textAlign: "center", padding: "5px" }}>
        <img className="placementofficer-image" src={PrincipalImage} alt="Placement Officer" />
        <p>
          <b>Dr. N. Rajeshwari Devi</b><br />
          Training and Placement Officer.<br />
          Government Polytechnic Hyderabad.
        </p>
      </div>
      <div>
        <p>
          Government Polytechnic Hyderabad, Masabtank is a leading diploma institution in
          Telangana. The Training and Placement Cell of Government Polytechnic
          Hyderabad, facilitates the campus placements of diploma students. For this,
          the Cell makes every possible effort to connect with as many
          industries as possible. Due to the excellent performance of our
          students in the industries, they visit every year for conducting
          recruitment drive. The Placement Cell provides the support to the
          visiting industries at every stage of placement process such as
          arrangements for Pre-Placement Talks, Written Tests, Group Activities
          and Personal Interviews. The Cell also supports the departments in the
          institute for the placement of students for summer internships. On
          behalf of the institute, I appeal the industries to visit our
          institute for campus recruitment of our students.
        </p>
      </div>
    </div>
  );
}
