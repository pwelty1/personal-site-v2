import React, { useMemo, useState } from "react";
import styles from "./LavaLamp.module.css";
import classNames from "classnames";
import LavaBlob from "./LavaBlob";
//TODO: Add a gradient to the lava lamp
//TODO: make a dynamic amount of circles and animation delay and size

export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function LavaLamp() {
  const count = getRndInteger(10, 20);
  const [color, setColor] = useState("#9bfdd1");
  const blobs = useMemo(() => {
    return Array.from({ length: count }, () => (
      <LavaBlob key={Math.random()} />
    ));
  }, [count]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    const element = document.getElementById("lava"); // or any specific element
    if (element) {
      element.style.setProperty("--lamp-color", color);
    }
    console.log(e.target.value);
  };

  React.useLayoutEffect(() => {
    const element = document.getElementById("lava"); // or any specific element
    if (element) {
      element.style.setProperty("--lamp-color", color);
    }
  }, []);

  return (
    <div>
      <input
        className={styles.colorInput}
        type="color"
        value={color}
        onChange={handleColorChange}
      ></input>
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
