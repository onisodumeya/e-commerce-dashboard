import { useState } from "react";
import DashBoardLayout from "../components/layout/DashboardLayout";

interface CustomerProps {
  name: string;
  email: string;
  created: string;
  isDeactivated: boolean;
}

function Customers() {
  const [customers, setCustomers] = useState<CustomerProps[]>([
    {
      name: "Chioma Nwosu",
      email: "chioma.nwosu@gmail.com",
      created: "2026-01-15",
      isDeactivated: false,
    },
    {
      name: "Tunde Balogun",
      email: "tunde.balogun@yahoo.com",
      created: "2026-01-18",
      isDeactivated: false,
    },
    {
      name: "Fatima Abubakar",
      email: "fatima.abubakar@outlook.com",
      created: "2026-01-22",
      isDeactivated: false,
    },
    {
      name: "Emeka Okafor",
      email: "emeka.okafor@gmail.com",
      created: "2026-01-25",
      isDeactivated: false,
    },
    {
      name: "Blessing Eze",
      email: "blessing.eze@gmail.com",
      created: "2026-02-01",
      isDeactivated: true,
    },
    {
      name: "Yusuf Mohammed",
      email: "yusuf.mohammed@yahoo.com",
      created: "2026-02-05",
      isDeactivated: false,
    },
    {
      name: "Ngozi Okonkwo",
      email: "ngozi.okonkwo@gmail.com",
      created: "2026-02-08",
      isDeactivated: false,
    },
    {
      name: "Kunle Adeyemi",
      email: "kunle.adeyemi@outlook.com",
      created: "2026-02-12",
      isDeactivated: false,
    },
    {
      name: "Amina Lawal",
      email: "amina.lawal@gmail.com",
      created: "2026-02-15",
      isDeactivated: false,
    },
    {
      name: "Chidi Ibe",
      email: "chidi.ibe@yahoo.com",
      created: "2026-02-18",
      isDeactivated: false,
    },
    {
      name: "Zainab Ibrahim",
      email: "zainab.ibrahim@gmail.com",
      created: "2026-02-20",
      isDeactivated: false,
    },
    {
      name: "Seun Williams",
      email: "seun.williams@outlook.com",
      created: "2026-02-22",
      isDeactivated: true,
    },
    {
      name: "Halima Yusuf",
      email: "halima.yusuf@gmail.com",
      created: "2026-02-25",
      isDeactivated: false,
    },
    {
      name: "Ade Ogunleye",
      email: "ade.ogunleye@yahoo.com",
      created: "2026-02-27",
      isDeactivated: false,
    },
    {
      name: "Kemi Adeleke",
      email: "kemi.adeleke@gmail.com",
      created: "2026-03-01",
      isDeactivated: false,
    },
    {
      name: "Ibrahim Musa",
      email: "ibrahim.musa@outlook.com",
      created: "2026-03-02",
      isDeactivated: false,
    },
    {
      name: "Obioma Okeke",
      email: "obioma.okeke@gmail.com",
      created: "2026-03-03",
      isDeactivated: false,
    },
    {
      name: "Rasheed Sanusi",
      email: "rasheed.sanusi@yahoo.com",
      created: "2026-03-04",
      isDeactivated: true,
    },
    {
      name: "Chidinma Nnadi",
      email: "chidinma.nnadi@gmail.com",
      created: "2026-03-05",
      isDeactivated: false,
    },
    {
      name: "Oluwaseun Oyewole",
      email: "oluwaseun.oyewole@outlook.com",
      created: "2026-03-05",
      isDeactivated: false,
    },
  ]);

  const userState = (email: string) => {
    const updatedCustomers = customers.map((customer) => {
      if (customer.email === email) {
        return { ...customer, isDeactivated: !customer.isDeactivated };
      }
      return customer;
    });
    setCustomers(updatedCustomers);
  };

  const handleDataFromChild = (data: any) => {
    data;
  };

  return (
    <DashBoardLayout onSendData={handleDataFromChild}>
      {customers.length === 0 ? (
        <div className="flex items-center justify-center h-full min-h-[80vh]">
          <p className="text-white">No Customers</p>
        </div>
      ) : (
        <div className="w-full overflow-hidden overflow-x-auto no-scrollbar">
          <table className="text-gray-900 dark:text-white w-full text-nowrap">
            <thead className="bg-gray-200 dark:bg-gray-600">
              <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                <th className="text-start py-2 px-3">S/N</th>
                <th className="text-start py-2 px-3">Name</th>
                <th className="text-start py-2 px-3">Email</th>
                <th className="text-start py-2 px-3">Created At</th>
                <th className="text-start py-2 px-3"></th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer, key) => (
                <tr
                  key={key}
                  className={`transition-colors duration-300 ease-in-out ${(key + 1) % 2 != 0 ? "bg-gray-950 hover:bg-gray-900" : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900"} ${customer.isDeactivated ? "bg-red-950" : ""}`}
                >
                  <td className="text-start py-2 px-3">{key + 1}</td>
                  <td className="text-start py-2 px-3">{customer.name}</td>
                  <td className="text-start py-2 px-3">{customer.email}</td>
                  <td className="text-start py-2 px-3">{customer.created}</td>
                  <td className="flex items-center gap-3 py-2 px-3">
                    <button
                      onClick={() => userState(customer.email)}
                      className="px-3 py-1 rounded-md text-sm bg-blue-950 hover:bg-blue-900 transition-colors duration-300 cursor-pointer"
                    >
                      {customer.isDeactivated ? "Activate" : "Deactivate"}
                    </button>
                    <button className="px-3 py-1 rounded-md text-sm bg-red-900 hover:bg-red-800 transition-colors duration-300 cursor-pointer">
                      Delete
                    </button>
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

export default Customers;
