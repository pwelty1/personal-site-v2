import React, { useEffect, useState } from "react";

import { AppBar, Tabs, Tab, IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";
import { Menu, Person } from "@mui/icons-material";
const HOME = 0;
const ABOUT = 1;
const CONTACT = 2;

interface NavBarProps {
  currentPage: { pathname: string };
}

export default function Navigationbar(props: NavBarProps) {
  const { currentPage } = props;
  const history = useNavigate();

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    switch (newValue) {
      case HOME:
        history("/home");
        break;
      case ABOUT:
        history("/about");
        break;
      case CONTACT:
        history("/contact");
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
            backgroundColor: "secondary.main",
            height: "5px",
            borderRadius: "5px",
            filter: "blur(1px)",
          },
          "& button:focus": {
            outline: "none",
          },
        }}
      >
        {width <= 1000 && (
          <IconButton type="button" color="secondary" size="large">
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
    </div>
  );
}
