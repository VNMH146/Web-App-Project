import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-route.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());

//middlewares
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);



mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.4mahr1a.mongodb.net/`
).then(
  () => app.listen(4000, () => console.log("Connected to Database and Server is running"))
).catch((e) => console.log(e));