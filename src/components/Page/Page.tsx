import { Paper } from "@mui/material";
import React from "react";
import styles from "./Page.module.css";

export default function Page(props: { children: React.ReactNode }) {
  return (
    <Paper
      className={styles.pageContainer}
      sx={{
        backgroundColor: "var(--paper-background-color)",
        backdropFilter: "blur(10px)",
      }}
    >
      {props.children}
    </Paper>
  );
}
