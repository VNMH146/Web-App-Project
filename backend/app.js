import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use("/user", userRouter);


mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.4mahr1a.mongodb.net/`
).then(
  () => app.listen(4000, () => console.log("Connected to Database and Server is running"))
).catch((e) => console.log(e));