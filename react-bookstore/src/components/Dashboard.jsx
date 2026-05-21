const Dashboard = () => {
  const email = localStorage.getItem("Email");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
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
    </div>
  );
};

export default Dashboard;
