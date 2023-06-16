import mongoose from "mongoose";

const orderSchema=mongoose.Schema({
    userMail:{
        type:String,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productVarient:{
        type:Number,
        required:true
    },
    productQuantity:{
        type:Number,
        required:true
    },
    productPricePerItem:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },

    
})

const Order=mongoose.model("orders",orderSchema)


export default Order