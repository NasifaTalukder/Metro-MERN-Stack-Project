import React, { useState } from "react";
import { login } from "../../helper/helper";

const LoginSec = () => {

  const userData = {
    userName: "",
    password: ""
  };
  const [input, setInput] = useState(userData);
  // --------Handler for Input product details-------
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
// ---------------------Submit Data---------------
  const submitHandler = async(e) => {
    e.preventDefault();
   let {token}=await login(input);
   localStorage.setItem('token',token)
  };
  // -------------------LOG OUT Handler-------------
   const logOutHandler=()=>{
    localStorage.removeItem("token")
   }
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold">Login</h1>
        <div className="w-[620px] h-[650px] border-2 border-slate-200 p-5 rounded mt-7">
          <form onSubmit={submitHandler}>
            <div>
              <label className="text-base font-sans font-semibold text-slate-600">
                Username *
              </label>
              <input
                type="text"
                name="userName"
                // value={userName}
                onChange={inputHandler}
                required
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div className="mt-4">
              <label className="text-base font-sans font-semibold text-slate-600">
                Password *
              </label>
              <input
                type="password"
                // value={password}
                name="password"
                onChange={inputHandler}
                required
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div className="mt-5 flex flex-wrap space-x-1">
              <input type="checkbox" name="" id="" />
              <label
                htmlFor=""
                className="text-base font-sans font-semibold text-slate-600"
              >
                Remember me
              </label>
            </div>
            <div className="mt-6 flex flex-wrap justify-between">
              <button
                onClick={submitHandler}
                className="font-sans text-white bg-black pl-10 pr-10 pt-3 pb-3 rounded font-semibold"
              >
                LOG IN
              </button>

              <button
                onClick={()=>logOutHandler()}
                className="font-sans text-white bg-black pl-10 pr-10 pt-3 pb-3 rounded font-semibold"
              >
                LOG OUT
              </button>
            </div>
            <div className="mt-5">
              <p className="text-lg font-sans text-slate-600">
                Lost your password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginSec;
