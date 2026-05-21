import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const email = localStorage.getItem("Email");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Email");
    navigate("/login");
  };

  return (
    <div className="p-8">
      <h1 className="mb-4 text-3xl font-bold">Welcome to the Dashboard</h1>
      <p className="mb-6 text-gray-600">This is your main control panel.</p>
      {email && (
        <p className="mb-4 text-blue-600 font-semibold">
          Logged in as: {email}
        </p>
      )}
      <div className="space-x-4">
        <button
          type="button"
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
        >
          Click Me
        </button>
        <button
          type="button"
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
