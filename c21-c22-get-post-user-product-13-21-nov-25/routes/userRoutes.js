    import express from "express";
    import { createNewUser,getAllUser } from "../controller/user.js";

    const router = express.Router();

    router.post("/newuser",createNewUser);
    router.get("/alluser",getAllUser);
    export default router;