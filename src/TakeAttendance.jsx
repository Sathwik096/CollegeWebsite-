import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TakeAttendance = () => {
  const [departments, setDepartments] = useState([]);
  const [semesterOptions] = useState([1, 2, 3, 4, 5, 6]);
  const [shiftOptions] = useState([1, 2]);
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [shift, setShift] = useState('');
  const [subject, setSubject] = useState('');
  const [attendanceResults, setAttendanceResults] = useState([]);
  const [showDateInputAttendance, setShowDateInputAttendance] = useState(false);
  const [attendanceStatusArray, setAttendanceStatusArray] = useState([]);
  const [attendanceDate, setAttendanceDate] = useState('');
  const [fetchAttempted, setFetchAttempted] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  // State for holiday/weekend modal
  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [holidayType, setHolidayType] = useState('H');
  const [holidayDate, setHolidayDate] = useState('');

  useEffect(() => {
    // Fetch departments from the server using Axios
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/departments');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const updateStatus = (index) => {
    setAttendanceStatusArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = newArray[index] === 'A' ? 'P' : 'A';
      return newArray;
    });
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setAttendanceStatusArray((prevArray) => prevArray.map(() => (selectAll ? 'A' : 'P')));
  };

  const submitInput = () => {
    if (department && semester && subject && shift) {
      setFetchAttempted(true);
      // Call the API endpoint to mark attendance
      axios.post('http://localhost:3000/api/student_details', { department, semester, subject,shift })
        .then(response => {
          // Handle the response if needed
          console.log('Student details:', response.data);
          // Update the state with the results
          setAttendanceResults(response.data);

          // Initialize array based on fetched data
          setAttendanceStatusArray(new Array(response.data.length).fill('A'));

          // Show the date input after fetching student details
          //setShowDateInput(true);
        })
        .catch(error => {
          // Handle errors
          console.error('Error fetching student details:', error);
        });
    } else {
      alert('Please fill in all the fields');
    }
  };

  const submitAttendance = () => {
    // Check if studentDetails is empty before making the POST request
    if (attendanceResults.length === 0) {
      alert('No students are enrolled in the specified department and semester.');
    } else {
      // Make a POST request to the server endpoint with the attendance status array
      axios.post('http://localhost:3000/api/submit_attendance', {
        attendanceStatusArray: attendanceStatusArray,
      })
        .then(response => {
          // Handle the response from the server
          console.log('Attendance status array sent to the server successfully', response.data);
          alert('Attendance submitted successfully.');
        })
        .catch(error => {
          console.error('Error sending attendance status array to the server:', error);
          alert('Already submitted or Error submitting attendance.');
        });
    }
  };
  
  const submitAttendanceDate = () => {
    // Handle submitting the attendance date to api/date_attendance
    if (!attendanceDate) {
      alert('Please enter a valid date.');
      return;
    }

    // Make a POST request to the api/date_attendance endpoint with the entered date
// Make a POST request to the api/date_attendance endpoint with the entered date
    axios.post('http://localhost:3000/api/date_attendance', {
      attendanceDate: attendanceDate,
    })
      .then(response => {
        // Check for success in the response data
        if (response.data.message === 'Attendance date received successfully.') {
          console.log('Date sent to the server successfully', response.data);
          alert("Today's attendance added successfully");
        } else {
          // Display an alert for other cases
          console.error('Error adding date to the server:', response.data.message);
          alert("Error submitting today's Attendance. Please try again.");
        }
      })
      .catch(error => {
        // Handle errors
        console.error('Error sending date to the server:', error);
        alert("Already Submitted or Error submitting today's Attendance.");
      });

    // Reset state and hide date input after submission
    setAttendanceDate('');
    setShowDateInputAttendance(false);

  };

  const openHolidayModal = () => {
    setShowHolidayModal(true);
  };

  const closeHolidayModal = () => {
    setShowHolidayModal(false);
  };

  const showDate = () => {
    setShowDateInputAttendance(true);
  };

  const submitHoliday = () => {
    // Make a POST request to the server endpoint with holiday data
    axios.post('http://localhost:3000/api/holiday_attendance', {
      holidayType: holidayType,
      holidayDate: holidayDate,
    })
      .then(response => {
        // Handle the response from the server
        console.log('Holiday data sent to the server successfully', response.data);
        alert('Holiday/Weekend submitted successfully.');
        // Close the modal after successful submission
        setShowHolidayModal(false);
      })
      .catch(error => {
        console.error('Error sending holiday data to the server:', error);
        alert('Already submitted or Error submitting Holiday/Weekend.');
      });
  };

  return (
    <div className='take-attendance'>
    <h2 style={{fontFamily:'times new roman', color:'hsl(205, 85%, 25%)', textAlign:'center'}}>Take Attendance</h2><hr />
      <label style={{fontFamily:'arial', color:'hsl(205, 85%, 25%)',fontWeight:'bold'}}>
        Department:
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
          style={{ margin: '20px', fontSize: '18px',padding:'3px' }}
        >
          <option value="" disabled>Select Department</option>
          {departments.map((dept) => (
            <option key={dept.D_id} value={dept.D_name}>
              {dept.D_name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label style={{fontFamily:'arial', color:'hsl(205, 85%, 25%)',fontWeight:'bold'}}>
        Semester:
        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          required
          style={{ margin: '20px', fontSize: '18px',padding:'3px' }}
        >
          <option value="" disabled>Select Semester</option>
          {semesterOptions.map((sem) => (
            <option key={sem} value={sem}>
              {sem}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label style={{fontFamily:'arial', color:'hsl(205, 85%, 25%)',fontWeight:'bold'}}>
        Shift:
        <select
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          required
          style={{ margin: '20px', fontSize: '18px',padding:'3px' }}
        >
          <option value="" disabled>Select Shift</option>
          {shiftOptions.map((shift) => (
            <option key={shift} value={shift}>
              {shift}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label style={{fontFamily:'arial', color:'hsl(205, 85%, 25%)',fontWeight:'bold'}}>
        Subject:
        <input
          type="text"
          value={subject}
          onInput={(e) => {
            const inputValue = e.target.value;
            if (/^[a-zA-Z0-9_]+$/.test(inputValue)) {
              setSubject(inputValue);
            }
          }}
          pattern="[a-zA-Z0-9_]+"
          title="Only letters, numbers, and underscores are allowed"
          required
          style={{ margin: '20px', fontSize: '20px' }}
        />
      </label>
      <br />
      <button onClick={submitInput} className='faculty-button' style={{fontSize:'16px', height:'30px'}}>Mark Attendance</button><br /><br />
      {/* "Mark Holiday/Weekend" section */}
        <button onClick={openHolidayModal} className='faculty-button' style={{fontSize:'16px',height:'30px'}}>Mark Holiday/Weekend</button><br /><br />
      {/* Holiday/Weekend Modal */}
      {showHolidayModal && (
            <div>
              <label>
                Select Type:
                <select
                  value={holidayType}
                  onChange={(e) => setHolidayType(e.target.value)}
                  required
                  style={{ margin: '20px', fontSize: '20px' }}
                >
                  <option value="H">Holiday</option>
                  <option value="W">Weekend</option>
                </select>
              </label>
              <br />
              <label>
                Select Date:&emsp;
                <input
                  type="date"
                  value={holidayDate}
                  onChange={(e) => setHolidayDate(e.target.value)}
                />
              </label>
              <br />
              <br />&emsp;
              <button onClick={submitHoliday} className='faculty-button'>Submit</button>&emsp;
              <button onClick={closeHolidayModal} className='faculty-button'>Cancel</button>
            </div>
          )}

      {fetchAttempted && attendanceResults.length === 0 && department && semester && subject && (
        <div>
          <p>No students are enrolled in the specified department and semester.</p>
        </div>
      )}

      {attendanceResults.length > 0 && (
        <>
          <h2>Attendance Table</h2>

          {/* "Select All" option */}
          <label>
            Select All &ensp;
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
            />
          </label>

          <table className='take-attendance-table'>
            <thead>
              <tr>
                <th>Pin</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceResults.map((student, index) => (
                <tr key={index}>
                  <td>{student.s_id}</td>
                  <td>{student.sname}</td>
                  <td>
                    <input
                      type="checkbox"
                      id={`status${index}`}
                      checked={attendanceStatusArray[index] === 'P'}
                      onChange={() => updateStatus(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{textAlign:'center'}}>
            <button onClick={submitAttendance} className='faculty-button' style={{fontSize:'16px', height:'30px'}}>Submit</button>
          </div>

          <div>
            <p>Click this button to add Complete today's Attendance</p>
            <p>Note:-<span style={{color:'red'}}>select this only after taking all subjects Attendance</span></p>
            <button onClick={showDate} className='faculty-button'>Enter Date</button>
          </div>

          <div id="attendanceResult"></div>

          {/* "Enter Attendance Date" section */}
          {showDateInputAttendance && (
            <>
              <label htmlFor="attendanceDate">Enter Attendance Date:</label>
              <input
                type="date"
                id="attendanceDate"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
              />&emsp;
              <button onClick={submitAttendanceDate} className='faculty-button'>Submit Attendance Date</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TakeAttendance;
