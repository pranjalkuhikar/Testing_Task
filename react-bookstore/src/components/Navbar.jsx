import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("Email");

  const handleLogout = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 px-8 py-4 mb-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <Link to="/dashboard" className="text-xl font-bold text-blue-600">
            BookStore
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/feed"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Feed
            </Link>
            <Link
              to="/profile"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Settings
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {email && (
            <span className="text-sm text-gray-500 hidden sm:inline">
              {email}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
