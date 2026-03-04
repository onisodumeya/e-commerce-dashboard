import { ChevronDown, X, Star } from "lucide-react";
import { useRef, useState } from "react";
import Modal from "./Modal";

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
    images: [] as string[],
    name: "",
    description: "",
    price: 0,
    sizes: [] as string[],
    coverImageIndex: 0,
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
      images: images,
      title: formData.name,
      description: formData.description,
      price: formData.price,
      sizes: formData.sizes,
      coverImageIndex: coverImageIndex,
    };

    const existingProducts = JSON.parse(
      localStorage.getItem("products") || "[]",
    );
    existingProducts.push(newProduct);
    localStorage.setItem("products", JSON.stringify(existingProducts));

    // Reset form
    setFormData({
      images: [],
      name: "",
      description: "",
      price: 0,
      sizes: [],
      coverImageIndex: 0,
    });

    closeModal();
    window.location.reload();
  };

  const [images, setImages] = useState<string[]>([]);
  const [coverImageIndex, setCoverImageIndex] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle image selection
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Convert to base64 or URL
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
    }
  };

  // Set cover image
  const handleSetCover = (index: number) => {
    setCoverImageIndex(index);
  };

  // Trigger file input
  // const handleSelectClick = () => {
  //   fileInputRef.current?.click();
  // };

  return (
    <Modal openModal={openModal}>
      <div className="text-white flex flex-col gap-5">
        <div className="flex items-start justify-between">
          {/* Image box */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold">Product Images</h4>

            <div className="flex flex-wrap gap-3">
              {/* Display existing images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 bg-white/10 border rounded-md overflow-hidden group"
                >
                  {/* Display single image (not another map!) */}
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

              {/* Add new image button - OUTSIDE the map */}
              <div className="w-24 h-24 bg-white/10 border border-dashed border-white/50 rounded-md flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-white/70 hover:text-white text-3xl h-full w-full cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Single hidden file input - OUTSIDE the map */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImages([...images, reader.result as string]);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="hidden"
              />
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
          <button onClick={closeProductModal} className="cursor-pointer">
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
              setFormData({ ...formData, price: Number(e.target.value) })
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
                <span
                  onClick={() => handleOptions("Clothes")}
                  className="p-2 hover:bg-gray-800 w-full rounded-md text-start transition-colors duration-200"
                >
                  Clothes
                </span>
                <span
                  onClick={() => handleOptions("Shoes")}
                  className="p-2 hover:bg-gray-800 w-full rounded-md text-start transition-colors duration-200"
                >
                  Shoes
                </span>
              </div>
            </button>
          </div>
          {/* Checkboxes */}
          <div className="flex flex-wrap items-center gap-3">
            {option === "Clothes"
              ? clothSizes.map((size, key) => (
                  <label key={key} className="flex items-center gap-1">
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
              : shoeSizes.map((size, key) => (
                  <label key={key} className="flex items-center gap-1">
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
    </Modal>
  );
};

export default ProductModal;
