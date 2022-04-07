import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Login from "../components/registeration/Login";
import Applogo from "../assets/images/app-logo.jpeg";
import { sidebarTabsList } from "../utills/constant";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ children }) {
  const [open, setOpen] = React.useState(true);
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    highlightActiveTab();
  }, []);

  const highlightActiveTab = () => {
    let pathname = location.pathname.split("/");
    let activeTab = pathname[pathname.length - 1];
    if (activeTab) {
      setActiveTab(activeTab);
    }
  };

  const onTabHandler = (e, tab) => {
    e.preventDefault();
    let tabKey = tab.key.toLowerCase();
    console.log("tabkey", tabKey);
    if (tabKey !== activeTab) {
      if (tabKey === "login") {
        navigate("/login");
      }
      if (tabKey === "dashboard") {
        navigate("/dashboard");
      } else {
        navigate(`/${tabKey}`);
      }
      setActiveTab(tabKey);
    } else {
      navigate(`/${tabKey}`);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color={"#fff"} textTransform="capitalize">
            {activeTab}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List>
          <ListItemIcon className="app-logo">
            <img src={Applogo} alt="app-logo" width={"70%"} />
          </ListItemIcon>
          {sidebarTabsList.map((menu, index) => (
            <ListItem
              button
              key={menu.key}
              onClick={(e) => onTabHandler(e, menu)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
