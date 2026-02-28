import Sidebar from "../Sidebar";
import MobileNav from "../MobileNav";
import { useLocation } from "react-router-dom";
import { LiaMoon, LiaSun } from "react-icons/lia";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

// interface;

const DashBoardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isDarkMode, setLightMode] = useState(true);

  const toggleTheme = () => {
    if (isDarkMode == true) {
      setLightMode(false);
      console.log("Light");
    } else {
      setLightMode(true);
      console.log("Dark");
    }
  };

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

  function selectTimeStamp(value: number) {
    setActive(value);
    setIsTimeStampMenuOpen(false);
  }

  return (
    <div className="p-2 lg:p-5 lg:pl-64 flex items-start min-h-screen bg-gray-950">
      <Sidebar />
      <MobileNav />
      <section className="flex flex-col gap-3 w-full py-2 px-3 pb-20 lg:pb-0">
        <header className="flex items-center justify-between border-b border-b-gray-900 w-full pb-3 text-white">
          <h1 className="text-2xl font-bold">
            {path === "/" ? "Overview" : locationName}
          </h1>
          <div className={`gap-3 items-center flex`}>
            <div
              className={`relative w-auto ${path === "/reports" ? "flex" : "hidden"}`}
            >
              <div
                onClick={openTimeStampMenuMenu}
                className="px-3 py-2 bg-gray-800 rounded-md flex items-end gap-2 cursor-pointer hover:bg-gray-900 transition-colors duration-300"
              >
                <ChevronDown
                  className={` transition-transform duration-300 ${isTimeStampMenuOpen ? "rotate-180" : ""}`}
                />
                <span>{timeStamps[active]}</span>
              </div>
              <div
                className={`flex-col gap-3 items-start bg-gray-900 px-3 py-2 rounded-md absolute z-50 top-12 shadow-md ${isTimeStampMenuOpen ? "flex" : "hidden"}`}
              >
                {timeStamps.map((timeStamp, key) => (
                  <span
                    onClick={() => selectTimeStamp(key)}
                    className="px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 cursor-pointer w-full text-nowrap"
                  >
                    {timeStamp}
                  </span>
                ))}
              </div>
            </div>
            <div
              onClick={toggleTheme}
              className="bg-transparent p-1 rounded-full hover:scale-105 transition-all hover:bg-white/10 duration-300 cursor-pointer"
            >
              {isDarkMode === true ? (
                <LiaMoon size={30} />
              ) : (
                <LiaSun size={30} />
              )}
            </div>
          </div>
        </header>
        {children}
      </section>
    </div>
  );
};

export default DashBoardLayout;
