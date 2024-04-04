import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ClockIn.css';

function ClockIn() {
  const [clockInTime, setClockInTime] = useState(null);
  const [clockOutTime, setClockOutTime] = useState(null);
  const [totalHoursWorked, setTotalHoursWorked] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedClockInTime = localStorage.getItem('clockInTime');
    if (storedClockInTime) {
      setClockInTime(new Date(storedClockInTime));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (clockInTime) {
        const currentTime = new Date();
        const diff = Math.abs(currentTime - clockInTime);
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const totalHours = hours + minutes / 60;
        setTotalHoursWorked(totalHours);
      }
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [clockInTime]);

  const handleClockIn = () => {
    const currentTime = new Date();
    setClockInTime(currentTime);
    setMessage('Clock-in successful');
    localStorage.setItem('clockInTime', currentTime); // Store clock-in time in localStorage
    console.log('Clock In Time:', currentTime);
  };

  const handleClockOut = () => {
    const currentTime = new Date();
    setClockOutTime(currentTime);

    if (clockInTime) {
      const diff = Math.abs(currentTime - clockInTime);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const totalHours = hours + minutes / 60;
      setTotalHoursWorked(totalHours);
      setMessage('Clock-out successful');

      // Send both employeeId and totalHoursWorked to backend here
      sendClockOutDataToBackend(totalHours);

      console.log('Clock Out Time:', currentTime);
      localStorage.removeItem('clockInTime'); // Clear stored clock-in time
    } else {
      setMessage('Please clock in before clocking out');
    }
  };

  const sendClockOutDataToBackend = (hoursWorked) => {
    console.log('Hours worked', hoursWorked);
    axios
      .post('/clock-out', { hoursWorked })
      .then((response) => {
        console.log('Clock out data sent to backend:', response.data);
      })
      .catch((error) => {
        console.error('Error sending clock out data to backend:', error);
      });
  };

  return (
    <div className='clock-in'>
      <h1 className='h1-clock=in'>Employee Clock In/Out</h1>
      <br></br>
      <div>
        <button onClick={handleClockIn}>Clock In</button>
        <button onClick={handleClockOut}>Clock Out</button>
      </div>
      <div>
        <p>Clock In Time: {clockInTime ? clockInTime.toLocaleString() : 'N/A'}</p>
        <p>Clock Out Time: {clockOutTime ? clockOutTime.toLocaleString() : 'N/A'}</p>
        <p>Total Hours Worked: {totalHoursWorked !== null ? totalHoursWorked.toFixed(2) + ' hours' : 'N/A'}</p>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ClockIn;
