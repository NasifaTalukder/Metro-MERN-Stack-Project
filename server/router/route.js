const Router = require('express');
const router=Router();
const productModel=require('../model/productModel');

// ------product View Request By GET Method------
router.get('/',async (req,res)=>{
    const dataOfProduct = await productModel.find({})
    res.status(200).json({products:dataOfProduct})
})
// ----------------Product Add Using POST Method-----------
router.post('/',async (req,res)=>{
   const {productName,productType,productColor,productWeight,productPrice} = req.body;
   if(!productName || !productType || !productColor || !productWeight || !productPrice){
    return res.status(422).json({error:"Please Fill All The Data..."})
   }
   const product = new productModel ({
    productName,
    productType,
    productColor,
    productWeight,
    productPrice
   })
   await product.save();
   res.status(200).json({message:"product Added Successfully....."})
})

module.exports=router;