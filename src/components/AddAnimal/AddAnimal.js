import React, { useState } from 'react';
import './AddAnimal.css';

function AddAnimal() {
  const [animalName, setAnimalName] = useState('');
  const [animalSpecies, setAnimalSpecies] = useState('');
  const [animalGender, setAnimalGender] = useState('');
  const [animalDoB, setAnimalDoB] = useState('');
  const [animalEndangered, setAnimalEndangered] = useState('No');
  const [animalOrigin, setAnimalOrigin] = useState('');
  const [animalLifeStage, setAnimalLifeStage] = useState('');
  const [animalDoA, setAnimalDoA] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Get current date for Animal DoA
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    
    // Use functional form of setState to ensure you're working with the latest state value
    setAnimalDoA(prevDoA => formattedDate);
  
    console.log('Animal Name:', animalName);
    console.log('Animal Species:', animalSpecies);
    console.log('Animal Gender:', animalGender);
    console.log('Animal DoB:', animalDoB);
    console.log('Is Animal Endangered:', animalEndangered);
    console.log('Animal Origin:', animalOrigin);
    console.log('Animal Life Stage:', animalLifeStage);
    console.log('Animal DoA:', formattedDate);
  
    // Implement backend logic here to send the data inputs to the backend
  };
  

  return (
    <div className="add-animal-container">
      <h2>Add Animal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-animal">
          <label htmlFor="animalName">Animal Name:</label>
          <input
            type="text"
            id="animalName"
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
            required
          />
        </div>
        <div className="form-group-animal">
          <label htmlFor="animalSpecies">Animal Species:</label>
          <input
            type="text"
            id="animalSpecies"
            value={animalSpecies}
            onChange={(e) => setAnimalSpecies(e.target.value)}
            required
          />
        </div>
        <div className="form-group-animal">
          <label htmlFor="animalGender">Animal Gender:</label>
          <input
            type="text"
            id="animalGender"
            value={animalGender}
            onChange={(e) => setAnimalGender(e.target.value)}
            required
          />
        </div>
        <div className="form-group-animal">
          <label htmlFor="animalDoB">Animal DoB:</label>
          <input
            type="date"
            id="animalDoB"
            value={animalDoB}
            onChange={(e) => setAnimalDoB(e.target.value)}
            required
          />
        </div>
        <div className="form-group-animal">
          <label htmlFor="animalEndangered">Is Animal Endangered?</label>
          <select
            id="animalEndangered"
            value={animalEndangered}
            onChange={(e) => setAnimalEndangered(e.target.value)}
            required
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div className="form-group-animal">
          <label htmlFor="animalOrigin">Animal Origin:</label>
          <input
            type="text"
            id="animalOrigin"
            value={animalOrigin}
            onChange={(e) => setAnimalOrigin(e.target.value)}
            required
          />
        </div>
        <div className="form-group-animal">
          <label htmlFor="animalLifeStage">Animal Life Stage:</label>
          <input
            type="text"
            id="animalLifeStage"
            value={animalLifeStage}
            onChange={(e) => setAnimalLifeStage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddAnimal;
