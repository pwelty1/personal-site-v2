import React, { useEffect, useState } from "react";

import {
  AppBar,
  Tabs,
  Tab,
  IconButton,
  ListItemText,
  List,
  ListItemButton,
  ListItem,
  Box,
  ListItemIcon,
  SwipeableDrawer,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";
import {
  Close,
  Home,
  Info,
  Menu,
  Palette,
  Person,
  Send,
} from "@mui/icons-material";
import ThemeEditor from "../ThemeEditor/ThemeEditor";
const HOME = 0;
const ABOUT = 1;
const CONTACT = 2;

interface NavBarProps {
  currentPage: { pathname: string };
}

export default function Navigationbar(props: NavBarProps) {
  const { currentPage } = props;
  const navigate = useNavigate();

  const initialPage = (pathname: string) => {
    switch (pathname) {
      case "/home":
        return 0;
      case "/about":
        return 1;
      case "/contact":
        return 2;
      default:
        return 0;
    }
  };

  const curP = initialPage(currentPage.pathname);
  const [activeTab, setActiveTab] = useState(curP);
  const [open, setOpen] = useState(false);
  const [themeEditorOpen, setThemeEditorOpen] = useState(false);
  const [width, setWidth] = useState(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  );

  useEffect(() => {
    const handleResize = () =>
      setWidth(
        Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        )
      );
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    switch (newValue) {
      case HOME:
        navigate("/home");
        break;
      case ABOUT:
        navigate("/about");
        break;
      case CONTACT:
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.navContainer}>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          font: "finland_roundedthin",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "5px",
          "& .MuiTabs-indicator": {
            height: "5px",
            borderRadius: "5px",
          },
        }}
      >
        {width <= 1000 && (
          <IconButton
            type="button"
            color="secondary"
            size="large"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </IconButton>
        )}
        {width > 1000 && (
          <Tabs value={activeTab} textColor="inherit" onChange={handleChange}>
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        )}
        <IconButton type="button" color="secondary" size="large">
          <Person />
        </IconButton>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        sx={{}}
      >
        <Box
          sx={{
            width: "300px",
            "& button:focus": {
              outline: "none",
            },
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            color="secondary"
            sx={{
              position: "relative",
              left: "calc(100% - 55px)",
              marginTop: "10px",
            }}
          >
            <Close />
          </IconButton>
          <List>
            <ListItem sx={{}}>
              <ListItemButton
                onClick={() => {
                  navigate("/home");
                  setActiveTab(0);
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  navigate("/about");
                  setActiveTab(1);
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <Info color="primary" />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  navigate("/contact");
                  setActiveTab(2);
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <Send color="primary" />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
          <List>
            <ListItem>
              <ListItemButton onClick={() => setThemeEditorOpen(true)}>
                <ListItemIcon>
                  <Palette color="primary" />
                </ListItemIcon>
                <ListItemText primary="Edit Theme" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
      <ThemeEditor
        open={themeEditorOpen}
        onClose={() => {
          setThemeEditorOpen(false);
          setOpen(false);
        }}
      />
    </div>
  );
}
