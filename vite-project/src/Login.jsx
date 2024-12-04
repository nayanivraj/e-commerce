import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after login
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigation hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming the API sends a token on successful login
        localStorage.setItem('token', data.token); // Store token in localStorage
        navigate('/home'); // Navigate to the dashboard
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 p-0 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: '#f7f9fc' }}
    >
      <div
        className="p-4 rounded-4 shadow-lg"
        style={{ backgroundColor: '#ffffff', maxWidth: '450px', width: '100%' }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold">Log In</h2>
          <p className="text-muted">Access your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="bi bi-person text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="bi bi-lock text-muted"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100 py-2 mb-2">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
