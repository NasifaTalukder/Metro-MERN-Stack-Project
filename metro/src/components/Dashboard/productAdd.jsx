import React, { useState } from "react";
import { addProduct } from "../../helper/helper";

function ProductAdd() {
  const allData = {
    productName: "",
    productType: "",
    productWeight: "",
    productPrice: "",
    productDics: "",
    productImg:""
  };
  const [input, setInput] = useState();
  // --------Handler for Input product details-------
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // -----------Handler for input image----
  const ImginputHandler = async (e) => {
    let imgBase64= await imagConvertToBase64(e.target.files[0] )
    setInput({ ...input, [e.target.name]: imgBase64 });
    //  console.log(imgBase64)
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addProduct(input);
    // setInput(" ");
    // console.log(input);
  };

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <div className="p-5">
          <h1 className="text-[30px]">Data Add Form</h1>
          <label htmlFor="">Product Name =</label>
          <input
            type="text"
            placeholder="Enter Your Product Name:"
            className="ml-3"
            name="productName"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="">Product Type =</label>
          <input
            type="text"
            placeholder="Enter Your Product Type:"
            className="ml-3"
            name="productType"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="">Product Weight =</label>
          <input
            type="text"
            placeholder="Enter Your Product Weight:"
            className="ml-3"
            name="productWeight"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="">Product Price =</label>
          <input
            type="number"
            placeholder="Enter Your Product Price:"
            className="ml-3"
            name="productPrice"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="">Product Discount =</label>
          <input
            type="number"
            placeholder="Your Product Discount:"
            className="ml-3"
            name="productDics"
            onChange={inputHandler}
          />
          <br />
          <br />
          <label htmlFor="">Your Image =</label>
          <input
            type="file"
            name="productImg"
            accept=".png, .jpg, .jpeg"
            className="ml-3"
            onChange={ImginputHandler}
          />
          <br />
          <br />

          <button type="submit" className="px-5 py-3 bg-green-700 text-white">
            Add Product
          </button>
        </div>
      </form>
    </>
  );
}

export default ProductAdd;


function imagConvertToBase64(file){
   return new Promise((resolve,reject)=>{
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file);
    fileReader.onload=()=>{
      resolve(fileReader.result)
    };
    fileReader.onerror=(error)=>{
      reject(error)
    };
   })
}