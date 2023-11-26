import userModel from "../model/userModel.js";
import productModel from "../model/productModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// -------SECRET KEY---------
const SECRET_KEY = process.env.SECRET_KEY;

// __________USER ACCOUNT CONTOLLERS_______________
// -------USER ACCOUNT REGISTRATION CONTROLLER----------
export const signup=async(req, res)=>{
    const { name, userName, email, password, profile } = req.body;
    try {
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
    } catch (error) {
      res.status(402).send({error:"User Registration Server Error..!"});
    }
    
}
// --------USER ACCOUNT LOGIN/SIGNIN CONTROLLER------------
export const signin= async (req, res) => {
  const { userName, password } = req.body;
  try {
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
  } catch (error) {
    res.status(402).send({error:"User Login Server Error..!"});
  }
}
// --------USER DATA GET CONTROLLER-----------------
export const userDataGet=async(req,res)=>{
  const {userName}=req.params;
  try {
    if(!userName) return res.status(501).send({error:"Invalid UserName!"});
     let user=await userModel.findOne({userName}).select('-password')
    if(!user) return res.status(404).send({error:"Could Not Find User!"});
    res.status(200).send(user)
  } catch (error) {
     res.status(404).send({error:"Cannot find user Data..!"});
  }
}
// --------PROTECTED ROUTE TOKEN BASE CONTROLLER-------
export const userAuth=async (req,res)=>{
  res.status(200).send({data:"oki.."})
}

// _____________PRODUCT CONTROLLERS______________
// -------ALL PRODUCTS VIEW REQUEST CONTROLLER----------
export const AllProductsView=async (req, res) => {
  try {
    const dataOfProduct = await productModel.find({});
  res.status(200).send({ products: dataOfProduct });
  } catch (error) {
    res.status(402).send({error:"All Product Get Server Error..!"});
  }
}
// --------PRODUCT ADD CONTROLLER-----------------
export const productAdd=async (req, res) => {
  const {
    productName,
    productType,
    productDics,
    productWeight,
    productPrice,
    productImg,
  } = req.body;
 try {
  if (!productName || !productType || !productWeight || !productPrice || !productImg) {
    return res.status(422).send({ error: "Please Fill All The Data..." });
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
  res.status(200).send({ message: "product Added Successfully....." });
 } catch (error) {
  res.status(402).send({error:"Product Add Server Error..!"});
 }
}
// ---------PRODUCT DETAILS UPDATE CONTROLLER---------
export const productUpdate=async (req, res) => {
  let {
    productId,
    productName,
    productType,
    productDics,
    productWeight,
    productPrice,
    productImg,
  } = req.body;

  if (!productId || !productName || !productType || !productWeight || !productPrice || ! productImg) {
    return res.status(422).send({ error: "Please Fill All The Data..." });
  }
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
      res.status(200).send({ message: "product Data Updated Successfully...." });
    }) 
    .catch((error) => {
      res.status(500).send({ error: "Product Update Server Error" });
    });
}
// ---------PRODUCT DELETE CONTROLLER----------------
export const productDelete=async (req, res) => {
  try {
    let deleteData = await productModel.deleteOne({ _id: req.params.id });
     res.status(200).send("Product Deleted Successfully..");
  } catch (error) {
    res.status(402).send({error:"Product Delete Server Error..!"});
  }
}

