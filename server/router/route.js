const Router = require("express");
const router = Router();
const productModel = require("../model/productModel");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;
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
      res.status(200).send({ message: "product Data Updated..." });
    })
    .catch((error) => {
      res.status(500).send({ error: "Error" });
    });
});

// --------User Account Data-------
// {
//   "name":"Nasifa Talukder",
//   "userName":"DevNasifa",
//   "email":"nasifatldr36@gmail.com",
//   "password":"123456",
//   "profile":"fdsghadshds"

// }
// --------------User Account Registration-----------
router.post("/signup", async (req, res) => {
  const { name, userName, email, password, profile } = req.body;

  if (!name || !userName || !email || !password) {
    return res.status(422).send({ error: "Please Fill All The Data..." });
  }
  let existUserName = await userModel.findOne({ userName });
  if (existUserName) {
    return res.status(422).send({ error: "User Name Already Exist Here..." });
  }
  let existEmail = await userModel.findOne({ email });
  if (existEmail) {
    return res.status(422).send({ error: "User Email Already Exist Here..." });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const user = new userModel({
    name,
    userName,
    email,
    password: hashPassword,
    profile: profile || "",
  });
  user.save();
  res.status(200).send({ message: "Registration Successfully Done..." });
});
// --------------User Account Login-------
router.post("/signin", async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(422).send({ error: "Please Fill All The Required..." });
  }
  const exitUser = await userModel.findOne({ userName });
  if (!exitUser) {
    return res.status(422).send({ error: "User Not Found.." });
  } else {
    const matchPass = await bcrypt.compare(password, exitUser.password);
    if (!matchPass)
      return res.status(400).send({ error: "Password not match" });

    const token = jwt.sign(
      { userId: exitUser._id, userName: exitUser.userName },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .send({
        message: "Login Successfully Done...",
        userName: exitUser.userName,
        token,
      });
  }

  // res.status(200).json({ message: "Login Successfully Done..." });
});

module.exports = router;
