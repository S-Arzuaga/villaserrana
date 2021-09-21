const API_URL = "http://127.0.0.1:8000/api/companies/";

export const listCompanies = async () => {
  return await fetch(API_URL);
};

export const getProduct = async (productId) => {
  return await fetch(`${API_URL}${productId}`);
};

export const registerCompany = async (newCompany) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: String(newCompany.nombre).trim(),
      linea: String(newCompany.linea).trim(),
      size: String(newCompany.size).trim(),
      precio: parseInt(newCompany.precio),
      imagen: String(newCompany.imagen.trim()),
    }),
  });
};

export const updateProduct = async (productId, updatedProduct) => {
  return await fetch(`${API_URL}${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: String(updatedProduct.nombre).trim(),
      linea: String(updatedProduct.linea).trim(),
      size: String(updatedProduct.size).trim(),
      precio: parseInt(updatedProduct.precio),
      imagen: String(updatedProduct.imagen.trim()),
    }),
  });
};

export const deleteProduct = async (productId) => {
  return await fetch(`${API_URL}${productId}`, {
    method: "DELETE",
  });
};
