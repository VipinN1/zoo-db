import React from 'react';
import './Donation.css'
//need to add functionality to save donations and user id

function Donation(){
  return (
    <div className="App">
      <header className="Header">
        <h1>Donate to Our Zoo</h1>
      </header>
      <main className="Main">
        <p>
          Thank you for considering donating to our zoo! Your donations help us provide the best care for our animals
          and maintain our facilities. Thank you for your support!
        </p>
        <p>
          To make a donation, please fill out the form below:
        </p>
        <form className="DonationForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="amount">Amount (USD):</label>
          <input type="number" id="amount" name="amount" min="1" required />
          <button type="submit">Donate</button>
        </form>
      </main>
      <footer className="Footer">
        <p>Thank you for supporting our zoo!</p>
      </footer>
    </div>
  );
}

export default Donation;