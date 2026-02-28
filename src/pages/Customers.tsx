import DashBoardLayout from "../components/layout/DashboardLayout";

interface CustomerProps {
  name: string;
  email: string;
  created: string;
}

const customers: CustomerProps[] = [
  { name: "Jane", email: "jane@gmail.com", created: "2-20-2026" },
  { name: "John", email: "john@gmail.com", created: "2-20-2026" },
  { name: "Jessica", email: "jess@gmail.com", created: "2-20-2026" },
  { name: "Jsoe", email: "jose@gmail.com", created: "2-20-2026" },
];

function Customers() {
  return (
    <DashBoardLayout>
      {customers.length === 0 ? (
        <div className="flex items-center justify-center h-full min-h-[80vh]">
          <p className="text-white">No Customers</p>
        </div>
      ) : (
        <div className="w-full overflow-hidden overflow-x-auto no-scrollbar">
          <table className="text-white w-full text-nowrap">
            <tr className="border-b-2 border-gray-700 bg-gray-600">
              <th className="text-start py-2 px-3">S/N</th>
              <th className="text-start py-2 px-3">Name</th>
              <th className="text-start py-2 px-3">Email</th>
              <th className="text-start py-2 px-3">Created At</th>
              <th className="text-start py-2 px-3"></th>
            </tr>
            {customers.map((customer, key) => (
              <tr
                className={`border-b-2 border-gray-700 transition-colors duration-300 ease-in-out ${(key + 1) % 2 != 0 ? "bg-gray-950 hover:bg-gray-900" : "bg-gray-800 hover:bg-gray-900"}`}
              >
                <td className="text-start py-2 px-3">{key + 1}</td>
                <td className="text-start py-2 px-3">{customer.name}</td>
                <td className="text-start py-2 px-3">{customer.email}</td>
                <td className="text-start py-2 px-3">{customer.created}</td>
                <td className="flex items-center gap-3 py-2 px-3">
                  <button className="px-3 py-1 rounded-md text-sm bg-blue-950 hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
                    Deactivate
                  </button>
                  <button className="px-3 py-1 rounded-md text-sm bg-red-900 hover:bg-red-800 transition-colors duration-300 cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </DashBoardLayout>
  );
}

export default Customers;
