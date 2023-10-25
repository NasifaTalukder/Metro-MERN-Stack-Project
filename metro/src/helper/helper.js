import axois from "./api";

// --------Get Student-------

export async function getProduct() {
  const { data } = await axois.get("/");
  return data;
}

export async function addProduct(prodData) {
  const { data } = await axois.post("/productAdd", prodData );
  return data;
}

export async function deleteProduct(id) {
  // console.log(id)
  const data  = await axois.delete(`/${id}`);
  return data;
}
