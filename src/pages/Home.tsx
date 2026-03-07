import DashBoardLayout from "../components/layout/DashboardLayout";
import SummaryCard from "../components/SummaryCard";
import {
  MdWallet,
  MdOutlineArrowCircleUp,
  MdAccountCircle,
} from "react-icons/md";
import RevenueChart from "../components/charts/RevenueChart";
import TopProductsChart from "../components/charts/TopProductsChart";
import { useState } from "react";

interface SummaryCardData {
  revenue: number;
  revenueChange: number;
  revenuePositive: boolean;
  orders: number;
  ordersChange: number;
  ordersPositive: boolean;
  customers: number;
  customersChange: number;
  customersPositive: boolean;
}

const summaryDataByTimestamp: Record<string, SummaryCardData> = {
  Today: {
    revenue: 442000,
    revenueChange: 12,
    revenuePositive: true,
    orders: 82,
    ordersChange: 8,
    ordersPositive: true,
    customers: 65,
    customersChange: 5,
    customersPositive: true,
  },

  "Last 7 days": {
    revenue: 2524000,
    revenueChange: 18,
    revenuePositive: true,
    orders: 466,
    ordersChange: 23,
    ordersPositive: true,
    customers: 287,
    customersChange: 15,
    customersPositive: true,
  },

  "Last 30 days": {
    revenue: 6024000,
    revenueChange: 8,
    revenuePositive: true,
    orders: 1096,
    ordersChange: 12,
    ordersPositive: true,
    customers: 523,
    customersChange: 3,
    customersPositive: false,
  },

  "Last 3 months": {
    revenue: 15479000,
    revenueChange: 15,
    revenuePositive: true,
    orders: 2854,
    ordersChange: 18,
    ordersPositive: true,
    customers: 1245,
    customersChange: 7,
    customersPositive: true,
  },

  "Last 6 months": {
    revenue: 28725000,
    revenueChange: 22,
    revenuePositive: true,
    orders: 5331,
    ordersChange: 25,
    ordersPositive: true,
    customers: 2167,
    customersChange: 12,
    customersPositive: true,
  },

  "Last 12 months": {
    revenue: 49770000,
    revenueChange: 5,
    revenuePositive: false,
    orders: 9342,
    ordersChange: 2,
    ordersPositive: false,
    customers: 3892,
    customersChange: 8,
    customersPositive: true,
  },
};

function Home() {
  const [timeStamp, setTimeStamp] = useState(() => {
    return localStorage.getItem("timeStamp") || "Last 7 days";
  });

  const handleDataFromChild = (data: string) => {
    setTimeStamp(data);
  };

  // Get data for selected timestamp
  const data =
    summaryDataByTimestamp[timeStamp] || summaryDataByTimestamp["Last 7 days"];

  return (
    <DashBoardLayout onSendData={handleDataFromChild}>
      <div className="flex lg:grid lg:grid-cols-3 gap-3 w-full bg-gray-800/30 text-white rounded-lg p-2 overflow-x-auto no-scrollbar">
        {/* Revenue Card */}
        <SummaryCard
          title="Revenue"
          currentAmount={data.revenue}
          changeInAmount={data.revenueChange}
          positiveChange={data.revenuePositive}
          iconBg="bg-green-300/20"
          currency={true}
        >
          <MdWallet className="text-green-300" />
        </SummaryCard>

        {/* Orders Card */}
        <SummaryCard
          title="Orders"
          currentAmount={data.orders}
          changeInAmount={data.ordersChange}
          positiveChange={data.ordersPositive}
          iconBg="bg-blue-300/20"
          currency={false}
        >
          <MdOutlineArrowCircleUp className="text-blue-300" />
        </SummaryCard>

        {/* Customers Card */}
        <SummaryCard
          title="Total Customers"
          currentAmount={data.customers}
          changeInAmount={data.customersChange}
          positiveChange={data.customersPositive}
          iconBg="bg-purple-300/20"
          currency={false}
        >
          <MdAccountCircle className="text-purple-300" />
        </SummaryCard>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-3">
        <div className="md:w-[70%]">
          <RevenueChart timeStamp={timeStamp} />
        </div>
        <div className="md:w-1/3">
          <TopProductsChart timeStamp={timeStamp} />
        </div>
      </div>
    </DashBoardLayout>
  );
}

export default Home;
