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
import './App.css'; 
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <> 
      <Navbar />
      

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
        </Routes>
      </div>
      
    </>
  )
}

export default App