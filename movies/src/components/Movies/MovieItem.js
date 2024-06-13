import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const MovieItem = ({ title, releaseDate, posterUrl, id }) => {
  return (
    <Card
      sx={{
        margin: 2,
        width: 320,
        borderRadius: 5,
        overflow: 'hidden',
        transition: "transform 0.3s, box-shadow 0.3s",
        ":hover": {
          transform: "scale(1.05)",
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="400"
        image={posterUrl}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", textAlign: 'center' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
        <Button
          LinkComponent={Link}
          to={`/booking/${id}`}
          variant="contained"
          color="primary"
          sx={{
            bgcolor: "#ff6f61",
            ":hover": {
              bgcolor: "#ff3d3d",
            },
          }}
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
