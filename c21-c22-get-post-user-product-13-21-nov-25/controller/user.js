// must: wirte ".js" extension name with this import each time
import User from "../model/userModel.js";


// function for adding new user (create)
export const createNewUser = async (req,res)=>{
    try{
        // importing each field from usermodel
        const {name,email,phone} =req.body;
        const newUser = new User ({name,email,phone});
        await newUser.save();

        // 201 is for successfull operation
        res.status(201).json({success:true, message:"user creation successfull",newUser})
    }

    // 500 is for internal error message
    catch(error){
        res.status (500).json({success:false,message:"internal error",error})
    }
}

// reading all users 

    export const getAllUser =async (req,res)=>{
    try{
        const user = await User.find();
        // THIS MUST BE COMPLETED OR THE APP MIGHT CRASH/HANG
        res.status(200).json({ success: true, user }); 
    }
    catch(error){
        res.status(500).json({ success: false, message: "internal error", error })
    }
}


