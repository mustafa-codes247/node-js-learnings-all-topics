// model is actually database structure simply of application
import mongoose, {Schema} from "mongoose";

// creating database with defining variables type
const userModel = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    }

},{timestamps:true})

const User = mongoose.model("User",userModel)

export default User