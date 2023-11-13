import axois from "./api";

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
  const { data } = await axois.post("/signup", registerData );
  return data;
}