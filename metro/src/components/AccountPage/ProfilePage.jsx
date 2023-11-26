import React, { useState } from "react";
import { login } from "../../helper/helper";
import useFetchHook from "../../Hooks/FetchHook";
const ProfilePage = () => {
    const {apiData} = useFetchHook();
    // console.log(apiData);
  const userData = {
    name:apiData?.name || "",
    userName:apiData?.userName || "",
    email: apiData?.email || ""
  };
 // -------------------LOG OUT Handler-------------
   const logOutHandler=()=>{
    localStorage.removeItem("token")
   }
//   const [input, setInput] = useState(userData);
  
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold mt-10 text-center">Profile Details</h1>
        <div className="w-[400px] h-[400px] border-2 border-slate-200 p-5 rounded mt-7 ml-[460px]"> 
        <div className="text-center">
        <h1 className="mt-5">Name: {userData.name}</h1>
          <h1 className="mt-3">userName: {userData.userName}</h1>
          <h1 className="mt-3">Email: {userData.email}</h1>
            </div>          
         



            <div className="mt-8 flex flex-wrap justify-center">
              <button
                onClick={()=>logOutHandler()}
                className="font-sans text-white bg-black pl-8 pr-8 pt-2 pb-2 rounded font-semibold"
              >
                LOG OUT
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
