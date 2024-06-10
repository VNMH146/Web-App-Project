import { Box, Typography, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";
import MovieItem from "./Movies/MovieItem";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import styled from "styled-components";

const images = [
  "https://files.betacorp.vn/media/images/2024/05/28/1702x621-6-095155-280524-73.jpg",
  "https://cdn.galaxycine.vn/media/2024/6/6/mong-vuot-2048_1717644782564.jpg",
  "https://cdn.galaxycine.vn/media/2024/6/7/gtcn-2048_1717732764973.jpg",
  "https://cdn.galaxycine.vn/media/2024/6/5/bad-boy-2048_1717559825784.jpg",
];

const CarouselContainer = styled(Box)`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50vh;
  margin-top: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 60%;
  height: 100%;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  position: absolute;
  left: 20%;
`;

const PreviewImage = styled.img`
  width: 20%;
  height: 90%;
  opacity: 0.5;
  position: absolute;
  transition: transform 0.5s ease-in-out;
`;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  return (
    <Box
      width="100%"
      height="100%"
      marginTop={2}
      margin="auto"
      position="relative"
    >
      <CarouselContainer>
        <PreviewImage
          src={images[prevIndex]}
          alt={`image-${prevIndex}`}
          style={{ left: "0", transform: "translateX(-10%)" }}
        />
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`image-${index}`}
            visible={index === currentIndex}
          />
        ))}
        <PreviewImage
          src={images[nextIndex]}
          alt={`image-${nextIndex}`}
          style={{ right: "0", transform: "translateX(10%)" }}
        />
      </CarouselContainer>
      <IconButton
        onClick={handlePrevious}
        style={{
          position: "absolute",
          top: "35%",
          left: "50px",
          transform: "translateY(-50%)",
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "35%",
          right: "50px",
          transform: "translateY(-50%)",
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      <Box padding={1} margin={"auto"}>
        <Typography variant="h4" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {movies &&
          movies
            .slice(0, 4)
            .map((movie, index) => (
              <MovieItem
                id={movie.id}
                title={movie.title}
                posterUrl={movie.posterUrl}
                releaseDate={movie.releaseDate}
                key={index}
              />
            ))}
      </Box>
      <Box display={"flex"} padding={5} margin={"auto"}>
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
