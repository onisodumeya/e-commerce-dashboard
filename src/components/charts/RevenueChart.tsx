import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RevenueData {
  period: string;
  revenue: number;
}

const dailyMockData: RevenueData[] = [
  { period: "Mon", revenue: 45000 },
  { period: "Tue", revenue: 52000 },
  { period: "Wed", revenue: 48000 },
  { period: "Thu", revenue: 61000 },
  { period: "Fri", revenue: 73000 },
  { period: "Sat", revenue: 89000 },
  { period: "Sun", revenue: 67000 },
];

const monthlyMockData: RevenueData[] = [
  { period: "Jan", revenue: 45000 },
  { period: "Feb", revenue: 52000 },
  { period: "Mar", revenue: 48000 },
  { period: "Apr", revenue: 61000 },
  { period: "May", revenue: 73000 },
  { period: "Jun", revenue: 89000 },
  { period: "Jul", revenue: 67000 },
  { period: "Aug", revenue: 67000 },
  { period: "Sep", revenue: 67000 },
  { period: "Oct", revenue: 67000 },
  { period: "Nov", revenue: 67000 },
  { period: "Dec", revenue: 67000 },
];
function RevenueChart() {
  const isMobile = window.innerWidth < 768;

  const [option, setOption] = useState("Monthly");
  const [isOptionsMenuOpen, setisOptionsMenuOpen] = useState(false);

  const openOptionsMenu = () => {
    if (isOptionsMenuOpen === false) {
      setisOptionsMenuOpen(true);
    } else {
      setisOptionsMenuOpen(false);
    }
  };

  function handleOptions(value: string) {
    setOption(value);
  }

  return (
    <div className="bg-gray-800 p-3 md:p-6 rounded-lg shadow w-full flex flex-col items-start">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-lg font-semibold mb-4 text-white">
          Revenue Overview
        </h3>
        <button
          className="text-gray-300 text-sm flex items-center cursor-pointer relative"
          onClick={openOptionsMenu}
        >
          <ChevronDown />
          <span>{option}</span>

          <div
            className={`w-fit absolute flex flex-col gap-3 -bottom-[500%] -left-10 md:left-0 items-start bg-gray-700 z-10 p-3 rounded-lg transition-all duration-300 ${!isOptionsMenuOpen ? "hidden" : ""}`}
          >
            <button
              onClick={() => handleOptions("Daily")}
              className="p-2 hover:bg-gray-800 w-full rounded-md text-start transition-colors duration-200"
            >
              Daily
            </button>
            <button
              onClick={() => handleOptions("Monthly")}
              className="p-2 hover:bg-gray-800 w-full rounded-md text-start transition-colors duration-200"
            >
              Monthly
            </button>
          </div>
        </button>
      </div>
      <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
        <LineChart
          data={option === "Monthly" ? monthlyMockData : dailyMockData}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            strokeOpacity={0.1}
            stroke="#FFFFFF"
          />
          <XAxis
            dataKey="period"
            tick={{ fill: "#FFFFFF", fontSize: isMobile ? 10 : 12 }}
          />
          <YAxis tick={{ fill: "#FFFFFF", fontSize: isMobile ? 10 : 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#16a34a"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;
