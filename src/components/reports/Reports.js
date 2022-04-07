import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TableContainer from "../reactTable/TableContainer";
import { TextField, Box, Avatar, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/styles";

const Reports = () => {
  const theme = useTheme();
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Client User",
        accessor: "client",
      },
      {
        Header: "Uploaded By",
        accessor: "uploadby",
      },
      {
        Header: "Last Modified",
        accessor: "lastmodified",
      },
    ],
    []
  );

  const data = [
    {
      name: "Zeeshan",
      id: 26,
      client: "From America",
      uploadby: "online",
      lastmodified: "50%",
    },
    {
      name: "Zeeshan",
      id: 26,
      client: "From Austeralia",
      uploadby: "online",
      lastmodified: "50%",
    },
    {
      name: "Zeeshan",
      id: 26,
      client: "From United Kindom",
      uploadby: "online",
      lastmodified: "50%",
    },
  ];

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          placeholder="filter reports..."
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
        <Avatar
          variant="rounded"
          sx={{ background: theme.palette.secondary.main, cursor: "pointer" }}
        >
          <AddIcon />
        </Avatar>
      </Box>
      <CssBaseline />
      <TableContainer columns={columns} data={data} />
    </div>
  );
};

export default Reports;
