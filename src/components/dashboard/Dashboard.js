import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { doughnutChart, lineChart } from "../../utills/chart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Dashboard = () => {
  return (
    <Grid container width={"100%"} rowGap={2}>
      <Grid item xs={12} md={12}>
        <Paper elevation={3} sx={{ padding: "15px" }}>
          <Typography variant="h6" fontWeight={700}>
            Good Morning!
          </Typography>

          <Typography variant="body2">Project Type</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container spacing={3}>
          <Grid item sx={12} md={8}>
            <Paper elevation={3} sx={{ padding: "15px" }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Paper elevation={1} sx={{ padding: "10px" }}>
                    <Box
                      component={"div"}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2">Planning</Typography>
                      <Typography variant="body2">
                        0|8 Requests Completed
                      </Typography>
                      <Typography variant="body2">In Progress</Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={1} sx={{ padding: "10px" }}>
                    <Box
                      component={"div"}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2">Examination</Typography>
                      <Typography variant="body2">
                        0|8 Requests Completed
                      </Typography>
                      <Typography variant="body2">In Progress</Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={1} sx={{ padding: "10px" }}>
                    <Box
                      component={"div"}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2">Presentation</Typography>
                      <Typography variant="body2">
                        0|8 Requests Completed
                      </Typography>
                      <Typography variant="body2">Not Started</Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item sx={12} md={4}>
            <Paper elevation={3} sx={{ padding: "15px" }}>
              <Typography variant="h6" fontWeight={700}>
                Good Morning!
              </Typography>

              <Typography variant="body2">Project Type</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12}>
        <Grid container spacing={3}>
          <Grid item sx={12} md={4}>
            <Paper elevation={3} sx={{ padding: "15px" }}>
              <Doughnut data={doughnutChart} />
            </Paper>
          </Grid>
          <Grid item sx={12} md={4}>
            <Paper elevation={3} sx={{ padding: "15px" }}>
              <Doughnut data={doughnutChart} />
            </Paper>
          </Grid>
          <Grid item sx={12} md={4}>
            <Paper elevation={3} sx={{ padding: "15px" }}>
              <Line data={lineChart} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
