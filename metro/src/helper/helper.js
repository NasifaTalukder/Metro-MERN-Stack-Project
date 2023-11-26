import axois from "./api";
import {jwtDecode} from "jwt-decode"
// --------Get Product-------
export async function getProduct() {
  const { data } = await axois.get("/");
  return data;
}
// ----------Add Product-------
export async function addProduct(prodData) {
  const { data } = await axois.post("/productAdd", prodData );
  return data;
}
// -----------Delete Product-----------
export async function deleteProduct(id) {
  // console.log(id)
  const data  = await axois.delete(`/${id}`);
  return data;
}
// ------------Update Product Data---------
export async function updateProduct(updateData) {
  const data  = await axois.put('/updateProduct',updateData);
  return data;
}
// ----------User Registration--------
export async function registration(registerData) {
  try {
    const { data } = await axois.post("/signup", registerData );
  return Promise.resolve(data);
  } catch (error) {
    if(error.response){
      const{status,data}=error.response;
      if(status==422){
        return {error:data}
      }
      return {error:data};
    }else if(error.request){
      return{error:"No Response Recieved.."}
    }else{
      return {error:error.message}
    }
  }
}

// -------------User Login--------------
export async function login(loginData) {
  try {
    const {data}  = await axois.post("/signin",loginData);
    return Promise.resolve(data);
  } catch (error) {
    return error;
  }
}

// ---------User Data Get from Token--------------
export async function getUserName(){
  const token = localStorage.getItem("token");
  const decodeToken = jwtDecode(token);
  return decodeToken;
}