import { Paper, SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import styles from "./Page.module.css";
import PageFooter from "../PageFooter/PageFooter";

export default function Page(props: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <SwipeableDrawer
      anchor="top"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      variant="persistent"
      elevation={0}
      allowSwipeInChildren={true}
      className={styles.swipeableDrawer}
    >
      <div className={styles.pageContainer}>
        <Paper
          className={styles.childContainer}
          sx={{
            backgroundColor: "var(--paper-background-color)",
            // backdropFilter: "blur(10px)",
          }}
        >
          {props.children}
        </Paper>
        <PageFooter closePage={() => setOpen(false)} />
      </div>
    </SwipeableDrawer>
  );
}
