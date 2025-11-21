import express from "express";
import { createNewProduct,getAllProducts } from "../controller/products.js";

const router = express.Router();

router.post("/newproduct",createNewProduct);
router.get("/allproduct",getAllProducts);

export default router;