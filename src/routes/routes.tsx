import { BrowserRouter as Router, Routes, Route,
  //  Navigate
   } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";
// import { useAuthStore } from "../state/useAuthStore";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // const { user } = useAuthStore(); // Check if user is logged in
  // return user ? children : <Navigate to="/login" replace />;
  return children;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
