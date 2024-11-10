import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://todolistapp-i76x.onrender.com/api/todos', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();

    if (!newTodo) return; 

    try {
      const response = await axios.post(
        'https://todolistapp-i76x.onrender.com/api/todos',
        { text: newTodo },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      setTodos([...todos, response.data]); 
      setNewTodo(''); 
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo._id); 
    setEditText(todo.text);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();

    if (!editText) return; 

    try {
      const response = await axios.put(
        `https://todolistapp-i76x.onrender.com/api/todos/${editTodo}`,
        { text: editText },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      setTodos(
        todos.map((todo) => (todo._id === editTodo ? response.data : todo))
      ); 
      setEditTodo(null); 
      setEditText(''); 
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`https://todolistapp-i76x.onrender.com/api/todos/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setTodos(todos.filter((todo) => todo._id !== id)); 
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); 
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>

      <form onSubmit={handleAddTodo} className="add-todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search todos..."
        />
      </div>

      <table className="todo-table">
        <thead>
          <tr>
            <th>Todo</th>
            <th className='action-class'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo._id}>
              <td>
                {editTodo === todo._id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  todo.text
                )}
              </td>
              <td>
                {editTodo === todo._id ? (
                  <button onClick={handleSaveEdit}>Save</button>
                ) : (
                  <button onClick={() => handleEditTodo(todo)}>Edit</button>
                )}
                <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>
        {`
          .todo-container {
            padding: 20px;
            font-family: Arial, sans-serif;
            position: relative;
          }

          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          h2 {
          text-align:center;
            color: #333;
            margin-top:60px;
            font-size: 24px;
          }

          .logout-btn {
            width:10%;
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: #d32f2f; /* Red color */
            color: white;
            padding: 8px 16px;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            font-size: 22px;
          }

          .logout-btn:hover {
            background-color: #c62828;
          }

          .add-todo-form {
            display: flex;
            justify-content:center;
            margin-bottom: 20px;
          }

          .add-todo-form input {
            width: 35%;
            padding: 15px;
            margin-right: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
          }

          .add-todo-form button {
            width:10%;
            padding: 0 !important;
            background-color: #4caf50; /* Green color */
            color: white;
            border: 2px solid black;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          }

          .add-todo-form button:hover {
            background-color: #388e3c;
          }
        .search-container{
        display:flex;
        justify-content:center;
        }
          /* Search input */
          .search-container input {
          padding:13px 0;
          margin-left:-15px;
            margin-bottom: 20px;
            width: 25%;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          /* Table Styling */
          .todo-table {
            border-collapse: collapse;
            margin-top: 20px;
          }

          .todo-table th,
          .todo-table td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
          }

          .todo-table th {
            background-color: #4caf50;
            color: white;
          }

          .todo-table td {
            background-color: #fff;
          }
          
          .action-class {
            width: 30%;
          }

          .todo-table td button {
            padding: 5px 10px;
            border-radius: 4px;
            margin: 0 5px;
            cursor: pointer;
            font-size: 14px;
          }

          .todo-table td button:nth-child(1) {
            background-color: #ffa500;
            color: white;
            width:50%;
            margin-bottom:20px;
            margin-left:50px;
          }

          .todo-table td button:nth-child(2) {
            background-color: #f44336;
            color: white;
            width:50%;
            margin-left:50px;
          }

          .todo-table td button:hover {
            opacity: 0.8;
          }
            .todo-table{
            width:60%;
            margin: 0 auto;
            }
          .todo-table td input {
            width: 80%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default TodoList;
