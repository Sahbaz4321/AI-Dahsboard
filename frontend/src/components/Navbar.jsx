import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold hover:text-blue-200">
              TodoApp
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="hover:text-blue-200 px-3 py-2 rounded-md transition-colors"
            >
              Home
            </Link>

            {isAuthenticated ? (
              <>
                {/* Greeting */}
                <span className="text-blue-200">
                  Hello @{user?.username}
                </span>

                {/* Add Task Link */}
                <Link
                  to="/add-task"
                  className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition-colors"
                >
                  Add Task
                </Link>

                {/* Tasks Link */}
                <Link
                  to="/tasks"
                  className="hover:text-blue-200 px-3 py-2 rounded-md transition-colors"
                >
                  My Tasks
                </Link>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login Link */}
                <Link
                  to="/login"
                  className="hover:text-blue-200 px-3 py-2 rounded-md transition-colors"
                >
                  Login
                </Link>

                {/* Signup Link */}
                <Link
                  to="/signup"
                  className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;