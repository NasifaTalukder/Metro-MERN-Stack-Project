const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        require:[true,"Please Add Your Product Name..!"]
    },
    productType:{
        type:String,
        require:[true,"Please Add Your Product Type..!"]

    },
    // productColor:{
    //     type:String,
    //     require:[true,"Please Add Your Product Color..!"]

    // },
    productWeight:{
        type:String,
        require:[true,"Please Add Your Product Weight..!"]

    },
    productPrice:{
        type:Number,
        require:[true,"Please Add Your Product Price..!"]

    },
    productDics:{
        type:Number,

    }

})
module.exports=mongoose.model.Products || mongoose.model('product',productSchema)