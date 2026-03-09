import { MdAccountCircle } from "react-icons/md";

import { LayoutDashboard, Receipt, Package, LogOut, User2 } from "lucide-react";

import { Link } from "react-router-dom";

import { logout } from "../utils/auth.tsx";

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

  return (
    <nav className="hidden lg:flex flex-col w-1/5 items-start justify-between gap-3 py-5 px-5 border-r border-r-gray-900 h-screen fixed left-0 top-0">
      <div className="flex items-center gap-2 bg-gray-800 shadow-sm py-2 px-3 w-full rounded-lg mb-5 text-white">
        <MdAccountCircle size={40} />
        <div className="flex flex-col items-start text-sm">
          <p className="font-bold">Admin</p>
          <p className="text-gray-300">{user.name}</p>
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
              className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-2 transition-colors duration-300 w-full text-base ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-white hover:bg-gray-700"
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
        className="flex items-center gap-2 px-3 py-2 rounded-lg mb-2 transition-colors duration-300 w-full text-red-600 hover:bg-gray-800 cursor-pointer"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </nav>
  );
}

export default Sidebar;
