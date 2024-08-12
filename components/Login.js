import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Ensure you import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        setSuccessMessage('Login successful! Redirecting...');

        // Redirect based on email
        if (email === 'admin@gmail.com' || email==="admin2@gmail.com") {
          setTimeout(() => {
            navigate('/inventory'); // Redirect to the inventory page
          }, 1000);
        } else {
          setTimeout(() => {
            navigate('/medicinepage'); // Redirect to the medicine page
          }, 1000);
        }
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Login failed.');
      } else {
        setErrorMessage('Login failed: Network error or server not responding.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              aria-describedby="email-error"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              aria-describedby="password-error"
            />
          </label>
          <button type="submit" disabled={loading} className='button-l'>
            {loading ? 'Loading...' : 'Login'}
          </button>
          {successMessage && (
            <p id="login-success" className="success-message" aria-live="assertive">
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p id="login-error" className="error-message" aria-live="assertive">
              {errorMessage}
            </p>
          )}
          <p className="login-link">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
