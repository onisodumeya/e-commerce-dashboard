import { ChevronDown, XCircle } from "lucide-react";
import { useState } from "react";

interface HandleOptionsProps {
  openModal: boolean;
  closeModal: () => void;
}

const ProductModal = ({ openModal, closeModal }: HandleOptionsProps) => {
  const clothSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const shoeSizes = [
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
  ];

  const [option, setOption] = useState("Clothes");
  const [isOptionsMenuOpen, setisOptionsMenuOpen] = useState(false);

  const openOptionsMenu = () => {
    if (isOptionsMenuOpen === false) {
      setisOptionsMenuOpen(true);
    } else {
      setisOptionsMenuOpen(false);
    }
  };

  function handleOptions(value: string) {
    setOption(value);
  }

  function closeProductModal() {
    closeModal();
  }

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
    sizes: [] as string[],
  });

  const handleSizeToggle = (size: string) => {
    if (formData.sizes.includes(size)) {
      setFormData({
        ...formData,
        sizes: formData.sizes.filter((s) => s !== size),
      });
    } else {
      setFormData({
        ...formData,
        sizes: [...formData.sizes, size],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (!formData.name || !formData.price || formData.sizes.length === 0) {
      alert("Please fill in all required fields");
      return;
    }

    // Create product object with ID
    const newProduct = {
      id: Date.now().toString(),
      image: formData.image,
      title: formData.name,
      description: formData.description,
      price: formData.price,
      sizes: formData.sizes,
    };

    const existingProducts = JSON.parse(
      localStorage.getItem("products") || "[]",
    );
    existingProducts.push(newProduct);
    localStorage.setItem("products", JSON.stringify(existingProducts));

    // Reset form
    setFormData({
      image: "",
      name: "",
      description: "",
      price: "",
      sizes: [],
    });

    closeModal();
    window.location.reload();
  };

  return (
    <div
      className={`h-screen w-full bg-black/50 absolute top-0 left-0 z-50 items-center justify-center px-5 ${openModal ? "flex" : "hidden"}`}
    >
      <div className=" flex flex-col gap-5 w-full h-[70vh] lg:h-fit md:w-4/5 lg:w-3/5 p-5 bg-gray-800 rounded-lg overflow-hidden overflow-y-auto no-scrollbar">
        <div className="text-white flex flex-col gap-5">
          <div className="flex items-start justify-between">
            {/* Image box */}
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-24 h-24 bg-white/10 border rounded-md"></div>
              <input type="file" className="hidden" />
              <button className="bg-blue-700 px-3 py-2 rounded-md hover:bg-blue-800 transition-colors duration-300 cursor-pointer">
                Select image
              </button>
            </div>
            {/* Close Button */}
            <button onClick={closeProductModal} className="cursor-pointer">
              <XCircle size={30} />
            </button>
          </div>
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label>Product Name</label>
            <input
              value={formData.name}
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-white/10 border border-white/50 rounded-md py-1 px-3"
            />
          </div>
          {/* Description */}
          <label className="flex flex-col gap-2">
            <label>Product Description</label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="bg-white/10 border border-white/50 rounded-md py-1 px-3"
            />
          </label>

          {/* Price */}
          <label className="flex flex-col gap-2 w-full">
            <label>Price </label>
            <input
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              type="text"
              className="bg-white/10 border border-white/50 rounded-md py-1 px-3"
            />
          </label>
          {/* Sizes */}
          <label className="flex flex-col lg:flex-row gap-3 w-full items-start lg:items-center">
            <div className="flex flex-row items-center gap-3">
              <label>Sizes</label>
              {/* Options Modal */}
              <button
                className="text-gray-300 bg-gray-900 w-fit px-3 py-1 rounded-md text-sm flex items-center cursor-pointer relative"
                onClick={openOptionsMenu}
              >
                <ChevronDown
                  className={` transition-transform duration-300 ${isOptionsMenuOpen ? "rotate-180" : ""}`}
                />
                <span>{option}</span>

                <div
                  className={`w-fit absolute flex flex-col gap-3 bottom-[150%] -left-10 md:left-0 items-start bg-gray-900 z-10 p-3 rounded-lg transition-all duration-300 ${!isOptionsMenuOpen ? "hidden" : ""}`}
                >
                  <button
                    onClick={() => handleOptions("Clothes")}
                    className="p-2 hover:bg-gray-800 w-full rounded-md text-start transition-colors duration-200"
                  >
                    Clothes
                  </button>
                  <button
                    onClick={() => handleOptions("Shoes")}
                    className="p-2 hover:bg-gray-800 w-full rounded-md text-start transition-colors duration-200"
                  >
                    Shoes
                  </button>
                </div>
              </button>
            </div>
            {/* Checkboxes */}
            <div className="flex flex-wrap items-center gap-3">
              {option === "Clothes"
                ? clothSizes.map((size) => (
                    <label className="flex items-center gap-1">
                      <input
                        checked={formData.sizes.includes(size)}
                        onChange={() => handleSizeToggle(size)}
                        type="checkbox"
                        name={size}
                        id=""
                      />
                      <p>{size}</p>
                    </label>
                  ))
                : shoeSizes.map((size) => (
                    <label className="flex items-center gap-1">
                      <input
                        checked={formData.sizes.includes(size)}
                        onChange={() => handleSizeToggle(size)}
                        type="checkbox"
                        name={size}
                        id=""
                      />
                      <p>{size}</p>
                    </label>
                  ))}
            </div>
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full text-white px-3 py-2 bg-blue-700 rounded-md hover:bg-blue-800 cursor-pointer transition-colors duration-300"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
