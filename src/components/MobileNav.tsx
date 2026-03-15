import {
  LayoutDashboard,
  Receipt,
  Package,
  User2,
  UserCircle,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function MobileNav() {
  const menuItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/sales", label: "Sales", icon: Receipt },
    { path: "/customers", label: "Customers", icon: User2 },
    { path: "/Products", label: "Products", icon: Package },
    { path: "/account", label: "Account", icon: UserCircle },
  ];

  const { theme } = useTheme();

  return (
    <nav
      className={`${theme == "dark" ? "bg-gray-900" : "bg-white"} fixed bottom-0 p-2 w-full z-50 left-0 flex flex-row items-center justify-between lg:hidden drop-shadow-md drop-shadow-black/50`}
    >
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-2 rounded-lg transition-colors duration-300 w-full text-base ${
              isActive
                ? `${theme == "dark" ? "text-white" : "text-blue-700"}`
                : "text-gray-600"
            }`}
          >
            <Icon size={16} />
            <span className="text-[10px]">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default MobileNav;
