import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth.tsx";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isAuthenticated()) {
    // User not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // User is logged in, show the page
  return <>{children}</>;
}

export default ProtectedRoute;
