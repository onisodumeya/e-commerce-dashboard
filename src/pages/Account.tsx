import { MdAccountCircle } from "react-icons/md";
import DashBoardLayout from "../components/layout/DashboardLayout.tsx";
import { LogOut } from "lucide-react";
import { logout } from "../utils/auth.ts";
import { useTheme } from "../context/ThemeContext.tsx";

function Account() {
  const admin = localStorage.getItem("currentUser");

  if (!admin) return;
  const user = JSON.parse(admin);

  const handleDataFromChild = (data: any) => {
    data;
  };

  const { theme } = useTheme();
  return (
    <DashBoardLayout onSendData={handleDataFromChild}>
      <div className="flex flex-col justify-between h-[74vh] ">
        <div
          className={`flex items-center gap-2 ${theme == "dark" ? "bg-blue-800/20 text-white" : "bg-blue-100 text-black"} shadow-sm py-2 px-3 w-full rounded-lg mb-5`}
        >
          <MdAccountCircle size={40} />
          <div className="flex flex-col items-start text-sm">
            <p className="font-bold">Admin</p>
            <p className="">{user.name}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 px-3 py-2 rounded-lg mb-2 transition-colors duration-300 w-fit text-red-600 hover:bg-gray-800 cursor-pointer"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </DashBoardLayout>
  );
}

export default Account;
