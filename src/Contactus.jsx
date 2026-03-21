import React from 'react';

export default function Contactus() {
  return (
    <div className='contactus-main-container'>
      <div className="contact-info-container row">
        <div className="col-md-4">
          <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)'}}>Contact Us</h2>
          <hr />
          <address>
            <strong>Government Polytechnic Hyderabad</strong><br />
            Masabtank, Asif Nagar-5000028, Telangana, India.<br />
            <strong>Phone No.:</strong> +91 76416976463, 897613197465 (Principal)<br />
            <strong>FAX:</strong> 91 -859-56165956<br />
            <strong>Email:</strong> principal@gptmasb.ac.in
          </address>
        </div>
        <div className="col-md-7">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1745578291684!2d78.4542609!3d17.403408600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97403c59aefb%3A0x979eb4a9704c45e8!2sGovernment%20Polytechnic!5e0!3m2!1sen!2sin!4v1707040239002!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contactus-table-container">
        <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)', textAlign: 'center'}}>List of Activities and Contact Details </h2> <hr />
        <table className='contactus-table'>
          <thead>
            <tr>
              <th>Sr. no.</th>
              <th>Activity/Dept</th>
              <th>Name of the Officer</th>
              <th>Email</th>
              <th>Mobile No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Academic Coordination and Curriculum Development</td>
              <td>Mr. Sharma</td>
              <td>sharma@mail.com</td>
              <td>9879465667</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Office Registrar</td>
              <td>Mr. Reddy</td>
              <td>reddy@mail.com</td>
              <td>9577465667</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Examination Cell</td>
              <td>Smt. Suguna Dasari</td>
              <td>suguna@mail.com</td>
              <td>3657465667</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Training and Placement Officer</td>
              <td>Mr. Patil</td>
              <td>patil@mail.com</td>
              <td>6554765667</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Cell for Persons with Disability</td>
              <td>Smt. Ananda Kumari</td>
              <td>ananda@mail.com</td>
              <td>8745665667</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Alumni Association</td>
              <td>Mr. Goverdhan Reddy</td>
              <td>goverdhan@mail.com</td>
              <td>6543165667</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
