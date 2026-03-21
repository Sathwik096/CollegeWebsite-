import React, { useState } from 'react';
import PlacementOfficer from './PlacementOfficer.jsx';
import DiplomaPrograms from './DiplomaPrograms.jsx';
import MajorRecruiters from './MajorRecruiters.jsx';
import RecruitersGuide from './RecruitersGuide.jsx';
import StudentsGuide from './StudentsGuide.jsx';
import Contactus from './Contactus.jsx';

export default function PlacementsPage() {
    const [currentPage, setCurrentPage] = useState('PlacementOfficer');
  
    const handleMenuClick = (page) => {
      setCurrentPage(page);
    };
  
    return (
        <div className="placements-main-container row">
          {/* Left Column */}
          <div className="col-md-8">
            {currentPage === 'PlacementOfficer' && <PlacementOfficer />}
            {currentPage === 'DiplomaPrograms' && <DiplomaPrograms />}
            {currentPage === 'MajorRecruiters' && <MajorRecruiters />}
            {currentPage === 'RecruitersGuide' && <RecruitersGuide />}
            {currentPage === 'StudentsGuide' && <StudentsGuide />}
            {currentPage === 'Contactus' && <Contactus />}
          </div>
  
          {/* Right Column - Menus */}
          <div className="placement-menus col-md-3">
            <h2 style={{color:'hsl(240, 70%, 28%)'}}>Placement Cell</h2>
            <hr style={{color:'hsl(240, 50%, 50%)'}} />
            <ul className=" list-group">
              <li className="menuItem list-group-item" onClick={() => handleMenuClick('PlacementOfficer')}>
                Placement Officer
              </li>
              <li className="menuItem list-group-item" onClick={() => handleMenuClick('DiplomaPrograms')}>
                Diploma Programs Offered
              </li>
              <li className="menuItem list-group-item" onClick={() => handleMenuClick('MajorRecruiters')}>
                Major Recruiters
              </li>
              <li className="menuItem list-group-item" onClick={() => handleMenuClick('RecruitersGuide')}>
                For Recruiters
              </li>
              <li className="menuItem list-group-item" onClick={() => handleMenuClick('StudentsGuide')}>
                For Students
              </li>
              <li className="menuItem list-group-item" onClick={() => handleMenuClick('Contactus')}>
                Contact Us
              </li>
            </ul>
          </div>
        </div>
    );
  };
