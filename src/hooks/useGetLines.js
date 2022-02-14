import { useEffect, useState } from "react";
import axios from "axios";

const useGetLines = (API) => {
  const [lines, setLines] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setLines(response.data);
  }, []);

  return lines;
};

export default useGetLines;
