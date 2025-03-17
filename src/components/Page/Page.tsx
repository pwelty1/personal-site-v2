import { Paper } from "@mui/material";
import React from "react";
import styles from "./Page.module.css";
import PageFooter from "../PageFooter/PageFooter";

export default function Page(props: { children: React.ReactNode }) {
  return (
    <div className={styles.pageContainer}>
      <Paper
        className={styles.childContainer}
        sx={{
          backgroundColor: "var(--paper-background-color)",
          backdropFilter: "blur(10px)",
        }}
      >
        {props.children}
      </Paper>
      <PageFooter />
    </div>
  );
}
