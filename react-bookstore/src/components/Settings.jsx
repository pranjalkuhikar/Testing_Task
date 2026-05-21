

const Settings = () => {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-3xl font-bold">Settings</h1>
      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email Notifications</span>
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600"
              defaultChecked
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Dark Mode</span>
            <input type="checkbox" className="h-5 w-5 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
