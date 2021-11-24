import { useEffect, useState } from "react";
import axios from "axios";

const useGetCategories = (API) => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setCategories(response.data);
  }, []);

  return categories;
};

export default useGetCategories;
