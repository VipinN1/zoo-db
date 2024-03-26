import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import CustomerNavbar from './components/Views/CustomerNavbar';
import EmployeeNavbar from './components/Views/EmployeeNavbar';
import ManagerNavbar from './components/Views/ManagerNavbar';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import SignUp from './components/SignUp/SignUp';
import CustomerProfile from './components/CustomerProfile/CustomerProfile';
import EmployeeProfile from './components/EmployeeProfile/EmployeeProfile';
import TicketBuy from './components/TicketBuy/TicketBuy';
import TicketView from './components/TicketView/TicketView';
import Donation from './components/Donation/Donation';
import ClockIn from './components/ClockIn/ClockIn';
import VeterinarianRecord from './components/VeterinarianRecord/VeterinarianRecord';
import DietForm from './components/DietForm/DietForm';
import Orders from './components/Orders/Orders';
import AddAnimal from './components/AddAnimal/AddAnimal';
import AddEnclosureForm from './components/AddEnclosureForm/AddEnclosureForm';
import AddSecurityForm from './components/AddSecurityForm/AddSecurityForm';
import SecurityReport from './components/SecurityReport/SecurityReport';
import EnclosureReport from './components/EnclosureReport/EnclosureReport';
import AnimalReport from './components/AnimalReport/AnimalReport';
import BusinessReport from './components/BusinessReport/BusinessReport';
import './App.css';
import { Route, Routes, useNavigate} from 'react-router-dom';
import NavbarTemp from './components/Navbar/NavbarTemp';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (email, password) => {
    // Here you can handle the submission logic, such as sending data to App.js
    

    console.log('Email:', email);
    console.log('Password:', password);

    // Check email and password and set userRole accordingly
    if (email === 'customer@email.com' && password === 'customerpw') {
      setUserRole('customer');
      navigate('/');
    } else if (email === 'employee@email.com' && password === 'employeepw') {
      setUserRole('employee');
      navigate('/');
    } else if (email === 'manager@email.com' && password === 'managerpw') {
      setUserRole('manager');
      navigate('/');
    } else {
      // If email and password don't match any role, set userRole to empty string
      alert('email or password incorrect');
      setUserRole('');
    }

    // Set loggedIn to true after successful login
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    // Reset authentication status
    setLoggedIn(false);
    setUserRole('');
    // Navigate to sign-in page
    navigate('/sign-in');
  };



  return (
    <>
      <div className="container">
      {loggedIn ? (
        userRole === 'customer' ? <CustomerNavbar handleSignOut={handleSignOut} /> :
        userRole === 'employee' ? <EmployeeNavbar handleSignOut={handleSignOut} /> :
        userRole === 'manager' ? <ManagerNavbar handleSignOut={handleSignOut} /> :
  <     NavbarTemp />
      ) : (
        <NavbarTemp />
      )}

          <Routes>
          <Route path="/sign-in" element={<SignIn handleSignIn={handleSignIn} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          <Route path="/employee-profile" element={<EmployeeProfile />} />
          <Route path="/ticket-buy" element={<TicketBuy />} />
          <Route path="/ticket-view" element={<TicketView />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/clock-in" element={<ClockIn />} />
          <Route path="/veterinarian-record" element={<VeterinarianRecord />} />
          <Route path="/diet-entry" element={<DietForm />} />
          <Route path="/add-enclosure-form" element={<AddEnclosureForm />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/add-animal" element={<AddAnimal />} />
          <Route path="/add-security-form" element={<AddSecurityForm />} />
          <Route path="/security-report" element={<SecurityReport />} />
          <Route path="/enclosure-report" element={<EnclosureReport />} />
          <Route path="/animal-report" element={<AnimalReport />} />
          <Route path="/business-report" element={<BusinessReport />} />
        </Routes>
      </div>
    </>
  );
}

export default App;