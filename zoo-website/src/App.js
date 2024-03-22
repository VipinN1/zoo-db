import Navbar from "./components/Navbar/Navbar"
import SignIn from "./components/SignIn/SignIn"
import Home from "./components/Home/Home"
import AboutUs from "./components/AboutUs/AboutUs"
import SignUp from "./components/SignUp/SignUp"
import CustomerProfile from "./components/CustomerProfile/CustomerProfile"
import DataEntryForm from "./components/DataEntryForm/DataEntryForm"
import EmployeeProfile from "./components/EmployeeProfile/EmployeeProfile"
import TicketBuy from "./components/TicketBuy/TicketBuy"
import TicketView from "./components/TicketView/TicketView"
import Donation from "./components/Donation/Donation"
import CustomerNavbar from "./components/Views/CustomerNavbar"
import EmployeeNavbar from "./components/Views/EmployeeNavbar"
import ManagerNavbar from "./components/Views/ManagerNavbar"
import ClockIn from "./components/ClockIn/ClockIn"
import AddEnclosureForm from "./components/AddEnclosureForm/AddEnclosureForm"
import './App.css'; 
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <> 
    
      
      <EmployeeNavbar />
      <div className="container">
        <Routes>
          <Route path="/about-us" element={<AboutUs />} /> 
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/customer-profile" element={<CustomerProfile/>} />
          <Route path="/employee-profile" element={<EmployeeProfile />} />
          <Route path="/data-entry" element={<EmployeeProfile />} />
          <Route path="/ticket-buy" element={<TicketBuy />} />
          <Route path="/ticket-view" element={<TicketView />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/clock-in" element={<ClockIn />} />
          <Route path="/enclosure-entry" element={<AddEnclosureForm />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App