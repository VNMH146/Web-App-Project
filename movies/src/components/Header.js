import React, { useEffect, useState } from "react";
import {AppBar, Toolbar, Autocomplete, Tab} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import {Box} from "@mui/system";
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import { getAllMovies } from "../api-helpers/api-helpers";
import { Link } from "react-router-dom";


// const dummyArray = ["segg", "bo gia", "heo", "se gay"];
const Header = () => {
    const [value, setValue] = useState(0);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getAllMovies()
        .then((data) => setMovies(data.movies))
        .catch(err => console.log(err))
    }, []);

    return (
        <AppBar sx = {{bgcolor:"#5b2d46"}}>
            <Toolbar>
                <Box width = {"20%"}>
                    <MovieIcon />
                </Box>

                <Box width={'30%'} margin={'auto'}>
                    <Autocomplete
                        freeSolo
                        options={movies && movies.map((option) => option.title)}
                        renderInput={(params) => <TextField 
                            sx = {{input: {color:"white"}}} 
                            variant="standard" 
                            {...params} 
                            placeholder="Search Across Movie" />}
                    />
                </Box>

                <Box display={'flex'}>
                    <Tabs textColor="inherit" indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={Link} to="/movies" label = "Movies" />
                        <Tab label = "Admin" LinkComponent={Link} to="/admin"/>
                        <Tab label = "Auth" LinkComponent={Link} to="/auth"/>

                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    );
};  

export default Header;