import { useState, useEffect } from "react";

interface ProductProps {
  coverImageIndex: number;
  id: number;
  images: [];
  title: string;
  description: string;
  price: number;
  sizes: string[];
  option: string;
}

const [formData, setFormData] = useState({
  images: [] as string[],
  name: "",
  description: "",
  price: 0,
  sizes: [] as string[],
  coverImageIndex: 0,
  option: "",
});

export const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Validate
  if (!formData.name || !formData.price || formData.sizes.length === 0) {
    alert("Please fill in all required fields");
    return;
  }

  // Create product object with ID
  const newProduct = {
    id: Date.now().toString(),
    images: formData.images,
    title: formData.name,
    description: formData.description,
    price: formData.price,
    sizes: formData.sizes,
    coverImageIndex: formData.coverImageIndex,
    option: formData.option,
  };

  const existingProducts = JSON.parse(localStorage.getItem("products") || "[]");
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
    option: "Clothes",
  });

  window.location.reload();
};

export const updateProduct = (
  id: string,
  updatedProduct: ProductProps,
): void => {
  try {
    const fetchedProducts = localStorage.getItem("products");
    if (!fetchedProducts) return;

    const products = JSON.parse(fetchedProducts);

    const index = products.findIndex((p: any) => p.id === id);

    if (index !== -1) {
      products[index] = updatedProduct;
      localStorage.setItem("products", JSON.stringify(products));
    }
  } catch (error) {
    console.error("Error updating product:", error);
  }
};
