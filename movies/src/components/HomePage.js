import { Box, Typography } from "@mui/material";
import React from "react";
import MovieItem from "./Movies/MovieItem";
import Button from '@mui/material/Button';

const HomePage = () => {
    return <Box width={"100%"} height={"100%"} marginTop={2} margin={"auto"}>
        <Box margin={"auto"} width={"80%"} height={"40vh"} padding={2}>
            <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/127251003_400326008047025_3310802024940106170_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P2LmLu-yVMAQ7kNvgEz6TWq&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYCwOIKVfZ-HymFEI7q_zXyz_Yx5WSRMYvaL-WcAkEHbQw&oe=667147D2" 
            alt="heo"
            width={"100%"}
            height={"100%"} />
        </Box>
        <Box padding={5} margin={"auto"}>
            <Typography variant="h4" textAlign={"center"}>Latest Releases</Typography>
        </Box>
        <Box display={"flex"} width={"100%"} justifyContent={"center"} flexWrap={"wrap"}>
            {[1,2,3,4].map((item) => (<MovieItem key={item} />))}
        </Box>
        <Box display={"flex"} padding={5} margin={"auto"}>
            <Button variant="outlined" sx= {{margin: "auto", color: "#2b2d42"}}>
               View All Movies
            </Button>
        </Box>
    </Box>
};

export default HomePage;

