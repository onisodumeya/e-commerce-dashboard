import { useState, useEffect } from "react";
import DashBoardLayout from "../components/layout/DashboardLayout";
import ProductModal from "../components/ProductModal";

interface ProductProps {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  sizes: string[];
  coverImageIndex: number;
  option: string;
  stock: number;
}

function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductProps | null>(
    null,
  );

  // Load products from localStorage on mount
  useEffect(() => {
    loadProducts();
  }, []);

  // Load products from localStorage
  const loadProducts = () => {
    try {
      const fetchedProducts = localStorage.getItem("products");
      const parsedProducts: ProductProps[] = fetchedProducts
        ? JSON.parse(fetchedProducts)
        : [];
      setProducts(parsedProducts);
    } catch (error) {
      console.error("Error loading products:", error);
      setProducts([]);
    }
  };

  // Open modal for adding new product
  const openAddModal = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  // Open modal for editing existing product
  const openEditModal = (product: ProductProps) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  // Handle save (both add and edit)
  const handleSaveProduct = (product: ProductProps) => {
    try {
      const existingProducts = JSON.parse(
        localStorage.getItem("products") || "[]",
      );

      if (editingProduct) {
        // EDIT MODE - Update existing product
        const index = existingProducts.findIndex(
          (p: ProductProps) => p.id === product.id,
        );
        if (index !== -1) {
          existingProducts[index] = product;
        }
      } else {
        // ADD MODE - Add new product
        existingProducts.push(product);
      }

      // Save to localStorage
      localStorage.setItem("products", JSON.stringify(existingProducts));

      // Reload products
      loadProducts();
      closeModal();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save product. Please try again.");
    }
  };

  // Handle delete
  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product? This action cannot be undone.",
    );

    if (!confirmDelete) return;

    try {
      const updatedProducts = products.filter((product) => product.id !== id);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      loadProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };

  const handleDataFromChild = (data: any) => {};

  return (
    <>
      <ProductModal
        openModal={isModalOpen}
        closeModal={closeModal}
        onSave={handleSaveProduct}
        productToEdit={editingProduct}
      />

      <DashBoardLayout onSendData={handleDataFromChild}>
        <div className="mb-4">
          <button
            onClick={openAddModal}
            className="text-white px-4 py-2 bg-blue-700 rounded-md hover:bg-blue-800 cursor-pointer transition-colors duration-300"
          >
            Add New Product
          </button>
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full min-h-[80vh] gap-4">
            <p className="text-white text-xl">No Products Yet</p>
            <p className="text-gray-400">
              Add your first product to get started
            </p>
            <button
              onClick={openAddModal}
              className="text-white px-4 py-2 bg-blue-700 rounded-md hover:bg-blue-800 cursor-pointer transition-colors duration-300"
            >
              Add Product
            </button>
          </div>
        ) : (
          <div className="w-full overflow-hidden overflow-x-auto no-scrollbar">
            <table className="text-white text-nowrap w-full">
              <thead className="bg-gray-600 border-b-2 border-gray-700">
                <tr>
                  <th className="px-3 py-2 text-start">S/N</th>
                  <th className="px-3 py-2 text-start">Image</th>
                  <th className="px-3 py-2 text-start">Product Name</th>
                  <th className="px-3 py-2 text-start">Description</th>
                  <th className="px-3 py-2 text-start">Price</th>
                  <th className="px-3 py-2 text-start">Sizes</th>
                  <th className="px-3 py-2 text-start">Stock</th>
                  <th className="px-3 py-2 text-start"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={product.id}
                    className={`border-b-2 border-gray-700 transition-colors duration-300 ease-in-out ${
                      (index + 1) % 2 === 0
                        ? "bg-gray-800 hover:bg-gray-900"
                        : "hover:bg-gray-900"
                    }`}
                  >
                    <td className="text-start py-2 px-3">{index + 1}</td>
                    <td className="px-3 py-2">
                      {product.images && product.images.length > 0 ? (
                        <div
                          className="h-10 w-10 rounded-full border-2 border-white"
                          style={{
                            background: `url(${product.images[product.coverImageIndex || 0]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-700 flex items-center justify-center">
                          <span className="text-xs">No img</span>
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2">{product.title}</td>
                    <td className="px-3 py-2 text-sm">
                      {product.description
                        ? product.description.slice(0, 30) + "..."
                        : "No description"}
                    </td>
                    <td className="px-3 py-2">
                      ₦{product.price.toLocaleString()}
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-1">
                        {product.sizes && product.sizes.length > 0 ? (
                          <>
                            {product.sizes.slice(0, 3).map((size, idx) => (
                              <span key={idx} className="text-sm">
                                {size}
                                {idx < 2 && idx < product.sizes.length - 1
                                  ? ","
                                  : ""}
                              </span>
                            ))}
                            {product.sizes.length > 3 && (
                              <span className="text-sm">...</span>
                            )}
                          </>
                        ) : (
                          <span className="text-gray-400 text-sm">
                            No sizes
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <p
                        className={`${product.stock === 0 ? "text-red-500 p-1 bg-red-500/20 rounded-full text-center" : ""}`}
                      >
                        {product.stock === 0 ? "Out of stock" : product.stock}
                      </p>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEditModal(product)}
                          className="px-3 py-1 rounded-md text-sm bg-blue-700 hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="px-3 py-1 rounded-md text-sm bg-red-700 hover:bg-red-600 transition-colors duration-300 cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </DashBoardLayout>
    </>
  );
}

export default Products;
