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
