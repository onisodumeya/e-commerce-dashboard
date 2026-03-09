import { useState, useEffect } from "react";
import DashBoardLayout from "../components/layout/DashboardLayout.tsx";
import { PriBtn, SecBtn } from "../components/Buttons.tsx";
import Alert from "../components/AlertBox.tsx";

interface CustomerProps {
  id: number;
  name: string;
  email: string;
  created: string;
  isDeactivated: boolean;
}

function Customers() {
  const customers = [
    {
      id: 1,
      name: "Chioma Nwosu",
      email: "chioma.nwosu@gmail.com",
      created: "2026-01-15",
      isDeactivated: false,
    },
    {
      id: 2,
      name: "Tunde Balogun",
      email: "tunde.balogun@yahoo.com",
      created: "2026-01-18",
      isDeactivated: false,
    },
    {
      id: 3,
      name: "Fatima Abubakar",
      email: "fatima.abubakar@outlook.com",
      created: "2026-01-22",
      isDeactivated: false,
    },
    {
      id: 4,
      name: "Emeka Okafor",
      email: "emeka.okafor@gmail.com",
      created: "2026-01-25",
      isDeactivated: false,
    },
    {
      id: 5,
      name: "Blessing Eze",
      email: "blessing.eze@gmail.com",
      created: "2026-02-01",
      isDeactivated: true,
    },
    {
      id: 6,
      name: "Yusuf Mohammed",
      email: "yusuf.mohammed@yahoo.com",
      created: "2026-02-05",
      isDeactivated: false,
    },
    {
      id: 7,
      name: "Ngozi Okonkwo",
      email: "ngozi.okonkwo@gmail.com",
      created: "2026-02-08",
      isDeactivated: false,
    },
    {
      id: 8,
      name: "Kunle Adeyemi",
      email: "kunle.adeyemi@outlook.com",
      created: "2026-02-12",
      isDeactivated: false,
    },
    {
      id: 9,
      name: "Amina Lawal",
      email: "amina.lawal@gmail.com",
      created: "2026-02-15",
      isDeactivated: false,
    },
    {
      id: 10,
      name: "Chidi Ibe",
      email: "chidi.ibe@yahoo.com",
      created: "2026-02-18",
      isDeactivated: false,
    },
    {
      id: 11,
      name: "Zainab Ibrahim",
      email: "zainab.ibrahim@gmail.com",
      created: "2026-02-20",
      isDeactivated: false,
    },
    {
      id: 12,
      name: "Seun Williams",
      email: "seun.williams@outlook.com",
      created: "2026-02-22",
      isDeactivated: true,
    },
    {
      id: 13,
      name: "Halima Yusuf",
      email: "halima.yusuf@gmail.com",
      created: "2026-02-25",
      isDeactivated: false,
    },
    {
      id: 14,
      name: "Ade Ogunleye",
      email: "ade.ogunleye@yahoo.com",
      created: "2026-02-27",
      isDeactivated: false,
    },
    {
      id: 15,
      name: "Kemi Adeleke",
      email: "kemi.adeleke@gmail.com",
      created: "2026-03-01",
      isDeactivated: false,
    },
    {
      id: 16,
      name: "Ibrahim Musa",
      email: "ibrahim.musa@outlook.com",
      created: "2026-03-02",
      isDeactivated: false,
    },
    {
      id: 17,
      name: "Obioma Okeke",
      email: "obioma.okeke@gmail.com",
      created: "2026-03-03",
      isDeactivated: false,
    },
    {
      id: 18,
      name: "Rasheed Sanusi",
      email: "rasheed.sanusi@yahoo.com",
      created: "2026-03-04",
      isDeactivated: true,
    },
    {
      id: 19,
      name: "Chidinma Nnadi",
      email: "chidinma.nnadi@gmail.com",
      created: "2026-03-05",
      isDeactivated: false,
    },
    {
      id: 20,
      name: "Oluwaseun Oyewole",
      email: "oluwaseun.oyewole@outlook.com",
      created: "2026-03-05",
      isDeactivated: false,
    },
  ];

  const savedCustomers = JSON.stringify(customers);
  const [recentCustomers, setRecentCustomers] = useState<CustomerProps[]>([]);

  useEffect(() => {
    const availableCustomers = localStorage.getItem("customers");
    if (availableCustomers) {
      setRecentCustomers(JSON.parse(availableCustomers));
    } else {
      localStorage.setItem("customers", savedCustomers);
    }
  }, []);

  const handleDataFromChild = (data: any) => {
    data;
  };

  const [alertOpen, setAlertOpen] = useState(false);

  function cancelALert() {
    if (!alertOpen) {
      return;
    } else {
      setAlertOpen(false);
    }
  }

  const [userEmail, setUserEmail] = useState("");

  const handleDelete = (email: string) => {
    setAlertOpen(true);
    setUserEmail(email);
  };

  const deleteCustomer = () => {
    try {
      const updatedCustomers = recentCustomers.filter(
        (customer) => customer.email !== userEmail,
      );
      localStorage.setItem("customers", JSON.stringify(updatedCustomers));
      setAlertOpen(false);
    } catch (error) {
      console.error("Error deleting account:", error);
    }

    window.location.reload();
  };

  const toggleDeactivation = (email: string) => {
    const updatedCustomers = recentCustomers.map((customer) =>
      customer.email === email
        ? { ...customer, isDeactivated: !customer.isDeactivated }
        : customer,
    );

    setRecentCustomers(updatedCustomers);

    localStorage.setItem("customers", JSON.stringify(updatedCustomers));
  };

  return (
    <DashBoardLayout onSendData={handleDataFromChild}>
      <Alert
        alertOpen={alertOpen}
        alertText="Are you sure you want to delete this user? This action cannot be undone."
        priText="Delete user"
        secText="Cancel"
        confirm={deleteCustomer}
        cancel={cancelALert}
      />
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
              {recentCustomers.map((customer, key) => (
                <tr
                  key={key}
                  className={`transition-colors duration-300 ease-in-out ${(key + 1) % 2 != 0 ? "bg-gray-950 hover:bg-gray-900" : "bg-gray-800 hover:bg-gray-900"} ${customer.isDeactivated ? "bg-red-950" : ""}`}
                >
                  <td className="text-start py-2 px-3">{key + 1}</td>
                  <td className="text-start py-2 px-3">{customer.name}</td>
                  <td className="text-start py-2 px-3">{customer.email}</td>
                  <td className="text-start py-2 px-3">{customer.created}</td>
                  <td className="flex items-center gap-3 py-2 px-3">
                    <PriBtn
                      clickFn={() => toggleDeactivation(customer.email)}
                      text={customer.isDeactivated ? "Activate" : "Deactivate"}
                    />
                    <SecBtn
                      clickFn={() => handleDelete(customer.email)}
                      text="Delete"
                    />
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
