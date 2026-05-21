const Profile = () => {
  const email = localStorage.getItem("Email");
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold">User Profile</h1>
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <p className="text-lg font-medium text-gray-700">
            Email: <span className="text-blue-600">{email}</span>
          </p>
          <p className="mt-2 text-gray-600">
            This is your profile page where you can manage your personal
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
