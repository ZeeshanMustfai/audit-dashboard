import { Button, Grid, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/styles";
const Setting = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel>
                <span style={{ color: theme.palette.secondary.main }}>*</span>
                Project Name
              </InputLabel>
              <TextField
                placeholder="Project Name"
                margin="dense"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel>Version</InputLabel>
              <TextField
                placeholder="Version"
                margin="dense"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <InputLabel>
                <span style={{ color: theme.palette.secondary.main }}>*</span>
                Estimate Start
              </InputLabel>
              <TextField
                placeholder="2022/01/03"
                margin="dense"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputLabel>Estimate Due</InputLabel>
              <TextField
                placeholder="2022/01/03"
                margin="dense"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputLabel>Report Date</InputLabel>
              <TextField
                placeholder="2022/01/03"
                margin="dense"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" sx={{ color: "#fff" }}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">User Management</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel>
                <span style={{ color: theme.palette.secondary.main }}>*</span>
                Project Lead
              </InputLabel>
              <TextField
                placeholder="Project Lead"
                margin="dense"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel>Project Manager</InputLabel>
              <TextField
                placeholder="Project Manager"
                margin="dense"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel>
                <span style={{ color: theme.palette.secondary.main }}>*</span>
                Customer Project Manager
              </InputLabel>
              <TextField
                placeholder="Customer Manager"
                margin="dense"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" sx={{ color: "#fff" }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Setting;
