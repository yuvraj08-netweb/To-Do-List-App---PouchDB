import { useAuthStore } from "../state/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

const PublicLayout = () => {
  const { user } = useAuthStore(); // Check if user is logged in

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />; // Renders the child routes (login, signup)
};

export default PublicLayout;
