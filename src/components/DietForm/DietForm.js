import React, { useState } from 'react';
import './DietForm.css';
import axios from 'axios';

function DietForm() {
  const [dietName, setDietName] = useState('');
  const [dietType, setDietType] = useState('');
  const [dietSchedule, setDietSchedule] = useState([]);
  const [scheduleInput, setScheduleInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Diet Name:', dietName);
    console.log('Diet Type:', dietType);
    console.log('Diet Schedule:', dietSchedule);

    setDietName('');
    setDietType('');
    setDietSchedule([]);
    setScheduleInput('');
  };

  const handleScheduleInputChange = (event) => {
    setScheduleInput(event.target.value);
  };

  const handleAddSchedule = () => {
    if (/^(0?[1-9]|1[0-2]):[0-5][0-9] [AP]M$/i.test(scheduleInput)) {
      setDietSchedule([...dietSchedule, scheduleInput]);
      setScheduleInput('');
    } else {
      alert('Please enter a valid time in format HH:MM AM/PM');
    }
    const data = {
      dietName: dietName,
      dietType: dietType,
      dietSchedule: dietSchedule
    };

    axios.post('http://localhost:5095/api/ZooDb/NewDiet', data)
      .then((res) =>{console.log(res); });
  };

  return (
    <div className="diet-form-container">
      <h2>Diet Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-diet-form">
          <label className='label-diet-form' htmlFor="dietName">Diet Name:</label>
          <input
            type="text"
            id="dietName"
            value={dietName}
            onChange={(e) => setDietName(e.target.value)}
            className="input-diet-form"
          />
        </div>
        <div className="form-group-diet-form">
          <label htmlFor="dietType">Diet Type:</label>
          <input
            type="text"
            id="dietType"
            value={dietType}
            onChange={(e) => setDietType(e.target.value)}
            className="input-diet-form"
          />
        </div>
        <div className="form-group-diet-form">
          <label htmlFor="dietSchedule">Diet Schedule:</label>
          <input
            type="text"
            id="dietSchedule"
            value={scheduleInput}
            onChange={handleScheduleInputChange}
            placeholder="Enter time in format HH:MM AM/PM"
            className="input-diet-form"
          />
          <button className='button-diet' type="button" onClick={handleAddSchedule}>Add Time</button>
        </div>
        <ul>
          {dietSchedule.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
        <button className='button-diet-2' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DietForm;
