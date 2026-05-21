import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const email = localStorage.getItem("Email");
  if (email != "test@test.com") {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default Protected;
