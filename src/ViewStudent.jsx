import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditStudent from './EditStudent';
import * as XLSX from 'xlsx'; // Import xlsx library

const ViewStudent = () => {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [deleteModal, setDeleteModal] = useState({ show: false, studentId: null });
  const [editModal, setEditModal] = useState({ show: false, studentId: null, studentDetails: null });

  const departments = ['AU', 'CIV', 'CSE', 'EEE', 'ECE', 'MEC'];

  const handleSemesterChange = (event) => {
    const selectedSemester = event.target.value;
    setSelectedSemester(selectedSemester);
  };

  const handleEdit = (studentId, studentDetails) => {
    setEditModal({ show: true, studentId, studentDetails });
  };

  const handleEditModalHide = () => {
    setEditModal({ show: false, studentId: null, studentDetails: null });
  };

  const handleEditSuccess = () => {
    handleEditModalHide();
    fetchStudentDetails();
    alert("Student Details Edited Successfully");
  };

  const handleDepartmentChange = (event) => {
    const selectedDepartment = event.target.value;
    setSelectedDepartment(selectedDepartment);
  };

  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getstudents', {
        params: {
          semester: selectedSemester,
          department: selectedDepartment,
        },
      });

      if (response.status === 200) {
        setStudents(response.data);
        setError(null);
      } else {
        console.error('Error in fetching details', response.statusText);
        setError('Error fetching student details');
      }
    } catch (error) {
      console.error('Error in fetching details', error);
      setError('Error fetching student details');
    }
  };

  const handleDelete = async (studentId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/deletestudent/${studentId}`);

      if (response.status === 200) {
        setDeleteModal({ show: false, studentId: null });
        fetchStudentDetails();
      } else {
        console.error('Error in deleting student', response.statusText);
      }
    } catch (error) {
      console.error('Error in deleting student', error);
    }
  };

  const handleDownloadExcel = () => {
    alert('Downloading')
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    XLSX.writeFile(workbook, 'students.xlsx');
    alert('Students data downloaded successfully!');
  };

  useEffect(() => {
    if (selectedSemester && selectedDepartment) {
      fetchStudentDetails();
    }
  }, [selectedSemester, selectedDepartment]);

  return (
    <>
      <div className='student-attendance-container'>
        <div className='row'>
          <div className='col-md-5'>
            <label htmlFor='department' className='input-label'>
              Select Department:
            </label>
            <select
              className='form-control input-field'
              id='department'
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              <option value=''>Select</option>
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
          <div className='col-md-5'>
            <label htmlFor='semester' className='input-label'>
              Enter Batch:
            </label>
            <input
              type='text'
              id='semester'
              value={selectedSemester}
              onChange={handleSemesterChange}
              placeholder='example:21'
            />
          </div>
          <div className='col-md-2'>
            <button
              type='button'
              className='btn btn-primary mt-4'
              onClick={fetchStudentDetails}
            >
              Submit
            </button>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='table-header'>Student Details:</h3>
          {error ? (
            <p className='text-danger'>{error}</p>
          ) : Array.isArray(students) && students.length > 0 ? (
            <div className='table-responsive'>
              <table className='faculty-table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Father's Name</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Semester</th>
                    <th>Department ID</th>
                    <th>Aadhar</th>
                    <th>Email</th>
                    <th colSpan={2}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.s_id}>
                      <td>{student.s_id}</td>
                      <td>{student.sname}</td>
                      <td>{student.DOB}</td>
                      <td>{student.s_father}</td>
                      <td>{student.phone_no}</td>
                      <td>{student.address}</td>
                      <td>{student.semester}</td>
                      <td>{student.department}</td>
                      <td>{student.aadhaar}</td>
                      <td>{student.email}</td>
                      <td>
                        <button
                          className='dark'
                          onClick={() => setDeleteModal({ show: true, studentId: student.s_id })}
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <button
                          className='dark'
                          onClick={() => handleEdit(student.s_id, student)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No student details available.</p>
          )}
        </div>
        
        {/* New button for downloading Excel */}
        <button
          type='button'
          className='btn btn-success mt-4'
          onClick={handleDownloadExcel}
        >
          Download students
        </button>
      </div>

      {/* Delete Modal */}
      {deleteModal.show && (
        <Modal show={true} onHide={() => setDeleteModal({ show: false, studentId: null })}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete this student?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => handleDelete(deleteModal.studentId)}>
              Delete
            </Button>
            <Button variant="secondary" onClick={() => setDeleteModal({ show: false, studentId: null })}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <h1>{console.log('Edit Modal State:', editModal)}</h1>
      
      {/* Edit Modal */}
      <EditStudent
        show={editModal.show}
        studentId={editModal.studentId}
        studentDetails={editModal.studentDetails}
        onHide={handleEditModalHide}
        onEdit={handleEditSuccess}
      />
    </>
  );
};

export default ViewStudent;