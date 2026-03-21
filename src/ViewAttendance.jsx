import React, { useState } from 'react';
import axios from 'axios';

function AttendanceComponent() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [studentId, setStudentId] = useState('');
  const [showPinColumn, setShowPinColumn] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled before exporting
    if (studentId) {
      try {
        // Example: Call the API endpoint to mark attendance
        console.log('Sending request with parameters:', { studentId, startDate, endDate });
        const response = await axios.get('http://localhost:3000/api/attendance', {
          params: {
            studentId,
            startDate: startDate || null, // Conditionally include startDate
            endDate: endDate || null,     // Conditionally include endDate
          },
        });

        console.log('Attendance details:', response.data);

        if (response.data.length === 0) {
          setAttendanceData([]);
          setShowPinColumn(false);
          alert("No attendance found");
          console.log("Error: No attendance status available");
        } else {
          setAttendanceData(response.data);
          setShowPinColumn(true);
        }
      }  catch (error) {
        // Handle errors
        console.error('Error fetching attendance details:', error);

        if (error.response) {
          // The request was made and the server responded with a status code
          if (error.response.status === 404) {
            // Display an error message for a wrong PIN (status code 404 Not Found)
            setAttendanceData([]);
            setShowPinColumn(false);
            alert("Invalid PIN. Please enter a correct PIN.");
            console.log("Error: Invalid PIN");
          } else {
            // Display a generic error message for other server errors
            setAttendanceData([]);
            setShowPinColumn(false);
            alert("Error fetching attendance details kindly check specified DATE or Entered PIN");
            console.log("Error: Error fetching attendance details");
          }
        } else {
          // The request was made but no response was received
          setAttendanceData([]);
          setShowPinColumn(false);
          alert("Network error. Please try again.");
          console.log("Error: Network error");
        }
      }
    } else {
      alert('Please fill in all the fields');
    }
  };

  return (
    <div className='view-attendance'>
    <div className="inner-view-attendance">
      <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)', textAlign:'center'}}>Check Attendance</h2><hr />

      {/* Form for user input */}
      <form onSubmit={handleFormSubmit}>
        <label>
          Student Pin:
          </label>
          <input
            type="text"
            style={{marginLeft:'15px'}}
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            pattern="[0-9]{5}-[a-zA-Z]{2}-[0-9]{3}"
            title="Please enter a valid student ID (e.g.,21001-CS-033)"
            required
          />
        <br /><br />
        <button type="submit" className='faculty-button'>Submit</button> <br /><br />
        <p style={{fontFamily:'times new roman',textDecoration:'underline',fontSize:'18px'}}> Select 'From Date' and 'To Date' to get Attendance of specific Month</p>
        <label>
          From Date:
        </label>
          <input style={{marginLeft:'15px'}} type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <br /><br />
        <label>
          To Date:
        </label>
          <input style={{marginLeft:'15px'}} type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        
        <br/> 
      </form>

      {showPinColumn && (
       <div> 
        <br />
        <table className='view-attendance-table'>
          {/* Display student details */}
          <thead>
            <tr>
              <th>Pin</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.s_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      )}

      {attendanceData.length > 0 && (
        <div>
          <h2>Attendance</h2>
          <table className='view-attendance-table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(attendanceData[0])
                .slice(1) // Exclude Pin from the iteration
                .map((date, index) => (
                  <tr key={index}>
                    <td><b>{date}</b></td>
                    <td style={{ color: attendanceData[0][date] === 'A' ? 'red' : (attendanceData[0][date] === 'P' ? 'green' : 'black') }}>
                      <b>{attendanceData[0][date]}</b>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <br/><br/>
          <p style={{fontSize:'14px'}}><span style={{color:'blue',fontWeight:'bold'}}>H</span> - Holiday</p>
          <p style={{fontSize:'14px'}}><span style={{color:'black',fontWeight:'bold'}}>W</span> - Weekend</p>
          <p style={{fontSize:'14px'}}><span style={{color:'red',fontWeight:'bold'}}>A</span> - Absent</p>
          <p style={{fontSize:'14px'}}><span style={{color:'green',fontWeight:'bold'}}>P</span> - Present</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default AttendanceComponent;
