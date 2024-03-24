import Navbar from "./components/Navbar/Navbar"
import SignIn from "./components/SignIn/SignIn"
import Home from "./components/Home/Home"
import AboutUs from "./components/AboutUs/AboutUs"
import SignUp from "./components/SignUp/SignUp"
import CustomerProfile from "./components/CustomerProfile/CustomerProfile"
import EmployeeProfile from "./components/EmployeeProfile/EmployeeProfile"
import TicketBuy from "./components/TicketBuy/TicketBuy"
import TicketView from "./components/TicketView/TicketView"
import Donation from "./components/Donation/Donation"
import CustomerNavbar from "./components/Views/CustomerNavbar"
import EmployeeNavbar from "./components/Views/EmployeeNavbar"
import ManagerNavbar from "./components/Views/ManagerNavbar"
import ClockIn from "./components/ClockIn/ClockIn"
import AddEnclosureForm from "./components/AddEnclosureForm/AddEnclosureForm"
import DietForm from "./components/DietForm/DietForm"
import VeterinarianRecord from "./components/VeterinarianRecord/VeterinarianRecord"
import Orders from "./components/Orders/Orders"
import AddAnimal from "./components/AddAnimal/AddAnimal"
import AddSecurityForm from "./components/AddSecurityForm/AddSecurityForm"
import SecurityReport from "./components/SecurityReport/SecurityReport"
import EnclosureReport from "./components/EnclosureReport/EnclosureReport"
import AnimalReport from "./components/AnimalReport/AnimalReport"
import BusinessReport from "./components/BusinessReport/BusinessReport"
import './App.css'; 
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <> 
    
      
      <CustomerNavbar />
      <div className="container">
        <Routes>
          <Route path="/about-us" element={<AboutUs />} /> 
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/customer-profile" element={<CustomerProfile/>} />
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
          <Route path ="/animal-report" element={<AnimalReport />} />
          <Route path ="/business-report" element={<BusinessReport />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App