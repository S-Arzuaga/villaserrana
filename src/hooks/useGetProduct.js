import { useEffect, useState } from "react";
import axios from "axios";

const useGetProduct = (API, id) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const res = await axios(`${API}/${id}`);
    setProducts(res.data);
  }, []);

  return products;
};

export default useGetProduct;
