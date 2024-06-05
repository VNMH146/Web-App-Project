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


const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      // .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  const logout = (isAdmin) => {
    dispatch(isAdmin ? adminActions.logout() : userActions.logout());
  };
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#5b2d46" }}>
      <Toolbar>
        <Box width={"20%"}>
          <Link to="/">
            <MovieIcon color="primary" />
          </Link>
        </Box>

        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
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
            <Tab LinkComponent={Link} to="/movies" label="Movies" />
            {!isAdminLoggedIn &&
              !isUserLoggedIn && [
                <Tab label="Admin" LinkComponent={Link} to="/admin" />,
                <Tab label="Auth" LinkComponent={Link} to="/auth" />,
              ]}
            {isUserLoggedIn && [
              <>
                <Tab label="Profile" LinkComponent={Link} to="/user" />
                <Tab
                  onClick={() => logout(false)}
                  label="Logout"
                  LinkComponent={Link}
                  to="/"
                />
              </>,
            ]}
            {isAdminLoggedIn && [
              <Tab label="Add Movie" LinkComponent={Link} to="/add" />,
              <Tab label="Profile" LinkComponent={Link} to="/admin" />,
              <Tab
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
