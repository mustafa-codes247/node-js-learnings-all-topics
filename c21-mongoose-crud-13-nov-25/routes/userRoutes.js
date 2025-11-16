    import express from "express";
    import { createNewUser,getAllUser } from "../controller/user.js";

    const router = express.Router();

    router.post("/",createNewUser);
    router.get("/",getAllUser);
    export default router;