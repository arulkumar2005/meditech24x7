import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'; 

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [failedMessage, setFailedMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-zA-Z])(?=.*\d).*$/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setFailedMessage('Invalid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setFailedMessage('Password must include both letters and numbers.');
      return;
    }

    if (password !== confirmPassword) {
      setFailedMessage('Passwords do not match.');
      return;
    }

    if (!termsAccepted) {
      setFailedMessage('You must accept the terms and conditions.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/api/users/signup', {
        firstName,
        lastName,
        email,
        password,
      });

      console.log('Response data:', response.data);
      setSuccessMessage('Sign-up successful! Redirecting to login page...');
      setTimeout(() => {
        navigate('/login'); 
      }, 1000);
    } catch (error) {
      if (error.response) {
        console.log('Error data:', error.response.data);
        setFailedMessage(error.response.data.message || 'Sign-up failed.');
      } else if (error.request) {
        console.error('Error request:', error.request);
        setFailedMessage('Sign-up failed: Network error or server not responding.');
      } else {
        console.error('Error message:', error.message);
        setFailedMessage('Sign-up failed: An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="centered-form">
        <form className="sign-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group1">
            <label htmlFor="firstName">
              First Name
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="Enter your first name"
              />
            </label>
          </div>
          <div className="form-group1">
            <label htmlFor="lastName">
              Last Name
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Enter your last name"
              />
            </label>
          </div>
          <div className="form-group1">
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div className="form-group1">
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </label>
          </div>
          <div className="form-group1">
            <label htmlFor="confirmPassword">
              Confirm Password
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
              />
            </label>
          </div>
          <div className="form-group1">
            <label className="terms-checkbox">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="form-check-input"
              />
              <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="link-styl">I accept the terms and conditions</a>.
            </label>
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
          {successMessage && <p className="text-success text-center">{successMessage}</p>}
          {failedMessage && <p className="text-danger text-center">{failedMessage}</p>}
          <p className="text-center">
            Already have an account? <Link to="/login" className="link-styl">Log in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
