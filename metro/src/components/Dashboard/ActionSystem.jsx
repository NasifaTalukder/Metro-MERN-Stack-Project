import React, { useEffect, useState } from "react";
import "../../App.css";
import { addProduct, deleteProduct, getProduct } from "../../helper/helper";
import { Link } from "react-router-dom";
import { ProductStore } from "../../store/StoreData";

function ActionSystem() {
  let [products, setProducts] = useState([]);
  const AddProduct=ProductStore((state)=>state.AddProduct)
  


  useEffect(() => {
    dataShowHandler();
  }, []);
// -----------Data Show----------
  const dataShowHandler = async () => {
    let ShowDb = await getProduct();
    setProducts(ShowDb.products);
    return ShowDb;
    // console.log(ShowDb.products);
  };
  // console.log(products)
  // -------------Data Delete----------
  const deleteHandler = (id) => {
    deleteProduct(id);
    dataShowHandler();
    setProducts(products.filter((product)=>product.id !== id));
    // console.log(id)
// -------------Data Update-------------
  };
  let updateHandler = (id)=>{
    AddProduct(products.filter((product)=>product._id===id))
  };
  // console.log(productId)
  return (
    <div>
      <u>
        <h1 className="text-[40px] text-blue-500 text-center">
          All Products..
        </h1>
      </u>
      <div className="text-center mt-[50px]">
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((productsData) => (
              <tr key={productsData._id}>
                <td>1</td>
                <td>{productsData.productName}</td>
                <td>{productsData.productType}</td>
                <td>{productsData.productPrice}</td>
                <td>{productsData.productDics}</td>
                <td><img src={productsData.productImg} alt="" className="w-[100px] h-auto"/></td>
                <td>
                  <button className="px-5 py-2 bg-purple-600 text-white text-[20px] rounded-sm">
                   <Link to="/updateProduct" onClick={()=>updateHandler(productsData._id)}>Edit</Link> 
                  </button>
                  <button
                    className="px-5 py-2 bg-red-700 text-white text-[20px] rounded-sm ml-[10px]"
                    onClick={()=>deleteHandler(productsData._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActionSystem;
