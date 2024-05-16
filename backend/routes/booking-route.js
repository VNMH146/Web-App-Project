import express from "express";
import { newBooking } from "../controllers/booking-controller";
import { getBookingById } from "../controllers/booking-controller";
import { deleteBooking } from "../controllers/booking-controller";

const bookingsRouter = express.Router();

bookingsRouter.post("/", newBooking);
bookingsRouter.get("/:id", getBookingById);
bookingsRouter.delete("/:id", deleteBooking);

export default bookingsRouter;