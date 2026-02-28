import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeToggle } from "./components/ui/ThemeToggle";
import "./index.css";

import Home from "./pages/Home";
import Login from "./pages/auth-pages/Login";
import Signup from "./pages/auth-pages/Signup";
import Sales from "./pages/Sales";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Reports from "./pages/Reports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
