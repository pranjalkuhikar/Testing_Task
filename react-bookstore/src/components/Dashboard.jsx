const Dashboard = () => {
  const email = localStorage.get(email);
  return (
    <div className="p-8">
      <h1 className="mb-4 text-3xl font-bold">Welcome to the Dashboard</h1>
      <p className="mb-6 text-gray-600">This is your main control panel.</p>
      <p>{email}</p>
      <button
        type="button"
        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
      >
        Click Me
      </button>
    </div>
  );
};

export default Dashboard;
