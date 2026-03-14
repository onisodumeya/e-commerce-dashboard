import DashBoardLayout from "../components/layout/DashboardLayout.tsx";
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext.tsx";

interface SalesData {
  id: string;
  product: string;
  customer: string;
  quantity: number;
  unitPrice: number;
  total: number;
  status: "completed" | "pending" | "failed";
  date: string;
  paymentMethod: string;
}

const salesData: SalesData[] = [
  {
    id: "1",
    product: "Air Force 1 Sneakers",
    customer: "chioma.nwosu@gmail.com",
    quantity: 2,
    unitPrice: 45000,
    total: 90000,
    status: "completed",
    date: "2026-03-05",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "2",
    product: "Nike Hoodie",
    customer: "tunde.balogun@yahoo.com",
    quantity: 1,
    unitPrice: 28000,
    total: 28000,
    status: "completed",
    date: "2026-03-04",
    paymentMethod: "POS",
  },
  {
    id: "3",
    product: "Adidas Tracksuit",
    customer: "fatima.abubakar@outlook.com",
    quantity: 3,
    unitPrice: 35000,
    total: 105000,
    status: "pending",
    date: "2026-03-04",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "4",
    product: "Puma Running Shoes",
    customer: "emeka.okafor@gmail.com",
    quantity: 1,
    unitPrice: 38000,
    total: 38000,
    status: "completed",
    date: "2026-03-03",
    paymentMethod: "Cash",
  },
  {
    id: "5",
    product: "Jordan T-Shirt",
    customer: "blessing.eze@gmail.com",
    quantity: 5,
    unitPrice: 12000,
    total: 60000,
    status: "completed",
    date: "2026-03-03",
    paymentMethod: "Mobile Money",
  },
  {
    id: "6",
    product: "Reebok Joggers",
    customer: "yusuf.mohammed@yahoo.com",
    quantity: 2,
    unitPrice: 22000,
    total: 44000,
    status: "failed",
    date: "2026-03-02",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "7",
    product: "Nike Cap",
    customer: "ngozi.okonkwo@gmail.com",
    quantity: 4,
    unitPrice: 8000,
    total: 32000,
    status: "completed",
    date: "2026-03-02",
    paymentMethod: "POS",
  },
  {
    id: "8",
    product: "Adidas Slides",
    customer: "kunle.adeyemi@outlook.com",
    quantity: 1,
    unitPrice: 15000,
    total: 15000,
    status: "completed",
    date: "2026-03-01",
    paymentMethod: "Cash",
  },
  {
    id: "9",
    product: "Under Armour Gym Bag",
    customer: "amina.lawal@gmail.com",
    quantity: 1,
    unitPrice: 32000,
    total: 32000,
    status: "pending",
    date: "2026-03-01",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "10",
    product: "Nike Socks (3-pack)",
    customer: "chidi.ibe@yahoo.com",
    quantity: 3,
    unitPrice: 5000,
    total: 15000,
    status: "completed",
    date: "2026-02-29",
    paymentMethod: "Mobile Money",
  },
  {
    id: "11",
    product: "Puma Backpack",
    customer: "zainab.ibrahim@gmail.com",
    quantity: 2,
    unitPrice: 25000,
    total: 50000,
    status: "completed",
    date: "2026-02-29",
    paymentMethod: "POS",
  },
  {
    id: "12",
    product: "Jordan Jersey",
    customer: "seun.williams@outlook.com",
    quantity: 1,
    unitPrice: 35000,
    total: 35000,
    status: "completed",
    date: "2026-02-28",
    paymentMethod: "Cash",
  },
  {
    id: "13",
    product: "Adidas Water Bottle",
    customer: "halima.yusuf@gmail.com",
    quantity: 6,
    unitPrice: 3500,
    total: 21000,
    status: "completed",
    date: "2026-02-28",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "14",
    product: "Nike Windbreaker",
    customer: "ade.ogunleye@yahoo.com",
    quantity: 1,
    unitPrice: 42000,
    total: 42000,
    status: "pending",
    date: "2026-02-27",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "15",
    product: "Puma Training Gloves",
    customer: "chioma.nwosu@gmail.com",
    quantity: 2,
    unitPrice: 18000,
    total: 36000,
    status: "completed",
    date: "2026-02-27",
    paymentMethod: "POS",
  },
  {
    id: "16",
    product: "Reebok Headband",
    customer: "tunde.balogun@yahoo.com",
    quantity: 3,
    unitPrice: 4000,
    total: 12000,
    status: "completed",
    date: "2026-02-26",
    paymentMethod: "Cash",
  },
  {
    id: "17",
    product: "Nike Compression Shorts",
    customer: "blessing.eze@gmail.com",
    quantity: 2,
    unitPrice: 16000,
    total: 32000,
    status: "completed",
    date: "2026-02-26",
    paymentMethod: "Mobile Money",
  },
  {
    id: "18",
    product: "Adidas Football",
    customer: "emeka.okafor@gmail.com",
    quantity: 1,
    unitPrice: 28000,
    total: 28000,
    status: "failed",
    date: "2026-02-25",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "19",
    product: "Under Armour Sports Bra",
    customer: "fatima.abubakar@outlook.com",
    quantity: 2,
    unitPrice: 22000,
    total: 44000,
    status: "completed",
    date: "2026-02-25",
    paymentMethod: "POS",
  },
  {
    id: "20",
    product: "Nike Yoga Mat",
    customer: "yusuf.mohammed@yahoo.com",
    quantity: 1,
    unitPrice: 18000,
    total: 18000,
    status: "completed",
    date: "2026-02-24",
    paymentMethod: "Cash",
  },
];

const handleDataFromChild = (data: any) => {
  data;
};

function Sales() {
  useEffect(() => {
    document.title = "Sales";
  }, []);

  const { theme } = useTheme();
  return (
    <DashBoardLayout onSendData={handleDataFromChild}>
      {salesData.length === 0 ? (
        <div className="flex items-center justify-center h-full min-h-[80vh]">
          <p className="text-white">No Sales</p>
        </div>
      ) : (
        <div className="w-full overflow-hidden overflow-x-auto no-scrollbar">
          <table
            className={`${theme == "dark" ? "text-white" : "text-black"} w-full text-nowrap`}
          >
            <thead>
              <tr
                className={`${theme == "dark" ? "bg-blue-900/30" : "bg-gray-200"} transition-colors duration-300`}
              >
                <th className="text-start py-2 px-3">S/N</th>
                <th className="text-start py-2 px-3">Product</th>
                <th className="text-start py-2 px-3">Customer</th>
                <th className="text-start py-2 px-3">Quantity</th>
                <th className="text-start py-2 px-3">Unit Price</th>
                <th className="text-start py-2 px-3">Sum-total</th>
                <th className="text-start py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((purchase, key) => (
                <tr
                  key={key}
                  className={`border-b ${theme == "dark" ? "border-b-gray-700" : "border-b-gray-400"} transition-colors duration-300 ease-in-out ${(key + 1) % 2 != 0 ? "bg-transparent" : `${theme == "dark" ? "bg-gray-800" : "bg-gray-100"}`}`}
                >
                  <td className="text-sm text-start py-2 px-3">{key + 1}</td>
                  <td className="text-sm text-start py-2 px-3">
                    {purchase.product}
                  </td>
                  <td className="text-sm text-start py-2 px-3">
                    {purchase.customer}
                  </td>
                  <td className="text-sm text-start py-2 px-3">
                    {purchase.quantity}
                  </td>
                  <td className="text-sm text-start py-2 px-3">
                    ₦{purchase.unitPrice.toLocaleString()}
                  </td>
                  <td className="text-sm text-start py-2 px-3">
                    ₦{(purchase.unitPrice * purchase.quantity).toLocaleString()}
                  </td>
                  <td className={`text-sm text-start py-2 px-3 `}>
                    <p
                      className={`text-center text-white p-1 rounded-full ${purchase.status === "completed" ? "bg-green-500" : purchase.status === "pending" ? "bg-yellow-500" : "bg-red-700"}`}
                    >
                      {purchase.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashBoardLayout>
  );
}

export default Sales;
