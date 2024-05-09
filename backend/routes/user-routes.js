import express from "express";
import { getAllUsers } from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.get("/alluser", getAllUsers);

export default userRouter;