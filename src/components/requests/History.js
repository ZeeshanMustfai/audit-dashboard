import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

const History = () => {
  return (
    <>
      <Typography variant="body1" marginBottom={1}>
        History
      </Typography>
      <Divider />
      <Grid container spacing={2}>
        <Grid item>Zeeshan</Grid>
        <Grid item>May 6 2022</Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default History;
