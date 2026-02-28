import DashBoardLayout from "../components/layout/DashboardLayout";
import SummaryCard from "../components/SummaryCard";
import {
  MdWallet,
  MdOutlineArrowCircleUp,
  MdAccountCircle,
} from "react-icons/md";
import { TrendingUp, TrendingDown } from "lucide-react";
import RevenueChart from "../components/charts/RevenueChart";
import TopProductsChart from "../components/charts/TopProductsChart";

function Home() {
  // const isMobile = window.innerWidth < 800;
  return (
    <DashBoardLayout>
      <div className="flex lg:grid lg:grid-cols-3 gap-3 w-full bg-gray-800/30 text-white rounded-lg p-2 overflow-x-auto no-scrollbar">
        {/* First grid */}
        <SummaryCard
          title="Total Revenue"
          currentAmount={2500}
          changeInAmount={170}
          positiveChange={true}
          iconBg="bg-green-300/20"
          currency={true}
        >
          <MdWallet className="text-green-300" />
        </SummaryCard>
        {/* Second grid */}
        <SummaryCard
          title="Total Orders"
          currentAmount={453}
          changeInAmount={170}
          positiveChange={true}
          iconBg="bg-blue-300/20"
          currency={false}
        >
          <MdOutlineArrowCircleUp className="text-blue-300" />
        </SummaryCard>

        {/* Third grid */}
        <SummaryCard
          title="Total Customers"
          currentAmount={250}
          changeInAmount={11}
          positiveChange={false}
          iconBg="bg-blue-300/20"
          currency={false}
        >
          <MdAccountCircle className="text-blue-300" />
        </SummaryCard>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-3">
        <div className="md:w-[70%]">
          <RevenueChart />
        </div>
        <div className="md:w-1/3">
          <TopProductsChart />
        </div>
      </div>
    </DashBoardLayout>
  );
}

export default Home;
