import { useEffect, useState } from "react";
import axios from "axios";

const useDeleteProducts = (API, id) => {
  useEffect(async () => {
    const res = await axios.delete(`${API}/${id}`);
    console.log(res.status);
  }, []);
};

export default useDeleteProducts;
