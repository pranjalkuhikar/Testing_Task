import Login from "./components/Login";
import Protected from "./components/Protected";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <Login />
      <Protected>
        <Dashboard />
      </Protected>
    </div>
  );
};

export default App;
