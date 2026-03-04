import { LayoutDashboard, Receipt, Package, User2 } from "lucide-react";

import { Link } from "react-router-dom";

function MobileNav() {
  const menuItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/sales", label: "Sales", icon: Receipt },
    { path: "/customers", label: "Customers", icon: User2 },
    { path: "/Products", label: "Products", icon: Package },
  ];

  return (
    <nav className="fixed bottom-0 bg-gray-900 p-2 w-full z-50 left-0 flex flex-row items-center justify-between lg:hidden">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-2 rounded-lg transition-colors duration-300 w-full text-base ${
              isActive ? " text-white" : "text-gray-600"
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
