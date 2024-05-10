import React from "react";
import {AppBar, Toolbar, Autocomplete, Tab} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import {Box} from "@mui/system";
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';


const dummyArray = ["segg", "bo gia", "heo"];
const Header = () => {
    return <AppBar>
        <Toolbar>
            <Box width = {"20%"}>
                <MovieIcon />
            </Box>

            <Box width={'50%'} margin={'auto'}>
                <Autocomplete
                    freeSolo
                    options={dummyArray.map((option) => option)}
                    renderInput={(params) => <TextField variant="standard" {...params} label="Search Across Movie" />}
                />
            </Box>

            <Box display={'flex'}>
                <Tabs>
                    <Tab label = "Movie" />
                    <Tab label = "Admin" />
                    <Tab label = "Auth" />

                </Tabs>
            </Box>
        </Toolbar>
    </AppBar>;
};  

export default Header;