import { Navigate } from "react-router-dom";

export default function UnProtectedRoute({ children }: any) {
  if (localStorage.getItem("token")) {
    return <Navigate to="/home-user" replace />;
  }

  return children;
}
