import Bookings from "../models/Bookings.js";


export const newBooking = async (req, res) => {
  const { movie, date, seatNumber, user } = req.body;

  let booking;

  try {
    booking = new Bookings({
      movie,
      date: new Date(`${date}`),
      seatNumber,
      user,
    });
    booking = await booking.save();
  } catch (err) {
    return console.log(err);
  }

  if (!booking) {
    return res.status(500).json({ message: "Failed to add booking" });
  }
  return res.status(201).json({ booking });
}