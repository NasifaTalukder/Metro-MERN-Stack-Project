import React, { useEffect, useState } from "react";
import { getUserName } from "../helper/helper";
import axios from "../helper/api";

const useFetchHook = (query) => {
  const [getData, setData] = useState({ apiData: undefined, status: null });

   useEffect(()=>{
    const fetchData = async () => {
      try {
        let { userName } = !query ? await getUserName() : "";
        const { data, status } = !query
          ? await axios.get(`/user/${userName}`)
          : await axios.get(`/user/${query}`);
        if (status == 200) {
          setData((Prev) => ({
            ...Prev,
            apiData: data,
            status: status,
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };
     fetchData();
   },[query])
    
  return getData;

};

export default useFetchHook;
