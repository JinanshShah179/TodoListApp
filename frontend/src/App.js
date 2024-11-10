import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import TodoList from './pages/TodoList';
import Register from './pages/Register';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todos" element={<TodoList />} /> {/* Todo List Page */}
        <Route path="/" element={<Home />} /> {/* Assuming you have a Home component */}
      </Routes>
    </Router>
  );
}

export default App;
