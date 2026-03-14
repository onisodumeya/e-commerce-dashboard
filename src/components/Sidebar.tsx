import { MdAccountCircle } from "react-icons/md";
import { LayoutDashboard, Receipt, Package, LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { logout } from "../utils/auth.ts";
import { useTheme } from "../context/ThemeContext.tsx";

function Sidebar() {
  const menuItems = [
    { path: "/", label: "Overview", icon: LayoutDashboard },
    { path: "/sales", label: "Sales", icon: Receipt },
    { path: "/customers", label: "Customers", icon: User2 },
    { path: "/Products", label: "Products", icon: Package },
  ];

  const admin = localStorage.getItem("currentUser");

  if (!admin) return;
  const user = JSON.parse(admin);

  const { theme } = useTheme();
  return (
    <nav
      className={`hidden lg:flex flex-col w-1/5 items-start justify-between gap-3 py-5 px-5 border-r ${theme == "dark" ? "border-r-blue-950" : "border-r-gray-200"} h-screen fixed left-0 top-0 transition-colors duration-300`}
    >
      <div
        className={`flex items-center gap-2 shadow-sm py-2 px-3 w-full rounded-lg mb-5 ${theme == "dark" ? "bg-blue-800/20" : "bg-blue-100"}`}
      >
        <MdAccountCircle size={40} />
        <div className="flex flex-col items-start text-sm">
          <p className="font-bold">Admin</p>
          <p>{user.name}</p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-2 w-full text-base font-medium transition-colors duration-300 ${
                isActive
                  ? `${theme == "light" ? "bg-blue-300" : "bg-blue-800"}`
                  : `${theme == "light" ? "hover:bg-blue-100" : "hover:bg-blue-950"}`
              }`}
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <button
        onClick={logout}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-2 transition-colors duration-300 w-full text-red-600 ${theme == "dark" ? "hover:bg-blue-950 hover:text-white" : "hover:bg-blue-100"} cursor-pointer`}
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </nav>
  );
}

export default Sidebar;
