import Dashboard from "./Dashboard";
import Login from "./Login";

const Protected = () => {
  const email = localStorage.getItem("Email");
  if (email === "test@test.com") {
    <Dashboard />;
  } else {
    <Login />;
  }
  return <></>;
};

export default Protected;
