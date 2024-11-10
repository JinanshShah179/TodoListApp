// src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import { Link } from 'react-router-dom'; 
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', userData);
      toast.success('Registration successful!'); 
      setTimeout(() => {
        navigate('/login');         
      }, 2000);
    } catch (error) {
      toast.error('Error registering user. Please try again!'); 
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Register</button>
        </form>

        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/login" className="link">Login</Link>
        </div>
      </div>

      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar 
        newestOnTop 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />

      <style>
        {`
          .register-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
          }

          .register-form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
          }

          h2 {
            text-align: center;
            color: #333;
          }

          input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }

          button {
            width: 100%;
            padding: 12px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }

          button:hover {
            background-color: #45a049;
          }

          .links {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
          }

          .link {
            text-decoration: none;
            color: #4caf50;
            font-size: 14px;
          }

          .link:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
}

export default Register;
