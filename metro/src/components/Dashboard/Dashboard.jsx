import React from "react";
import {
  Link
} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useFetchHook from "../../Hooks/FetchHook";
function Dashboard() {


  // let tokenData = localStorage.getItem('token');
  // // let decode = jwtDecode(tokenData)
  // // console.log(decode)
  // let {userName}=jwtDecode(tokenData);
  // console.log(userName)
  return (
    <>
      <div className="w-[700px] m-auto">
        <div>
          <u>
            <h1 className="text-[40px] text-center text-red-700">
              Admin DashBoard
            </h1>
          </u>
        </div>

        <div>
       {/* <p className="text-center">User </p> */}
        </div>


        <div className="mt-[80px] ml-[220px] flex flex-wrap space-x-4">
          <Link
            to="/productAdd"
            className="px-5 py-3 bg-green-900 text-white border border-red-500 rounded-sm "
          >
            Product Add
          </Link>
          <Link
            to="/ActionSystem"
            className="px-5 py-3 bg-orange-500 text-white border border-red-500 rounded-sm "
          >
            All Products
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
