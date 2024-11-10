import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 
import { Link } from 'react-router-dom'; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await axios.post('https://todolistapp-i76x.onrender.com/api/users/login', userData);
      localStorage.setItem('token', response.data.token); 
      toast.success('Login successful!');  
      setTimeout(() => {
        navigate('/todos');        
      }, 1000);
    } catch (error) {
      toast.error('Error logging in, please try again'); 
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/register" className="link">Register</Link>
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
          .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
          }

          .login-form {
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
};

export default Login;
