import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { isAuthenticated } from "./utils/auth";
import "./index.css";

import Home from "./pages/Home";
import Login from "./pages/auth-pages/Login";
import Signup from "./pages/auth-pages/Signup";
import Sales from "./pages/Sales";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Account from "./pages/Account";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated() ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/signup"
          element={isAuthenticated() ? <Navigate to="/" replace /> : <Signup />}
        />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <Sales />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <Customers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />

        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
