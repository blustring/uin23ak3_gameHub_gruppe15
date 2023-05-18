import React, { useState } from 'react';
import sanityClient from './sanityClient';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call a function to check the user's credentials
    const loggedIn = await login(email);
    if (loggedIn) {
      onLogin();
    }
  };

  const login = async (email) => {
    // Retrieve the user data from Sanity based on the provided email
    const query = `*[_type == "user" && email == $email]`;
    const params = { email };
    const result = await sanityClient.fetch(query, params);

    if (result.length === 0) {
      // User not found
      console.log('User not found');
      return false;
    } else {
      const user = result[0];
      // Lagre til localStorage (user)
      // Husk lagre det som (key => value), hvor key er "user"

      // Simulate successful login for demonstration purposes
      console.log('Login successful');
      return true;
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
