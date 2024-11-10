# Todo List Application

This is a full-stack Todo List application with a **React** frontend and **Node.js/Express** backend. It allows users to create, edit, delete, and search todos. The application also includes user authentication, enabling secure access to the list of todos. The project is successfully deployed on Vercel.

## Features

- User Authentication (Login/Logout)
- Create, Edit, Delete Todos
- Search Todos
- Responsive Design
- JWT-based authentication

## Live Demo

The application is live on Vercel: [View the live app here](https://todo-list-app-peach-ten.vercel.app/).

## Sample Username and Password
email : test@gmail.com
password : 123

## Project Structure

```plaintext
TODO
├── frontend           # React app files
└── backend            # Backend files (Node.js, Express)

Installation Steps
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install Dependencies

Frontend:

bash
Copy code
cd frontend
npm install
Backend:

bash
Copy code
cd ../backend
npm install
Setting Up Environment Variables
Frontend: In the frontend directory, create a .env file and add the following:

plaintext
Copy code
REACT_APP_API_URL=http://localhost:5000/api
Backend: In the backend directory, create a .env file and add the following:

plaintext
Copy code
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Running the Application Locally
Start the Backend Server

In the backend directory:

bash
Copy code
npm start
The backend server will start on http://localhost:5000.

Start the Frontend Application

Open a new terminal, navigate to the frontend directory, and start the frontend:

bash
Copy code
npm start
The frontend app will start on http://localhost:3000.

Access the Application

Open your browser and go to http://localhost:3000.

Usage
Register or log in to manage your todos.
Add, edit, delete, and search todos through the user interface.
