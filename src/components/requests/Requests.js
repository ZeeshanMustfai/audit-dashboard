import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TableContainer from "../reactTable/TableContainer";
import {
  TextField,
  Box,
  Avatar,
  InputAdornment,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/styles";
import History from "./History";

const Requests = () => {
  const theme = useTheme();
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Due Date",
        accessor: "due_date",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Priority",
        accessor: "priority",
      },
      {
        Header: "Lock",
        accessor: "lock",
      },
    ],

    []
  );

  const data = [
    {
      title: "Zeeshan",
      id: 26,
      due_date: "2022/03/05",
      status: "online",
      priority: "Yes",
      lock: "True",
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <TextField
                placeholder="Search..."
                size="small"
                margin="dense"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        height: "2.4rem",
                        maxHeight: "3rem",
                        marginRight: "0px",
                        padding: ".5rem",
                      }}
                    >
                      <SearchIcon sx={{ color: "#fff", cursor: "pointer" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <FormGroup row={true} sx={{ ml: 3 }}>
                <FormControlLabel control={<Checkbox />} label="Show All" />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Open"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Re-Open"
                />
              </FormGroup>
            </Box>
            <Avatar
              variant="rounded"
              sx={{
                background: theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <AddIcon />
            </Avatar>
          </Box>
          <CssBaseline />
          <TableContainer columns={columns} data={data} />
        </Grid>
        <Grid item xs={12} md={4}>
          <History />
        </Grid>
      </Grid>
    </>
  );
};

export default Requests;
