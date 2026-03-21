import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Facultypage() {
    const [facultyData, setFacultyData] = useState([]); //for viewing faculty data

    const viewFaculty = async () => {
        try {
          // Call the endpoint to get faculty data
          const response = await axios.get('http://localhost:5001/api/faculty/get-faculty');
          setFacultyData(response.data);
        } catch (error) {
          console.error('Error getting faculty data:', error);
          alert('Error getting faculty data. Please try again.');
        }
      };

      useEffect(() => {
        // Auto-load faculty data on component mount
        viewFaculty();
      }, []);
  return (
    <div className='faculty-container'>
    <div className="faculties-table-container">
        <h1 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)', textAlign:'center'}}>Our Faculties</h1> <hr />
      <table className='faculties-table'>
          <thead>
            <tr>
          
              <th>PIN</th>
              <th>Biometric ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Degree</th>
              <th>Experience</th>
              <th>Mobile</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {facultyData.map((faculty) => (
              <tr key={faculty._id}>
                <td>{faculty.PIN}</td>
                <td>{faculty.biometricID}</td>
                <td>{faculty.name}</td>
                <td>{faculty.department}</td>
                <td>{faculty.degree}</td>
                <td>{faculty.experience}</td>
                <td>{faculty.mobile}</td>
                <td>{faculty.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  )
}
