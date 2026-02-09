import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLogin = localStorage.getItem("login");

  if (!isLogin) {
    return <Navigate to="/" replace />;
  }

  return children;
}
