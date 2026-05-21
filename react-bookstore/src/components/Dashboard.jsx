import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const email = localStorage.getItem("Email");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Email");
    navigate("/login");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="space-x-4 flex items-center">
          <Link to="/feed" className="text-blue-600 hover:underline">
            Feed
          </Link>
          <Link to="/profile" className="text-blue-600 hover:underline">
            Profile
          </Link>
          <Link to="/settings" className="text-blue-600 hover:underline">
            Settings
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h2 className="mb-4 text-2xl font-semibold">Welcome back!</h2>
        <p className="mb-6 text-gray-600">This is your main control panel.</p>
        {email && (
          <p className="mb-4 text-blue-600 font-semibold">
            Logged in as: {email}
          </p>
        )}
        <button
          type="button"
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
