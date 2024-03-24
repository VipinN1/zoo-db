// SignIn.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SignIn.css'; // Import SignIn.css for styling

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-in logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
        <button type="submit" className="submit-button">Sign In</button>
      </form>
      <div className="signup-link">
        <p>Not already a user? <Link to="/sign-up">Sign up</Link></p>
      </div>
    </div>
  );
}

export default SignIn;
