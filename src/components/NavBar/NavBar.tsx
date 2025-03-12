import React from "react";

import { AppBar, Tabs, Tab, IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";
import { Person } from "@mui/icons-material";
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
  const [activeTab, setActiveTab] = React.useState(curP);

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
            height: "3px",
            borderRadius: "5px",
          },
          "& .Mui-selected": {
            color: "secondary.main",
          },
          "& button:focus": {
            color: "secondary.main",
            outline: "none",
          },
          "& .MuiTab-root": {
            color: "secondary.main",
          },
        }}
      >
        {/* <IconButton type="button" color="secondary" size="large">
          <MenuIcon />
        </IconButton> */}
        <Tabs value={activeTab} onChange={handleChange} sx={{}}>
          <Tab label="Home" sx={{ color: "secondary.main" }} />
          <Tab label="About" sx={{ color: "secondary.main" }} />
          <Tab label="Contact" sx={{ color: "secondary.main" }} />
        </Tabs>
        <IconButton type="button" color="secondary" size="large">
          <Person />
        </IconButton>
      </AppBar>
    </div>
  );
}
