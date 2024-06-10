import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Autocomplete, Tab } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import { getAllMovies } from "../api-helpers/api-helpers";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminActions, userActions } from "../store";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const [selectedMovie, setSelectedMovie] = useState("");
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  const logout = (isAdmin) => {
    dispatch(isAdmin ? adminActions.logout() : userActions.logout());
  };
  const handleChange = (e, value) => {
    setSelectedMovie(value);
    const movie = movies.find((movie) => movie.title === value);
    if (!isUserLoggedIn) {
      navigate(`/booking/${movie._id}`);
    }
  };
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#696969" }}>
      <Toolbar>
        <Box width={"20%"}>
          <Link to="/">
            <MovieIcon color="primary" />
          </Link>
        </Box>

        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            onChange={handleChange}
            freeSolo
            options={movies && movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                placeholder="Search Across Movie"
              />
            )}
          />
        </Box>

        <Box display={"flex"}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              key="movies"
              LinkComponent={Link}
              to="/movies"
              label="Movies"
            />
            {!isAdminLoggedIn &&
              !isUserLoggedIn && [
                <Tab
                  key="admin"
                  label="Admin"
                  LinkComponent={Link}
                  to="/admin"
                />,
                <Tab key="auth" label="Auth" LinkComponent={Link} to="/auth" />,
              ]}
            {isUserLoggedIn && [
              <Tab
                key="userProfile"
                label="Profile"
                LinkComponent={Link}
                to="/user"
              />,
              <Tab
                key="userLogout"
                onClick={() => logout(false)}
                label="Logout"
                LinkComponent={Link}
                to="/"
              />,
            ]}
            {isAdminLoggedIn && [
              <Tab
                key="addMovie"
                label="Add Movie"
                LinkComponent={Link}
                to="/add"
              />,
              <Tab
                key="adminProfile"
                label="Profile"
                LinkComponent={Link}
                to="/admin"
              />,
              <Tab
                key="adminLogout"
                onClick={() => logout(true)}
                label="Logout"
                LinkComponent={Link}
                to="/"
              />,
            ]}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
