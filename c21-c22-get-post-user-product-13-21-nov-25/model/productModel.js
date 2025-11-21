import mongoose, {Schema} from "mongoose";

const productModel = new Schema({
    title:{
        type:String
    },
    size:{
        type:String
    },
    price:{
        type:Number
    }
},{timestamps:true})

const Product = mongoose.model("Product",productModel)

export default Product