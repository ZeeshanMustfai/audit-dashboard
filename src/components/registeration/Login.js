import React from "react";
import { Box, TextField, Button, Link } from "@mui/material";
import appLogo from "../../assets/images/app-logo.jpeg";

const Login = () => {
  return (
    <Box component={"div"} className="login-main">
      <Box component={"div"} maxWidth="350px">
        <form>
          <img src={appLogo} alt="app-icon" width={"100%"} />
          <TextField
            placeholder="Email"
            size="small"
            margin="dense"
            fullWidth
          />
          <TextField
            placeholder="Password"
            size="small"
            margin="dense"
            fullWidth
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, mb: 1, color: "#fff" }}
          >
            Login
          </Button>

          <Link variant="body2" color="secondary" sx={{ cursor: "pointer" }}>
            Forgot Password
          </Link>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
