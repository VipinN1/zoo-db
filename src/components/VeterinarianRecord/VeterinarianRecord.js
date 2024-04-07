import React, { useState } from 'react';
import './VeterinarianRecord.css';

function VeterinarianRecord() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [medications, setMedications] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
      alert('Please enter valid positive numbers for weight and height.');
      return;
    }

    const medicationsArray = medications.split(',').filter((med) => med.trim() !== '');

    console.log('Weight:', weight);
    console.log('Height:', height);
    console.log('Medications:', medicationsArray);
    console.log('Diagnosis:', diagnosis);

    setWeight('');
    setHeight('');
    setMedications('');
    setDiagnosis('');
  };

  return (
    <div className="veterinarian-records-container">
      <h2>Veterinarian Records</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-vet">
          <label className="label-vet" htmlFor="weight">Weight (lbs):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(Math.max(0, parseFloat(e.target.value)))}
            min="0"
            step="0.01"
            className="input-vet"
          />
        </div>
        <div className="form-group-vet">
          <label className="label-vet" htmlFor="height">Height (in):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(Math.max(0, parseFloat(e.target.value)))}
            min="0"
            step="0.01"
            className="input-vet"
          />
        </div>
        <div className="form-group-vet">
          <label className="label-vet" htmlFor="medications">Medications:</label>
          <textarea
            id="medications"
            value={medications}
            onChange={(e) => setMedications(e.target.value)}
            placeholder="Enter medications separated by commas"
            className="input-vet"
          />
        </div>
        <div className="form-group-vet">
          <label className="label-vet" htmlFor="diagnosis">Diagnosis:</label>
          <textarea
            id="diagnosis"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            placeholder="Enter diagnosis"
            className="input-vet"
          />
        </div>
        <button className="button-vet" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VeterinarianRecord;
