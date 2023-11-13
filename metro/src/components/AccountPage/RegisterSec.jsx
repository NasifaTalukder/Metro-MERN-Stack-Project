import React, { useState } from "react";
import { registration } from "../../helper/helper";


const RegisterSec = () => {
  const userData = {
    name: "",
    userName: "",
    email: "",
    password: "",
    profile: "",
  };
  const [input, setInput] = useState(userData);
  // --------Handler for Input product details-------
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // -----------Handler for input image----
  const ImginputHandler = async (e) => {
    let imgBase64 = await imagConvertToBase64(e.target.files[0]);
    setInput({ ...input, [e.target.name]: imgBase64 });
    //  console.log(imgBase64)
  };
  const submitHandler = (e) => {
    e.preventDefault();
    registration(input)
    // console.log(input);
  };
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold">Register</h1>
        <div className="w-[620px] h-[600px] border-2 border-slate-200 p-5 rounded mt-7">
          <form onSubmit={submitHandler}>
            <div>
              <label className="text-base font-sans font-semibold text-slate-600">
                Name *
              </label>
              <input
                type="text"
                name="name"
                // value={username}
                onChange={inputHandler}
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div>
              <label className="text-base font-sans font-semibold text-slate-600">
                Username *
              </label>
              <input
                type="text"
                name="userName"
                // value={username}
                onChange={inputHandler}
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div className="mt-4">
              <label className="text-base font-sans font-semibold text-slate-600">
                Email address *
              </label>
              <input
                type="email"
                name="email"
                // value={email}
                onChange={inputHandler}
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div className="mt-4">
              <label className="text-base font-sans font-semibold text-slate-600">
                Password *
              </label>
              <input
                type="password"
                name="password"
                // value={password}
                onChange={inputHandler}
                className="w-full p-3 outline-0 bg-slate-100 mt-3"
              />
            </div>
            <div className="flex flex-wrap mt-3">
            <div className="mt-4">
              <label className="text-base font-sans font-semibold text-slate-600 ">
                Profile*
              </label>
              <input 
              type="file" 
              name="profile"
              accept=".png, .jpg, .jpeg" 
              onChange={ImginputHandler }
              className="ml-5" />
            </div>
            <div className="mt-4">
              <img src={input.profile} alt="" className="w-[150px] h-auto" />
            </div>
            </div>
           

            <div className="mt-[-50px]">
              <button
                onClick={submitHandler}
                className="font-sans text-white bg-black pl-12 pr-12 pt-3 pb-3 rounded font-semibold"
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function imagConvertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

export default RegisterSec;
