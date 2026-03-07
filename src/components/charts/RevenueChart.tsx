import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  timeStamp: string;
}

interface RevenueDataPoint {
  period: string;
  revenue: number;
  orders: number;
}

const revenueDataByTimestamp: Record<string, RevenueDataPoint[]> = {
  Today: [
    { period: "12 AM", revenue: 15000, orders: 3 },
    { period: "3 AM", revenue: 8000, orders: 2 },
    { period: "6 AM", revenue: 12000, orders: 2 },
    { period: "9 AM", revenue: 45000, orders: 8 },
    { period: "12 PM", revenue: 78000, orders: 15 },
    { period: "3 PM", revenue: 92000, orders: 18 },
    { period: "6 PM", revenue: 125000, orders: 22 },
    { period: "9 PM", revenue: 67000, orders: 12 },
  ],

  "Last 7 days": [
    { period: "Mon", revenue: 245000, orders: 45 },
    { period: "Tue", revenue: 312000, orders: 58 },
    { period: "Wed", revenue: 289000, orders: 52 },
    { period: "Thu", revenue: 356000, orders: 67 },
    { period: "Fri", revenue: 423000, orders: 78 },
    { period: "Sat", revenue: 512000, orders: 95 },
    { period: "Sun", revenue: 387000, orders: 71 },
  ],

  "Last 30 days": [
    { period: "Week 1", revenue: 1245000, orders: 230 },
    { period: "Week 2", revenue: 1567000, orders: 289 },
    { period: "Week 3", revenue: 1423000, orders: 265 },
    { period: "Week 4", revenue: 1789000, orders: 312 },
  ],

  "Last 3 months": [
    { period: "January", revenue: 4567000, orders: 842 },
    { period: "February", revenue: 5123000, orders: 945 },
    { period: "March", revenue: 5789000, orders: 1067 },
  ],

  "Last 6 months": [
    { period: "Oct", revenue: 3890000, orders: 715 },
    { period: "Nov", revenue: 4234000, orders: 782 },
    { period: "Dec", revenue: 5123000, orders: 945 },
    { period: "Jan", revenue: 4567000, orders: 842 },
    { period: "Feb", revenue: 5123000, orders: 945 },
    { period: "Mar", revenue: 5789000, orders: 1067 },
  ],

  "Last 12 months": [
    { period: "Apr '25", revenue: 3456000, orders: 638 },
    { period: "May '25", revenue: 3789000, orders: 698 },
    { period: "Jun '25", revenue: 4012000, orders: 740 },
    { period: "Jul '25", revenue: 3678000, orders: 678 },
    { period: "Aug '25", revenue: 3934000, orders: 725 },
    { period: "Sep '25", revenue: 4156000, orders: 767 },
    { period: "Oct '25", revenue: 3890000, orders: 715 },
    { period: "Nov '25", revenue: 4234000, orders: 782 },
    { period: "Dec '25", revenue: 5123000, orders: 945 },
    { period: "Jan '26", revenue: 4567000, orders: 842 },
    { period: "Feb '26", revenue: 5123000, orders: 945 },
    { period: "Mar '26", revenue: 5789000, orders: 1067 },
  ],
};

function RevenueChart({ timeStamp }: Props) {
  const isMobile = window.innerWidth < 768;

  // Get data based on timeStamp prop
  const chartData =
    revenueDataByTimestamp[timeStamp] || revenueDataByTimestamp["Today"];

  // Custom tooltip formatter
  const formatTooltip = (value: number | undefined) => {
    if (value === undefined) return "₦0";
    return `₦${value.toLocaleString()}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-3 md:p-6 h-full rounded-lg shadow w-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Revenue Overview
      </h3>

      <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="period"
            tick={{ fill: "#9ca3af", fontSize: isMobile ? 10 : 12 }}
          />
          <YAxis
            tick={{ fill: "#9ca3af", fontSize: isMobile ? 10 : 12 }}
            tickFormatter={(value) => `₦${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            formatter={formatTooltip}
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
            labelStyle={{ color: "#9ca3af" }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ fill: "#22c55e", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;
