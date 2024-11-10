const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors=require('cors');
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }
  
  dotenv.config();
  connectDB();
  
  const app = express();
  app.use(express.json());
  app.use(cors(corsOptions))

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);
app.use(errorMiddleware);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
