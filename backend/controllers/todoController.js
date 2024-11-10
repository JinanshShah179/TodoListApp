const Todo = require('../models/todoModel');

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.addTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      text: req.body.text,
      completed: false,
      user: req.user.id,
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    todo.text = req.body.text;
    todo.completed = req.body.completed;
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteTodo = async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);  
      if (todo.user.toString() !== req.user.id.toString()) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      await Todo.findByIdAndDelete(req.params.id);
      res.json({ message: 'Todo deleted' });
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: 'Server Error' });
    }
  };
  