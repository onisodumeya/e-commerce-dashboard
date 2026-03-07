import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ProductData {
  name: string;
  value: number;
  percentage?: number;
}

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"];

const productDataByTimestamp: Record<string, ProductData[]> = {
  Today: [
    { name: "Air Force 1", value: 125000 },
    { name: "Nike Hoodie", value: 92000 },
    { name: "Joggers", value: 78000 },
    { name: "Cap", value: 45000 },
    { name: "Socks", value: 25000 },
  ],

  "Last 7 days": [
    { name: "Air Force 1", value: 890000 },
    { name: "Nike Hoodie", value: 675000 },
    { name: "Adidas Tracksuit", value: 560000 },
    { name: "Puma Sneakers", value: 445000 },
    { name: "Joggers", value: 325000 },
  ],

  "Last 30 days": [
    { name: "Air Force 1", value: 3450000 },
    { name: "Nike Hoodie", value: 2890000 },
    { name: "Adidas Tracksuit", value: 2340000 },
    { name: "Jordan T-Shirt", value: 1890000 },
    { name: "Puma Sneakers", value: 1560000 },
  ],

  "Last 3 months": [
    { name: "Air Force 1", value: 9870000 },
    { name: "Nike Hoodie", value: 8450000 },
    { name: "Adidas Tracksuit", value: 7230000 },
    { name: "Jordan Jersey", value: 6120000 },
    { name: "Puma Backpack", value: 5340000 },
  ],

  "Last 6 months": [
    { name: "Air Force 1", value: 18900000 },
    { name: "Nike Hoodie", value: 16500000 },
    { name: "Adidas Tracksuit", value: 14200000 },
    { name: "Jordan Jersey", value: 12300000 },
    { name: "Puma Sneakers", value: 10800000 },
  ],

  "Last 12 months": [
    { name: "Air Force 1", value: 35600000 },
    { name: "Nike Hoodie", value: 31200000 },
    { name: "Adidas Tracksuit", value: 27800000 },
    { name: "Jordan Jersey", value: 24500000 },
    { name: "Puma Sneakers", value: 21900000 },
  ],
};

interface Props {
  timeStamp: string;
}

function TopProductsChart({ timeStamp }: Props) {
  const rawData =
    productDataByTimestamp[timeStamp] || productDataByTimestamp["Today"];
  const isMobile = window.innerWidth < 800;
  return (
    <div className="bg-white dark:bg-gray-800 p-3 md:p-6 rounded-lg shadow w-full">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">
        Top Products
      </h3>
      <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
        <PieChart>
          <Pie
            strokeWidth={0}
            data={rawData}
            cx="50%"
            cy="50%"
            labelLine={true}
            innerRadius={30}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={2}
            cornerRadius={3}
            label
            className="text-xs"
          >
            {rawData.map((entry, index) => (
              <Cell
                key={`cell-${index ? index : entry}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: "14px" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopProductsChart;
