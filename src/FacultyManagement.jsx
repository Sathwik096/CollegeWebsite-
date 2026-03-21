import React, { useState, useEffect } from 'react';
import * as xlsx from 'xlsx';
import axios from 'axios';

const FacultyManagement = () => {
  const [facultyData, setFacultyData] = useState([]); //for viewing faculty data
  const [removePIN, setRemovePIN] = useState('');  //for removing faculty data
  const [updateData, setUpdateData] = useState({ // for updating existing faculty data
    PIN: '',
    biometricID: '',
    name: '',
    department: '',
    degree: '',
    experience: '',
    mobile: '',
    email: '',
  });
  const [tableVisible, setTableVisible] = useState(false); // State to manage table visibility

  const downloadTemplate = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/faculty/download-template', {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'faculty_template.xlsx');
      document.body.appendChild(link);
      link.click();
      alert('Template downloaded successfully!');
    } catch (error) {
      console.error('Error downloading template:', error);
      alert('Error downloading template. Please try again.');
    }
  };

  const addFaculty = async () => {
    try {
      // Implement logic to upload faculty data
      const fileInput = document.getElementById('facultyFileInput');
      const formData = new FormData();
      formData.append('facultyFile', fileInput.files[0]);

      await axios.post('http://localhost:5001/api/faculty/add-faculty', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Faculty data added successfully!');
    } catch (error) {
      console.error('Error adding faculty:', error);
      alert('Error adding faculty. Please try again.');
    }
  };

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

  const toggleTableVisibility = () => {
    setTableVisible(!tableVisible);
  };

  const removeFaculty = async () => {
    try {
      await axios.delete(`http://localhost:5001/api/faculty/remove-faculty/${removePIN}`);
      alert(`Faculty with PIN ${removePIN} removed successfully!`);
      setRemovePIN(''); // Clear input after removal
      viewFaculty(); // Refresh faculty data after removal
    } catch (error) {
      console.error('Error removing faculty:', error);
      alert('Error removing faculty. Please try again.');
    }
  };

  const editFaculty = (faculty) => {
    setUpdateData({
      PIN: faculty.PIN,
      biometricID: faculty.biometricID,
      name: faculty.name,
      department: faculty.department,
      degree: faculty.degree,
      experience: faculty.experience,
      mobile: faculty.mobile,
      email: faculty.email || '',
    });
  };

  const updateFaculty = async () => {
    try {
      await axios.put(`http://localhost:5001/api/faculty/update-faculty/${updateData.PIN}`, updateData);
      alert('Faculty data updated successfully!');
      setUpdateData({
        PIN: '',
        biometricID: '',
        name: '',
        department: '',
        degree: '',
        experience: '',
        mobile: '',
        email: '',
      });
      viewFaculty();
    } catch (error) {
      console.error('Error updating faculty:', error);
      alert('Error updating faculty. Please try again.');
    }
  }; 
  
  const downloadFacultyData = async () => {
    try {
      alert('Downloading...');
      const filteredFacultyData = facultyData.map(({ _id,__v, ...rest }) => rest);
      const ws = xlsx.utils.json_to_sheet(filteredFacultyData);
      const wb = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(wb, ws, 'Faculty');
      xlsx.writeFile(wb, 'faculty_data.xlsx');
    } catch (error) {
      console.error('Error downloading faculty data:', error);
      alert('Error downloading faculty data. Please try again.');
    }
  };

  useEffect(() => {
    // Auto-load faculty data on component mount
    viewFaculty();
  }, []);

  return (
    <div className='faculty-management-container'>
      <h1 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)', textAlign:'center'}}>Faculty Management</h1><hr />
      <h4 style={{fontFamily:'arial', color:'hsl(205, 85%, 25%)'}}>Download Faculty Data Template</h4>
      <button onClick={downloadTemplate} className='faculty-button'>Download Template</button><hr />
      <h4 style={{fontFamily:'arial', color:'hsl(205, 85%, 25%)'}}>Add Faculty</h4>
      <input
        type="file"
        id="facultyFileInput"
        accept=".xlsx, .xls"
      />
      <button onClick={addFaculty} className='faculty-button'>Add Faculty</button> <hr />
      <h4 style={{fontFamily:'arial', color:'hsl(205, 85%, 25%)'}}>Remove Faculty</h4>
      <label htmlFor="removePIN">Enter PIN to remove faculty:</label> 
      <input
        type="text"
        id="removePIN"
        value={removePIN}
        onChange={(e) => setRemovePIN(e.target.value)}
      /> <br /><br />
      <button onClick={removeFaculty} className='faculty-button'>Remove Faculty</button> <hr />
      <div className='edit-form'>
        <h4 style={{fontFamily:'arial', color:'hsl(205, 85%, 25%)'}}>Edit Faculty</h4>
        <input
          type='text'
          placeholder='PIN'
          value={updateData.PIN}
          onChange={(e) => setUpdateData({ ...updateData, PIN: e.target.value })}
        />
        <input
          type='text'
          placeholder='Biometric ID'
          value={updateData.biometricID}
          onChange={(e) => setUpdateData({ ...updateData, biometricID: e.target.value })}
        />
        <input
          type='text'
          placeholder='Name'
          value={updateData.name}
          onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
        />
        <input
          type='text'
          placeholder='Department'
          value={updateData.department}
          onChange={(e) => setUpdateData({ ...updateData, department: e.target.value })}
        />
        <input
          type='text'
          placeholder='Degree'
          value={updateData.degree}
          onChange={(e) => setUpdateData({ ...updateData, degree: e.target.value })}
        />
        <input
          type='text'
          placeholder='Experience'
          value={updateData.experience}
          onChange={(e) => setUpdateData({ ...updateData, experience: e.target.value })}
        />
        <input
          type='text'
          placeholder='Mobile'
          value={updateData.mobile}
          onChange={(e) => setUpdateData({ ...updateData, mobile: e.target.value })}
        />
        <input
          type='text'
          placeholder='Email'
          value={updateData.email}
          onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
        /> <br /><br />
        <button onClick={updateFaculty} className='faculty-button'>
          Update Faculty
        </button> <hr />
      </div>
      <h4 style={{ fontFamily: 'arial', color: 'hsl(205, 85%, 25%)' }}>View Faculty</h4>
      <button onClick={toggleTableVisibility} className='faculty-button'>
        {tableVisible ? 'Hide Faculty' : 'View Faculty'}
      </button> <br /><br />

      {tableVisible && ( // Conditionally render the table based on visibility state
        <table className='faculty-table'>
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
              <th>Edit</th>
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
                <td>
                  <button onClick={() => editFaculty(faculty)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )} <hr />
      <h4 style={{ fontFamily: 'arial', color: 'hsl(205, 85%, 25%)' }}>Download Faculty Data</h4>
      <button onClick={downloadFacultyData} className='faculty-button'>Download Faculty</button>
    </div>
  );
};

export default FacultyManagement;
