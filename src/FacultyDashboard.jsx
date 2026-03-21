import React, { useState } from 'react';
import TakeAttendance from './TakeAttendance';

const FacultyDashboard = () => {
  const [currentPage, setCurrentPage] = useState('TakeAttendance');

  return (
    <div className="placements-main-container row">
      {/* Left Column */}
      <div className="col-md-8">
        {currentPage === 'TakeAttendance' && <TakeAttendance />}
      </div>

      {/* Right Column - Menus */}
      <div className="placement-menus col-md-3">
        <h2 style={{ color: 'hsl(240, 70%, 28%)' }}>Student Attendance</h2>
        <hr style={{ color: 'hsl(240, 50%, 50%)' }} />
        <ul className=" list-group">
          <li
            className="menuItem list-group-item"
            onClick={() => {
              setCurrentPage('TakeAttendance');
            }}
          >
            Take Attendance
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FacultyDashboard;
