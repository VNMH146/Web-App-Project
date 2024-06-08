import axios from "axios";

export const getAllMovies = async () => {
  try {
    const res = await axios.get("/movie");
    if (res.status !== 200) {
      throw new Error("Failed to fetch movies");
    }
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const sendUserAuthRequest = async (data, signup) => {
  try {
    const res = await axios.post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    });
    if (res.status !== 200 && res.status !== 201) {
      throw new Error("Authentication failed");
    }
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const sendAdminAuthRequest = async (data) => {
  try {
    const res = await axios.post("/admin/login", {
      email: data.email,
      password: data.password,
    });
    if (res.status !== 200) {
      throw new Error("Admin authentication failed");
    }
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await axios.get(`/movie/${id}`);
    if (res.status !== 200) {
      throw new Error("Failed to fetch movie details");
    }
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const newBooking = async (data) => {
  try {
    const res = await axios.post("/booking", {
      movie: data.movie,
      seatNumber: data.seatNumber,
      date: data.date,
      user: localStorage.getItem("userId"),
    });
    if (res.status !== 201) {
      throw new Error("Booking failed");
    }
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getUserBooking = async () => {
  try {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`/user/bookings/${id}`);
    if (res.status !== 200) {
      throw new Error("Failed to fetch user bookings");
    }
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteBooking = async (id) => {
  try {
    const res = await axios.delete(`/booking/${id}`);
    if (res.status !== 200) {
      throw new Error("Failed to delete booking");
    }
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getUserDetails = async () => {
  try {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`/user/${id}`);
    if (res.status !== 200) {
      throw new Error("Failed to fetch user details");
    }
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
