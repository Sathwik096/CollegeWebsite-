import React, { useState } from 'react';
import FacultyManagement from './FacultyManagement.jsx';
import EventManagement from './EventManagement.jsx';
import AddStudent from './AddStudent.jsx';
import ViewStudent from './ViewStudent.jsx';
import UpdateAllSemestersPage from './UpdateSemester.jsx';

export default function FacultyDashboard() {
    const [currentPage, setCurrentPage] = useState('FacultyManagement');
    const [showStudentOptions, setShowStudentOptions] = useState(false);
  
    const handleMenuClick = (page) => {
      setCurrentPage(page);
    };

    const handlemenuclick = (page) => {
      if (page === 'studentManagement') {
        setShowStudentOptions((prev) => !prev);
      } else {
        setShowStudentOptions(false);
        setCurrentPage(page);
      }
    };
  
    return (
        <div className="admin-main-container row">
          {/* Left Column */}
          <div className="col-md-8">
            {currentPage === 'FacultyManagement' && <FacultyManagement />}
            {currentPage === 'EventManagement' && <EventManagement />}
            {currentPage === 'AddStudent' && <AddStudent />}
            {currentPage === 'ViewStudent' && <ViewStudent />}
            {currentPage === 'UpdateAllSemestersPage' && <UpdateAllSemestersPage />}
          </div>
  
          {/* Right Column - Menus */}
          <div className="placement-menus col-md-3">
            <h2 style={{color:'hsl(240, 70%, 28%)'}}>College management</h2>
            <hr style={{color:'hsl(240, 50%, 50%)'}} />
            <ul className="list-group">
              <li className="menuItem list-group-item" onClick={() => handleMenuClick('FacultyManagement')}>
                Faculty Management
              </li>
              <li className="menuItem list-group-item" onClick={() => handleMenuClick('EventManagement')}>
                Event Management
              </li>
              <li
            className="menuItem list-group-item"
            onClick={() => {
              handlemenuclick('studentManagement');
            }}
          >
            StudentManagement
          </li>
          {showStudentOptions && (
            <>
              <li
                className="menuItem list-group-item"
                onClick={() => {
                  setCurrentPage('AddStudent');
                }}
              >
                Add Student
              </li>
              <li
                className="menuItem list-group-item"
                onClick={() => {
                  setCurrentPage('ViewStudent');
                }}
              >
                View Student
              </li>
              <li
                className="menuItem list-group-item"
                onClick={() => {
                  setCurrentPage('UpdateAllSemestersPage');
                }}
              >
                Update Semester
              </li>
            </>
          )}
            </ul>
          </div>
        </div>
    );
  };
