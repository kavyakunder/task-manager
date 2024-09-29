# Task Manager Application

This is a task manager application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to create, read, update, and delete tasks, making it easy to manage tasks efficiently.

## Features

- User authentication (register and login)
- Create, read, update, and delete tasks
- Filter tasks by status (completed/incomplete)
- Responsive design for mobile and desktop
- Real-time updates using WebSocket (if implemented)

## Technologies Used

- **MongoDB**: NoSQL database for storing task data.
- **Express.js**: Web framework for Node.js to handle API requests.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side development.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud-based)

### Clone the Repository

```
git clone https://github.com/yourusername/task-manager.git
cd task-manager
Backend Setup
Navigate to the backend directory:



cd backend
Install dependencies:



npm install
Create a .env file in the backend directory and add your MongoDB connection string:

.env
MONGODB_URI=mongodb://localhost:27017/task-manager


Start the server:
npm start


Frontend Setup
Navigate to the frontend directory:

cd ../frontend
Install dependencies:



npm install
Start the React application:



npm start