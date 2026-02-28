import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

interface ProductData {
  name: string;
  value: number;
  percentage?: number;
}

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"];

const productData: ProductData[] = [
  { name: "Hoodie", value: 450000 },
  { name: "Bucket Hat", value: 320000 },
  { name: "All Star Converse", value: 280000 },
  { name: "Air Force 1", value: 180000 },
  { name: "Cargo Pants", value: 150000 },
];

function TopProductsChart() {
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
            data={productData}
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
            {productData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
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
