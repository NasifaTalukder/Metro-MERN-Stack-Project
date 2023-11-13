const Router = require("express");
const router = Router();
const productModel = require("../model/productModel");

// ------product View Request By GET Method------
router.get("/", async (req, res) => {
  const dataOfProduct = await productModel.find({});
  res.status(200).json({ products: dataOfProduct });
});
// -------Product Add Request -POST MEthod------
// http://localhost:8080/productApi/productAdd
// {
//     "productName":"Logitech 522",
//     "productType":"Keyboard",
//     "productWeight":"80g",
//     "productPrice":2000,
//     "productDics":10
// }

// ----------------Product Add Using POST Method-----------
router.post("/productAdd", async (req, res) => {
  const {
    productName,
    productType,
    productDics,
    productWeight,
    productPrice,
    productImg,
  } = req.body;
  if (!productName || !productType || !productWeight || !productPrice) {
    return res.status(422).json({ error: "Please Fill All The Data..." });
  }
  const product = new productModel({
    productName,
    productType,
    productDics,
    productWeight,
    productPrice,
    productImg,
  });
  await product.save();
  res.status(200).json({ message: "product Added Successfully....." });
});
// ------------product Delete using Delete method-------

router.delete("/:id", async (req, res) => {
  // console.log(req.params.id)
  let deleteData = await productModel.deleteOne({ _id: req.params.id });
  res.status(200).send("Product Deleted..");
});
// ------------product Update using PUT method-------
router.put("/updateProduct", async (req, res) => {
  let {
    productId,
    productName,
    productType,
    productDics,
    productWeight,
    productPrice,
    productImg,
  } = req.body;
  productModel
    .updateOne(
      { _id: productId },
      {
        productName,
        productType,
        productDics,
        productWeight,
        productPrice,
        productImg,
      }
    )
    .then(() => {
      res.status(200).send({message:"product Data Updated..."})
    }).catch((error)=>{
      res.status(500).send({error:"Error"})
    })
});

module.exports = router;
