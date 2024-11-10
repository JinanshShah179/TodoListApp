// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header style={headerStyle}>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <Link to="/login" style={linkStyle}>Login</Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/register" style={linkStyle}>Register</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main style={mainStyle}>
        <h1>Welcome to the Home Page</h1>
        <p>Click on Login or Register to proceed.</p>
      </main>

      <footer style={footerStyle}>
        <p>&copy; 2024 MyApp. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const headerStyle = {
  backgroundColor: '#282c34',
  padding: '10px 0',
  textAlign: 'center',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
};

const navItemStyle = {
  margin: '0 20px',
};

const linkStyle = {
  color: '#61dafb',
  textDecoration: 'none',
  fontSize: '18px',
};

const mainStyle = {
  padding: '20px',
  textAlign: 'center',
};

const footerStyle = {
  backgroundColor: '#282c34',
  padding: '10px 0',
  textAlign: 'center',
  color: '#fff',
  position: 'absolute',
  bottom: 0,
  width: '100%',
};

export default Home;
