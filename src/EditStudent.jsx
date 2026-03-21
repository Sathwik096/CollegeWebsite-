import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditStudent = ({ show, studentId, studentDetails, onHide, onEdit }) => {
  const [editedDetails, setEditedDetails] = useState({
    sname: '',
    DOB: '',
    s_father: '',
    phone_no: '',
    address: '',
    semester: '',
    department: '',
    aadhaar: '',
    email: '',
  });

  useEffect(() => {
    // Update editedDetails when studentDetails change
    if (studentDetails) {
      setEditedDetails({
        sname: studentDetails.sname || '',
        DOB: studentDetails.DOB || '',
        s_father: studentDetails.s_father || '',
        phone_no: studentDetails.phone_no || '',
        address: studentDetails.address || '',
        semester: studentDetails.semester || '',
        department: studentDetails.department || '',
        aadhaar: studentDetails.aadhaar || '',
        email: studentDetails.email || '',
      });
    }
  }, [studentDetails]);

  const handleEdit = async () => {
    try {
      console.log('Edit button clicked');
      const response = await axios.put(`http://localhost:3000/editstudent/${studentId}`, editedDetails);

      if (response.status === 200) {
        onEdit(); // Notify parent component about the edit
        onHide(); // Close the modal after successful edit
      } else {
        console.error('Error in editing student', response.statusText);
      }
    } catch (error) {
      console.error('Error in editing student', error);
    }
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Student Details</h5>
            <button type="button" className="close" onClick={onHide}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Your form content */}
            <form>
            <div className='form-group'>
              <label htmlFor='sname'>Student Name:</label>
              <input
                type='text'
                className='form-control'
                id='sname'
                value={editedDetails.sname}
                onChange={(e) => setEditedDetails({ ...editedDetails, sname: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='DOB'>Date of Birth:</label>
              <input
                type='text'
                className='form-control'
                id='DOB'
                value={editedDetails.DOB}
                onChange={(e) => setEditedDetails({ ...editedDetails, DOB: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='s_father'>Father's Name:</label>
              <input
                type='text'
                className='form-control'
                id='s_father'
                value={editedDetails.s_father}
                onChange={(e) => setEditedDetails({ ...editedDetails, s_father: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone_no'>Phone Number:</label>
              <input
                type='text'
                className='form-control'
                id='phone_no'
                value={editedDetails.phone_no}
                onChange={(e) => setEditedDetails({ ...editedDetails, phone_no: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='address'>Address:</label>
              <input
                type='text'
                className='form-control'
                id='address'
                value={editedDetails.address}
                onChange={(e) => setEditedDetails({ ...editedDetails, address: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='semester'>Semester:</label>
              <input
                type='text'
                className='form-control'
                id='semester'
                value={editedDetails.semester}
                onChange={(e) => setEditedDetails({ ...editedDetails, semester: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='department'>Department:</label>
              <input
                type='text'
                className='form-control'
                id='department'
                value={editedDetails.department}
                onChange={(e) => setEditedDetails({ ...editedDetails, department: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='aadhaar'>Aadhar:</label>
              <input
                type='text'
                className='form-control'
                id='aadhaar'
                value={editedDetails.aadhaar}
                onChange={(e) => setEditedDetails({ ...editedDetails, aadhaar: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                type='text'
                className='form-control'
                id='email'
                value={editedDetails.email}
                onChange={(e) => setEditedDetails({ ...editedDetails, email: e.target.value })}
              />
            </div>
            {/* Add similar blocks for other input fields */}
          </form> 


          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleEdit}>
              Save Changes
            </button>
            <button type="button" className="btn btn-secondary" onClick={onHide}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;



 