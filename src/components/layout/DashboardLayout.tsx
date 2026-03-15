import Sidebar from "../Sidebar.tsx";
import MobileNav from "../MobileNav.tsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Sun, MoonStar } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.tsx";

interface DashboardLayoutProps {
  children: React.ReactNode;
  onSendData: (data: any) => void;
}

const DashBoardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  onSendData,
}) => {
  const location = useLocation();
  const path = location.pathname;

  const upperFirst = path.slice(1, 2).toUpperCase();
  const lowerOthers = path.slice(2, path.length);
  const locationName = upperFirst + lowerOthers;

  const timeStamps = [
    "Today",
    "Last 7 days",
    "Last 30 days",
    "Last 3 months",
    "Last 6 months",
    "Last 12 months",
  ];

  const [option, setOption] = useState(() => {
    return localStorage.getItem("timeStamp") || "Today"; // Default value
  });

  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);

  const openOptionsMenu = () => {
    if (isOptionsMenuOpen === false) {
      setIsOptionsMenuOpen(true);
    } else {
      setIsOptionsMenuOpen(false);
    }
  };

  function handleOptions(value: string) {
    setOption(value);
    onSendData(value);
    localStorage.setItem("timeStamp", value);
  }

  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`p-2 lg:p-5 lg:pl-64 flex items-start min-h-screen bg-transparent relative transition-colors duration-300`}
    >
      <Sidebar />
      <MobileNav />
      <section className="flex flex-col gap-3 w-full py-2 px-3 pb-20 lg:pb-0">
        <header
          className={`flex items-center justify-between border-b ${theme == "dark" ? "border-b-blue-950" : "border-b-gray-200"} w-full pb-3 transition-colors duration-300`}
        >
          <h1 className="text-2xl font-bold">
            {path === "/" ? "Overview" : locationName}
          </h1>
          <div className={`gap-3 items-center flex`}>
            <div className="w-full flex items-center justify-between">
              <div
                className={`${theme == "dark" ? "bg-blue-800 hover:bg-blue-900 text-white" : "bg-blue-300 hover:bg-blue-400 text-black"} text-sm items-center cursor-pointer relative p-2 rounded-lg transition-all duration-300 ${path !== "/" ? "hidden" : "flex"}`}
                onClick={openOptionsMenu}
              >
                <ChevronDown
                  className={`transition-all duration-300 ${isOptionsMenuOpen ? "rotate-180" : ""}`}
                />
                <span>{option}</span>

                <div
                  className={`${theme == "dark" ? "bg-blue-800 text-white" : "bg-blue-300  text-black"} w-fit absolute flex flex-col gap-3 top-[120%] right-0 items-start z-10 p-3 rounded-lg transition-all duration-300 ${!isOptionsMenuOpen ? "hidden" : ""} transition-colors duration-300`}
                >
                  {timeStamps.map((timeStamp, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptions(timeStamp)}
                      className={`${theme == "dark" ? "hover:bg-blue-700" : "hover:bg-blue-200"} p-2 w-full rounded-md text-start text-nowrap transition-colors duration-300`}
                    >
                      {timeStamp}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={toggleTheme} className="cursor-pointer">
              {theme === "dark" ? (
                <MoonStar size={24} className="text-blue-300" />
              ) : (
                <Sun size={24} className="text-blue-800" />
              )}
            </button>
          </div>
        </header>
        {children}
      </section>
    </div>
  );
};

export default DashBoardLayout;
