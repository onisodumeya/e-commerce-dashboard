import { ChevronDown, X, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Modal from "./Modal";

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

interface HandleOptionsProps {
  openModal: boolean;
  closeModal: () => void;
  onSave: (product: ProductProps) => void;
  productToEdit?: ProductProps | null;
}

const ProductModal = ({
  openModal,
  closeModal,
  onSave,
  productToEdit,
}: HandleOptionsProps) => {
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
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [coverImageIndex, setCoverImageIndex] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    sizes: [] as string[],
    stock: 0,
  });

  // Auto-fill form when editing
  useEffect(() => {
    if (productToEdit) {
      // EDIT MODE - Fill with existing data
      setFormData({
        name: productToEdit.title || "",
        description: productToEdit.description || "",
        price: productToEdit.price || 0,
        sizes: productToEdit.sizes || [],
        stock: productToEdit.stock || 0,
      });
      setImages(productToEdit.images || []);
      setCoverImageIndex(productToEdit.coverImageIndex || 0);
      setOption(productToEdit.option || "Clothes");
    } else {
      // ADD MODE - Reset to empty
      resetForm();
    }
  }, [productToEdit, openModal]);

  // Reset form function
  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: 0,
      sizes: [],
      stock: 0,
    });
    setImages([]);
    setCoverImageIndex(0);
    setOption("Clothes");
  };

  // Toggle options menu
  const toggleOptionsMenu = () => {
    setIsOptionsMenuOpen(!isOptionsMenuOpen);
  };

  // Handle option change
  const handleOptionChange = (value: string) => {
    setOption(value);
    setFormData({ ...formData, sizes: [] }); // Reset sizes when changing category
    setIsOptionsMenuOpen(false);
  };

  // Handle size toggle
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

  // Handle image selection
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image
  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);

    // If we removed the cover image, reset to first image
    if (index === coverImageIndex && newImages.length > 0) {
      setCoverImageIndex(0);
    } else if (newImages.length === 0) {
      setCoverImageIndex(0);
    }
  };

  // Set cover image
  const handleSetCover = (index: number) => {
    setCoverImageIndex(index);
  };

  // Handle close
  const handleClose = () => {
    resetForm();
    closeModal();
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (!formData.name.trim()) {
      alert("Please enter a product name");
      return;
    }
    if (formData.price <= 0) {
      alert("Please enter a valid price");
      return;
    }
    if (formData.sizes.length === 0) {
      alert("Please select at least one size");
      return;
    }
    if (images.length === 0) {
      alert("Please add at least one image");
      return;
    }

    // Create product object
    const product: ProductProps = {
      id: productToEdit?.id || Date.now().toString(), // Keep ID if editing, create new if adding
      images: images,
      title: formData.name,
      description: formData.description,
      price: formData.price,
      sizes: formData.sizes,
      coverImageIndex: coverImageIndex,
      option: option,
      stock: formData.stock,
    };

    // Pass to parent
    onSave(product);

    // Reset and close
    resetForm();
    closeModal();
  };

  return (
    <Modal openModal={openModal}>
      <div className="text-white flex flex-col gap-5">
        <div className="flex items-start justify-between">
          {/* Image section */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold">Product Images</h4>

            <div className="flex flex-wrap gap-3">
              {/* Display existing images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 bg-white/10 border rounded-md overflow-hidden group"
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={14} color="white" />
                  </button>

                  {/* Cover badge/button */}
                  <button
                    type="button"
                    onClick={() => handleSetCover(index)}
                    className={`absolute bottom-1 left-1 rounded px-2 py-1 text-xs flex items-center gap-1 ${
                      coverImageIndex === index
                        ? "bg-yellow-500 text-black"
                        : "bg-black/50 text-white opacity-0 group-hover:opacity-100"
                    } transition-opacity`}
                  >
                    <Star
                      size={12}
                      fill={coverImageIndex === index ? "black" : "none"}
                    />
                    {coverImageIndex === index ? "Cover" : "Set Cover"}
                  </button>
                </div>
              ))}

              {/* Add new image button */}
              <div className="w-24 h-24 bg-white/10 border border-dashed border-white/50 rounded-md flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-white/70 hover:text-white text-3xl h-full w-full cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />

            <p className="text-xs text-gray-400">
              Click + to add images. Click the star to set cover image.
            </p>
          </div>

          {/* Close Button */}
          <button onClick={handleClose} className="cursor-pointer">
            <X size={30} />
          </button>
        </div>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label>Product Name</label>
          <input
            value={formData.name}
            type="text"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/10 border border-white/50 rounded-md py-1 px-3"
            placeholder="Enter product name"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label>Product Description</label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="bg-white/10 border border-white/50 rounded-md py-1 px-3 min-h-25"
            placeholder="Enter product description"
          />
        </div>

        {/* Number in stock */}
        <div className="flex flex-col gap-2 w-full">
          <label>Number in stock</label>
          <input
            value={formData.stock || ""}
            onChange={(e) =>
              setFormData({ ...formData, stock: Number(e.target.value) })
            }
            type="number"
            min="0"
            className="bg-white/10 border border-white/50 rounded-md py-1 px-3"
            placeholder="0"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col gap-2 w-full">
          <label>Price (₦)</label>
          <input
            value={formData.price || ""}
            onChange={(e) =>
              setFormData({ ...formData, price: Number(e.target.value) })
            }
            type="number"
            min="0"
            className="bg-white/10 border border-white/50 rounded-md py-1 px-3"
            placeholder="0"
          />
        </div>

        {/* Sizes */}
        <div className="flex flex-col lg:flex-row gap-3 w-full items-start lg:items-center">
          <div className="flex flex-row items-center gap-3">
            <label>Sizes</label>
            {/* Options Menu */}
            <button
              type="button"
              className="text-gray-300 bg-gray-900 w-fit px-3 py-1 rounded-md text-sm flex items-center cursor-pointer relative"
              onClick={toggleOptionsMenu}
            >
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isOptionsMenuOpen ? "rotate-180" : ""
                }`}
              />
              <span>{option}</span>

              {isOptionsMenuOpen && (
                <div className="w-fit absolute flex flex-col gap-3 bottom-[150%] -left-10 md:left-0 items-start bg-gray-900 z-10 p-3 rounded-lg">
                  <button
                    type="button"
                    onClick={() => handleOptionChange("Clothes")}
                    className="p-2 hover:bg-gray-800 w-full rounded-md text-start transition-colors duration-200"
                  >
                    Clothes
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOptionChange("Shoes")}
                    className="p-2 hover:bg-gray-800 w-full rounded-md text-start transition-colors duration-200"
                  >
                    Shoes
                  </button>
                </div>
              )}
            </button>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-wrap items-center gap-3">
            {(option === "Clothes" ? clothSizes : shoeSizes).map((size) => (
              <label key={size} className="flex items-center gap-1">
                <input
                  checked={formData.sizes.includes(size)}
                  onChange={() => handleSizeToggle(size)}
                  type="checkbox"
                />
                <p>{size}</p>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            type="button"
            onClick={handleClose}
            className="flex-1 text-white px-3 py-2 bg-gray-600 rounded-md hover:bg-gray-700 cursor-pointer transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 text-white px-3 py-2 bg-blue-700 rounded-md hover:bg-blue-800 cursor-pointer transition-colors duration-300"
          >
            {productToEdit ? "Update Product" : "Add Product"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
