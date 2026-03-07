import Sidebar from "../Sidebar";
import MobileNav from "../MobileNav";
import { useLocation } from "react-router-dom";
import { LiaMoon, LiaSun } from "react-icons/lia";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
  onSendData: (data: any) => void;
}

const DashBoardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  onSendData,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isDarkMode, setLightMode] = useState(true);

  console.log(theme);

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
  const [active, setActive] = useState(0);

  const [isTimeStampMenuOpen, setIsTimeStampMenuOpen] = useState(false);

  const openTimeStampMenuMenu = () => {
    if (isTimeStampMenuOpen === false) {
      setIsTimeStampMenuOpen(true);
    } else {
      setIsTimeStampMenuOpen(false);
    }
  };

  // function selectTimeStamp(value: number) {
  //   setActive(value);
  //   setIsTimeStampMenuOpen(false);
  // }

  const [savedTime, setSavedTime] = useState(localStorage.getItem("timeStamp"));

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

  return (
    <div className="p-2 lg:p-5 lg:pl-64 flex items-start min-h-screen bg-white dark:bg-gray-950">
      <Sidebar />
      <MobileNav />
      <section className="flex flex-col gap-3 w-full py-2 px-3 pb-20 lg:pb-0">
        <header className="flex items-center justify-between border-b border-b-gray-900 w-full pb-3 text-white">
          <h1 className="text-2xl font-bold">
            {path === "/" ? "Overview" : locationName}
          </h1>
          <div className={`gap-3 items-center flex`}>
            <div className="w-full flex items-center justify-between">
              <button
                className={`text-gray-300 text-sm items-center cursor-pointer relative bg-gray-900 hover:bg-gray-800 p-2 rounded-lg transition-all duration-300 ${path !== "/" ? "hidden" : "flex"}`}
                onClick={openOptionsMenu}
              >
                <ChevronDown
                  className={`transition-all duration-300 ${isOptionsMenuOpen ? "rotate-180" : ""}`}
                />
                <span>{option}</span>

                <div
                  className={`w-fit absolute flex flex-col gap-3 top-[120%] -left-10 md:left-0 items-start bg-gray-700 z-10 p-3 rounded-lg transition-all duration-300 ${!isOptionsMenuOpen ? "hidden" : ""}`}
                >
                  {timeStamps.map((timeStamp, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptions(timeStamp)}
                      className="p-2 hover:bg-gray-800 w-full rounded-md text-start text-nowrap transition-colors duration-200"
                    >
                      {timeStamp}
                    </button>
                  ))}
                </div>
              </button>
            </div>
            {/* <div
              onClick={toggleTheme}
              className="bg-transparent p-1 rounded-full hover:scale-105 transition-all hover:bg-white/10 duration-300 cursor-pointer"
            >
              {theme === "dark" ? <LiaMoon size={30} /> : <LiaSun size={30} />}
            </div> */}
          </div>
        </header>
        {children}
      </section>
    </div>
  );
};

export default DashBoardLayout;
