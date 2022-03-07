import { useEffect, useState } from "react";
import axios from "axios";

const useGetProduct = (API, id) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios(`${API}/${id}`);
      setProducts(res.data);
    }

    fetchData()
  }, [API, id]);

  return products;
};

export default useGetProduct;
