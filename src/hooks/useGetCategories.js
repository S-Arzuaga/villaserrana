import { useEffect, useState } from "react";
import axios from "axios";

const useGetCategories = (API) => {
  const [categories, setCategories] = useState([]);

  useEffect((API) => {
    async function fetchData() {
      const response = await axios(API);
    setCategories(response.data);
    }

    console.log(fetchData)
  }, []);

  return categories;
};

export default useGetCategories;
