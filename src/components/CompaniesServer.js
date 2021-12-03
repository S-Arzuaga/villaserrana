const PRODUCTS_URL = "https://aqueous-cove-93793.herokuapp.com/api/v1/products";
const CATEGORIES_URL =
  "https://aqueous-cove-93793.herokuapp.com/api/v1/categories";

export const listProducts = async () => {
  return await fetch(PRODUCTS_URL);
};

export const listCategories = async () => {
  return await fetch(CATEGORIES_URL);
};

export const getProduct = async (productId) => {
  return await fetch(`${PRODUCTS_URL}/${productId}`);
};

export const registerProduct = async (newProduct) => {
  return await fetch(PRODUCTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(newProduct.nombre).trim(),
      size: String(newProduct.size).trim(),
      price: parseInt(newProduct.precio),
      image: String(newProduct.imagen.trim()),
      lineId: parseInt(newProduct.lineId),
    }),
  });
};

export const updateProduct = async (productId, updatedProduct) => {
  return await fetch(`${PRODUCTS_URL}/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(updatedProduct.nombre).trim(),
      lineId: String(updatedProduct.lineId).trim(),
      size: String(updatedProduct.size).trim(),
      price: parseInt(updatedProduct.precio),
      image: String(updatedProduct.imagen.trim()),
    }),
  });
};

export const deleteProduct = async (productId) => {
  return await fetch(`${PRODUCTS_URL}${productId}`, {
    method: "DELETE",
  });
};
