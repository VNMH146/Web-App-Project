import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { FormLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useState } from "react";

const labelProps = {
  mt: 1,
  mb: 1,
};
const AddMovies = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    posterUrl: "",
    releaseDate: "",
    actor: "",
    feature: false,
  });
  const [actors, setActors] = useState([""]);
  const [actor, setActor] = useState("");
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, actors);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          padding={10}
          margin="auto"
          display={"flex"}
          flexDirection="column"
          boxShadow={"10px 10px 20px #ccc"}
        >
          <Typography textAlign={"center"} variant={"h5"}>
            Add Movie
          </Typography>
          <FormLabel sx={{ labelProps }}> Title</FormLabel>
          <TextField
            value={inputs.title}
            onChange={handleChange}
            name="title"
            variant="standard"
            margin="normal"
          />

          <FormLabel sx={{ labelProps }}> Description</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            name="description"
            variant="standard"
            margin="normal"
          />

          <FormLabel sx={{ labelProps }}> Poster URL</FormLabel>
          <TextField
            value={inputs.porterUrl}
            onChange={handleChange}
            name="posterUrl"
            variant="standard"
            margin="normal"
          />

          <FormLabel sx={{ labelProps }}> Release Date</FormLabel>
          <TextField
            type={"date"}
            value={inputs.releaseDate}
            onChange={handleChange}
            name="releaseDate"
            variant="standard"
            margin="normal"
          />

          <FormLabel sx={{ labelProps }}> Actor</FormLabel>
          <Box display={"flex"}>
            <TextField value={actor}
              onChange={(e) => setActor(e.target.value)}
              name="actor"
              variant="standard"
              margin="normal"
            />
            <Button onClick={() => {setActors([...actors, actor]); setActor("");}}>Add</Button>
          </Box>
          <FormLabel sx={{ labelProps }}>Feature</FormLabel>
          <Checkbox
            name="feature"
            checked={inputs.feature}
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                feature: e.target.checked,
              }))
            }
            sx={{ mr: "auto" }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "30%",
              margin: "auto",
              bgcolor: "#2b2d42",
              ":hover": {
                bgcolor: "#121217",
              },
            }}
          >
            Add New Movie
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddMovies;
