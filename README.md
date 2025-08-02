# TodoApp - MERN Stack Task Management Application

A full-stack todo application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring JWT authentication, task management, and sorting capabilities.

## Features

- **User Authentication**: JWT-based login and registration system
- **Task Management**: Create, read, update, and delete tasks
- **Smart Sorting**: Sort tasks by creation date, update date, title, priority, or completion status
- **Priority Levels**: Set task priorities (Low, Medium, High)
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Protected Routes**: Secure task management with authentication middleware

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todoapp
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/todoapp
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
   PORT=5000
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB**
   Make sure MongoDB is running on your system.

2. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

3. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

4. **Access the Application**
   Open your browser and navigate to `http://localhost:5173`

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info

### Task Routes (Protected)
- `GET /api/tasks` - Get all tasks for authenticated user
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### Query Parameters for Tasks
- `sortBy`: Field to sort by (createdAt, updatedAt, title, priority, completed)
- `order`: Sort order (asc, desc)

## Project Structure

```
todoapp/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── auth.js
│   ├── .env
│   ├── index.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── PrivateRoute.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Signup.jsx
    │   │   ├── Tasks.jsx
    │   │   └── AddTask.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.js
```

## Usage

1. **Register/Login**: Create a new account or login with existing credentials
2. **Dashboard**: View your personalized dashboard with navigation options
3. **Add Tasks**: Click "Add Task" to create new tasks with title, description, and priority
4. **View Tasks**: Access "My Tasks" to see all your tasks with sorting options
5. **Task Management**: Mark tasks as complete/incomplete or delete them
6. **Sorting**: Use the sorting controls to organize tasks by various criteria

## Features in Detail

### Authentication
- Secure user registration and login
- JWT token-based authentication
- Password hashing with bcrypt
- Protected routes that require authentication
- Automatic token validation and user session management

### Task Management
- Create tasks with title, description, and priority levels
- Update task completion status
- Delete tasks with confirmation
- Real-time task updates

### User Interface
- Clean, modern design with Tailwind CSS
- Responsive layout for mobile and desktop
- Intuitive navigation with username display
- Loading states and error handling
- Visual feedback for user actions

### Sorting & Organization
- Sort by creation date (newest/oldest first)
- Sort by last update date
- Sort alphabetically by title
- Sort by priority level
- Sort by completion status
- Ascending/descending order options

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.