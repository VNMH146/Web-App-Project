import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails, newBooking } from "../../api-helpers/api-helpers";

// Import Roboto font from Google Fonts
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

const Booking = () => {
  const [movie, setMovie] = useState();
  const [inputs, setInputs] = useState({ seatNumber: "", date: "" });
  const id = useParams().id;

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newBooking({ ...inputs, movie: movie._id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {movie && (
        <Fragment>
          <Typography
            padding={3}
            sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
            variant="h4"
            textAlign="center"
          >
            Book Tickets Of Movie: {movie.title}
          </Typography>
          <Box display="flex" justifyContent="center">
            <Box
              display="flex"
              flexDirection="column"
              paddingTop={3}
              width="50%"
              marginRight="auto"
              alignItems="center"
            >
              <img
                width="70%"
                height="400px"
                src={movie.posterUrl}
                alt={movie.title}
                style={{ borderRadius: '8px' }}
              />
              <Box width="80%" marginTop={3} padding={2} sx={{ backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
                <Typography paddingTop={2} sx={{ fontFamily: "'Roboto', sans-serif" }}>
                  {movie.description}
                </Typography>
                <Typography fontWeight="bold" marginTop={1} sx={{ fontFamily: "'Roboto', sans-serif" }}>
                  Starrer: {movie.actors.join(", ")}
                </Typography>
                <Typography fontWeight="bold" marginTop={1} sx={{ fontFamily: "'Roboto', sans-serif" }}>
                  Release Date: {new Date(movie.releaseDate).toDateString()}
                </Typography>
              </Box>
            </Box>
            <Box width="50%" paddingTop={3}>
              <form onSubmit={handleSubmit}>
                <Box
                  padding={5}
                  margin="auto"
                  display="flex"
                  flexDirection="column"
                  sx={{ backgroundColor: '#fafafa', borderRadius: '8px', boxShadow: 3 }}
                >
                  <FormLabel sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>Seat Number</FormLabel>
                  <TextField
                    name="seatNumber"
                    value={inputs.seatNumber}
                    onChange={handleChange}
                    type="number"
                    margin="normal"
                    variant="standard"
                    fullWidth
                  />
                  <FormLabel sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>Booking Date</FormLabel>
                  <TextField
                    name="date"
                    type="date"
                    margin="normal"
                    variant="standard"
                    value={inputs.date}
                    onChange={handleChange}
                    fullWidth
                  />
                  <Button
                    type="submit"
                    sx={{
                      mt: 3,
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 700,
                      backgroundColor: '#1976d2',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#1565c0',
                      },
                      padding: '10px 20px',
                      borderRadius: '8px',
                    }}
                  >
                    Book Now
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
