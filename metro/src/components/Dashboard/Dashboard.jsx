import React from "react";

function Dashboard() {
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
        <div className="mt-[80px] ml-[220px] flex flex-wrap space-x-4">
          <a
            href="/productAdd"
            className="px-5 py-3 bg-green-900 text-white border border-red-500 rounded-sm "
          >
            Product Add
          </a>
          <a
            href="/ActionSystem"
            className="px-5 py-3 bg-orange-500 text-white border border-red-500 rounded-sm "
          >
            All Products
          </a>
        </div>
      </div>
    </>
  );
}

export default Dashboard;