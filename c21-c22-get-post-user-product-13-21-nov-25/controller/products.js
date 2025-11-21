import Product from "../model/productModel.js";

export const createNewProduct = async (req,res)=>{
    try{
        const {title,size,price}=req.body;
        const newProduct = new Product ({title,size,price});
        await newProduct.save();

        res.status(201).json({success:true,message:"product added",newProduct})
    }

    catch(error){
        res.status(500).json({success:false,message:"internal error",error})
    }
}


export const getAllProducts= async (req,res)=>{
    try{
        const product = await Product.find();
        res.status(200).json({success:true,product})
    }
    catch(error){
res.status (500).json({success:false,error})
    }
}