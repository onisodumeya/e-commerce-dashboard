import DashBoardLayout from "../components/layout/DashboardLayout";

interface SalesData {
  product: string;
  customer: string;
  quantity: number;
  unitPrice: number;
}

const salesData: SalesData[] = [
  {
    product: "Air force 1",
    customer: "jess@gmail.com",
    quantity: 5,
    unitPrice: 20000,
  },
  {
    product: "Shoe",
    customer: "jess@gmail.com",
    quantity: 5,
    unitPrice: 200,
  },
  {
    product: "Shoe",
    customer: "jess@gmail.com",
    quantity: 5,
    unitPrice: 200,
  },
  {
    product: "Shoe",
    customer: "jess@gmail.com",
    quantity: 5,
    unitPrice: 200,
  },
  {
    product: "Shoe",
    customer: "jess@gmail.com",
    quantity: 5,
    unitPrice: 200,
  },
  {
    product: "Shoe",
    customer: "jess@gmail.com",
    quantity: 5,
    unitPrice: 200,
  },
  {
    product: "Shoe",
    customer: "jess@gmail.com",
    quantity: 5,
    unitPrice: 200,
  },
  {
    product: "Shoe",
    customer: "jess@gmail.com",
    quantity: 5,
    unitPrice: 200,
  },
];

function Sales() {
  return (
    <DashBoardLayout>
      {salesData.length === 0 ? (
        <div className="flex items-center justify-center h-full min-h-[80vh]">
          <p className="text-white">No Sales</p>
        </div>
      ) : (
        <div className="w-full overflow-hidden overflow-x-auto no-scrollbar">
          <table className="text-white w-full text-nowrap">
            <thead>
              <tr className="border-b-2 border-gray-700 bg-gray-600">
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
                  className={`border-b-2 border-gray-700 transition-colors duration-300 ease-in-out ${(key + 1) % 2 != 0 ? "bg-gray-950 hover:bg-gray-900" : "bg-gray-800 hover:bg-gray-900"}`}
                >
                  <td className="text-start py-2 px-3">{key + 1}</td>
                  <td className="text-start py-2 px-3">{purchase.product}</td>
                  <td className="text-start py-2 px-3">{purchase.customer}</td>
                  <td className="text-start py-2 px-3">{purchase.quantity}</td>
                  <td className="text-start py-2 px-3">
                    ₦{purchase.unitPrice}
                  </td>
                  <td className="text-start py-2 px-3">
                    ₦{purchase.unitPrice * purchase.quantity}
                  </td>
                  <td className="text-start py-2 px-3">
                    ₦{purchase.unitPrice}
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
