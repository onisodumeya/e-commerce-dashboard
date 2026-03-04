import { TrendingDown, TrendingUp } from "lucide-react";

interface SummaryCardProps {
  children: React.ReactNode;
  title: string;
  currentAmount: number;
  changeInAmount: number;
  positiveChange: boolean;
  iconBg: string;
  currency: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  children,
  title,
  currentAmount,
  changeInAmount,
  positiveChange,
  iconBg,
  currency,
}) => {
  return (
    <div className="p-5 bg-gray-800 rounded-lg flex flex-col justify-between gap-5 shrink-0 w-72 lg:w-auto">
      <div className="flex gap-2 items-center">
        <div className={`p-2 rounded-full ${iconBg}`}>{children}</div>
        <h2 className="text-xl font-medium">{title}</h2>
      </div>
      <div className="flex w-full justify-between items-end gap-10">
        <span className="text-3xl gap-2 flex items-end">
          <p className="text-3xl">
            {currency ? "$" : ""}
            {currentAmount}
          </p>
          {positiveChange ? (
            <TrendingUp className="text-green-500" />
          ) : (
            <TrendingDown className="text-red-500" />
          )}
        </span>
        <p
          className={`py-1 px-2 rounded-md text-nowrap ${positiveChange ? "text-green-500 bg-green-400/10" : "text-red-500 bg-red-400/10"}`}
        >
          {positiveChange ? "+" : "-"} {currency ? "$" : ""}
          {changeInAmount}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
