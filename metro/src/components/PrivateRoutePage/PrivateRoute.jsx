import axios from "../../helper/api";
import React, { useState } from "react";
import { ProductStore } from "../../store/StoreData";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {

  const [status, setStatus] = useState(false);
  const token = ProductStore((state)=>state.auth);

   useEffect(()=>{

    const authCheck = async () => {
      const response = await axios.get("/user-auth");
      if (response.data.ok) {
        setStatus(true);
      } else {
        setStatus(false);
      }  
    };
    if(token) authCheck();
   },[token])

  return status ? <Outlet/>:"";
};

export default PrivateRoute;
