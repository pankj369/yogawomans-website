import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ requireProfileSetup = false }) {
  const { isAuthenticated, profileSetupComplete, profileSetupSkipped } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (requireProfileSetup && !profileSetupComplete && !profileSetupSkipped) {
    return <Navigate to="/profile-setup" replace />;
  }

  return <Outlet />;
}
