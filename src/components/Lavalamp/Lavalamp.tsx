import { useLayoutEffect, useMemo, useState } from "react";
import styles from "./LavaLamp.module.css";
import classNames from "classnames";
import LavaBlob from "./LavaBlob";
import { getRndInteger } from "../../util/randomInt/randomInt";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import ThemeEditor from "../ThemeEditor/ThemeEditor";
//TODO: Add a gradient to the lava lamp

export default function LavaLamp() {
  const [open, setOpen] = useState(false);
  const count = getRndInteger(10, 20);
  const blobs = useMemo(() => {
    return Array.from({ length: count }, () => (
      <LavaBlob key={Math.random()} />
    ));
  }, [count]);

  // const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setColor(e.target.value);
  //   const element = document.getElementById("lava"); // or any specific element
  //   if (element) {
  //     element.style.setProperty("--lamp-color", color);
  //   }
  //   console.log(e.target.value);
  // };

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (window.localStorage.getItem("lampColor")) {
      root.style.setProperty(
        "--lamp-color",
        window.localStorage.getItem("lampColor") ?? ""
      );
    }
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <IconButton
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ position: "absolute", top: "4px", right: "4px" }}
      >
        <Edit />
      </IconButton>
      <ThemeEditor open={open} onClose={() => setOpen(false)} />
      <div className={styles.container} id="lava">
        <div className={styles.lava} key={1}>
          <div className={classNames(styles.bottom, styles.gradient)}></div>
          {blobs}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" key={2}>
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="20"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
