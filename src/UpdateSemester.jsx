import React, { useState } from 'react';
import axios from 'axios';

const UpdateAllSemestersPage = () => {
  const [updateStatus, setUpdateStatus] = useState(null);

  const handleUpdateAllSemesters = async () => {
    // Display a confirmation dialog
    const confirmed = window.confirm('Are you sure you want to update all semesters?');

    // If the user confirms, proceed with the update
    if (confirmed) {
      try {
        // Send request to update all semesters except semester 6
        const response = await axios.post('http://localhost:3000/api/updateAllSemesters');

        // Log the response for confirmation
        console.log(response.data);
        setUpdateStatus('Successfully updated all semesters.');
      } catch (error) {
        console.error('Error updating student semesters:', error);
        setUpdateStatus('Failed to update semesters. Please try again.');
      }
    } else {
      // If the user cancels, do nothing or show a message
      setUpdateStatus('Update canceled.');
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', width: '100%', marginTop: '30px' }}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ color: '#333', padding: '20px' }}>Update All Semesters</h1>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleUpdateAllSemesters}
        >
          Update All Semesters
        </button>

        {updateStatus && (
          <p
            style={{
              marginTop: '20px',
              fontSize: '18px',
              color: updateStatus.includes('Successfully') ? 'green' : 'red',
            }}
          >
            {updateStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default UpdateAllSemestersPage;
