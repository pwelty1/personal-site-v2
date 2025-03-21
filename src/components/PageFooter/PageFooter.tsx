import { GitHub, LinkedIn, KeyboardArrowUp } from "@mui/icons-material";
import { ButtonGroup, IconButton } from "@mui/material";
import React from "react";
import DiscordIcon from "../../assets/svg/discord.svg?react";
import styles from "./PageFooter.module.css";

export default function PageFooter(props: { closePage: () => void }) {
  return (
    <footer className={styles.pageFooter}>
      <ButtonGroup>
        <IconButton color="primary" onClick={props.closePage}>
          <KeyboardArrowUp />
        </IconButton>
      </ButtonGroup>
      <ButtonGroup className={styles.buttonGroup}>
        <IconButton color="primary">
          <GitHub />
        </IconButton>
        <IconButton color="primary">
          <LinkedIn />
        </IconButton>
        <IconButton color="primary">
          <DiscordIcon width={27} height={27} />
        </IconButton>
      </ButtonGroup>
    </footer>
  );
}
