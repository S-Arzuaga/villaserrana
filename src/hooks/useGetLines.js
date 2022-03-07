import { useEffect, useState } from "react";
import axios from "axios";

const useGetLines = (API) => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setLines(response.data);
    }

    fetchData()
  }, [API]);

  return lines;
};

export default useGetLines;
