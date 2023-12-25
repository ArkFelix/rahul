import React, { useState } from 'react';
import '../styles/AuthForm.css'; // Adjust the path as necessary
import { login, signup } from '../services/firebaseConfig';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      // Handle successful signup
    } catch (error) {
      // Handle signup error
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
      <form onSubmit={handleLogin}>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default AuthForm;
