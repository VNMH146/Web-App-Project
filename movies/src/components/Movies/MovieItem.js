import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MovieItem = () => {
    return (
    <Card sx={{ 
            margin: 2,
            width: 320, 
            height: 400, 
            borderRadius: 5, 
            ":hover": {
                boxShadow: "10px 10px 20px #ccc"
            },
        }}
    >
    <img height={"55%"} width={"100%"} src="" alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{marginLeft: "40%"}} size="small">Share</Button>
      </CardActions>
    </Card>
    );
};

export default MovieItem;