import './App.css';
import NavBar from './NavBar.js';
import HomePage from './HomePage.js';
import FooterPart from './footerPart.js';
import ComputerPage from './ComputerPage.jsx';
import CivilPage from './CivilPage.jsx';
import ElectricalPage from './ElectricalPage.jsx';
import AutomobilePage from './AutomobilePage.jsx';
import ElectronicsAndCommunicationPage from './ElectronicsAndCommunicationPage.jsx';
import MechanicalPage from './MechanicalPage.jsx';
import PharmacyPage from './PharmacyPage.jsx';
import EventsPage from './EventsPage.jsx';
import PlacementsPage from './PlacementsPage.jsx';
import ViewAttendance from './ViewAttendance.jsx';
import Facultypage from './Facultypage.jsx';
import FacultyLogin from './FacultyLogin.jsx';
import FacultyDashboard from './FacultyDashboard.jsx';
import AdminLogin from './LoginPage.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import Contactus from './Contactus.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>  
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ComputerPage" element={<ComputerPage/>}/>
        <Route path="/CivilPage" element={<CivilPage/>}/>
        <Route path="/AutomobilePage" element={<AutomobilePage/>}/>
        <Route path="/PharmacyPage" element={<PharmacyPage/>}/>
        <Route path="/ElectricalPage" element={<ElectricalPage/>}/>
        <Route path="/ElectronicsAndCommunicationPage" element={<ElectronicsAndCommunicationPage/>}/>
        <Route path="/MechanicalPage" element={<MechanicalPage/>}/>
        <Route path="/EventsPage" element={<EventsPage/>}/>
        <Route path="/PlacementsPage" element={<PlacementsPage/>}/>
        <Route path="/ViewAttendance" element={<ViewAttendance/>}/>
        <Route path="/Facultypage" element={<Facultypage/>}/>
        <Route path="/FacultyLogin" element={<FacultyLogin/>}/>
        <Route path="/FacultyDashboard" element={<FacultyDashboard/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
      </Routes>
      <FooterPart/>
    </Router>
    </>
  );
}

export default App;
