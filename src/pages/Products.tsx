import { useState } from "react";
import DashBoardLayout from "../components/layout/DashboardLayout";
import ProductModal from "../components/ProductModal";

interface ProductProps {
  image: string;
  title: string;
  description: string;
  price: number;
  sizes: string[];
}

const fetchedProducts = localStorage.getItem("products");

const products: ProductProps[] = fetchedProducts
  ? JSON.parse(fetchedProducts)
  : [];

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const i = 2;

  return (
    <>
      <ProductModal openModal={isModalOpen} closeModal={closeModal} />
      <DashBoardLayout>
        <button
          onClick={openModal}
          className="text-white px-3 py-2 bg-blue-700 rounded-md hover:bg-blue-800 cursor-pointer transition-colors duration-300"
        >
          Add New Product
        </button>
        {products.length === 0 ? (
          <div className="flex items-center justify-center h-full min-h-[80vh]">
            <p className="text-white">No Products</p>
          </div>
        ) : (
          <div className="w-full overflow-hidden overflow-x-auto no-scrollbar">
            <table className="text-white text-nowrap w-full">
              <tr className="bg-gray-600 border-b-2 border-gray-700">
                <th className="px-3 py-2 text-start">S/N</th>
                <th className="px-3 py-2 text-start">Image</th>
                <th className="px-3 py-2 text-start">Product Name</th>
                <th className="px-3 py-2 text-start">Description</th>
                <th className="px-3 py-2 text-start">Price</th>
                <th className="px-3 py-2 text-start">Sizes</th>
                <th className="px-3 py-2 text-start"></th>
              </tr>
              {products.map((product, key) => (
                <tr
                  className={`border-b-2 border-gray-700 transition-colors duration-300 ease-in-out ${(key + 1) % 2 == 0 ? "bg-gray-800 hover:bg-gray-900" : "hover:bg-gray-900"}`}
                >
                  <td className="text-start py-2 px-3">{key + 1}</td>
                  <td className="px-3 py-2">
                    <div className="h-10 w-10 rounded-full bg-white/50 border-2 border-white"></div>
                  </td>
                  <td className="px-3 py-2">{product.title}</td>
                  <td className="px-3 py-2 text-sm">
                    {product.description.slice(0, 30)}...
                  </td>
                  <td className="px-3 py-2">₦{product.price}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      {product.sizes.map((size, key) => (
                        <p className="p-0 m-0">
                          {key <= i ? size + " " : null}
                          {key == i ? "..." : null}
                        </p>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 py-2 flex gap-3">
                    <button className="px-3 py-1 rounded-md text-sm bg-blue-950 hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
                      Edit
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
    </>
  );
}

export default Products;
