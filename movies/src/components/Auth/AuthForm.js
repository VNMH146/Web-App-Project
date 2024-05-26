import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const labelStyle = { mt: 1, mb: 1 };
const AuthForm = () => {
  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
        Login
      </Typography>
      <form>
        <Box
          padding={5}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          width={400}
          margin={"auto"}
          alignContent={"center"}
        >
          <FormLabel sx={labelStyle}>Name</FormLabel>
          <TextField
            margin="normal"
            variant="standard"
            type="text"
            name="name"
          />
          <FormLabel sx={labelStyle}>Gmail</FormLabel>
          <TextField
            margin="normal"
            variant="standard"
            type="gmail"
            name="gmail"
          />
          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField
            margin="normal"
            variant="standard"
            type="password"
            name="password"
          />
          <Button
            sx={{ mt: 2, borderRadius: 10, bgcolor: "2b2d42" }}
            type="submit"
            fullWidth
            variant="conatined"
          >
            Login
          </Button>
          <Button sx={{ mt: 2, borderRadius: 10 }} fullWidth>
            Switch
          </Button>
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
