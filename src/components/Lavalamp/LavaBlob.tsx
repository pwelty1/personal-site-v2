import React, { useEffect, useMemo, useRef, useState } from "react";
import { getRndInteger } from "../../util/randomInt/randomInt";
import styles from "./LavaLamp.module.css";
import classNames from "classnames";

interface LavaBlob {
  size: number;
  duration: number;
  right: number;
}

export default function LavaBlob() {
  // const [animationFinished, setAnimationFinished] = useState(false);
  // const uid = uuid ?? crypto.randomUUID();
  const delay = getRndInteger(0, 30);
  const uuid = crypto.randomUUID();
  const ref = useRef<HTMLDivElement>(null);
  const [blob, setBlob] = useState<LavaBlob>({
    size: getRndInteger(5, 10),
    duration: getRndInteger(25, 50),
    right: getRndInteger(0, 90),
  });

  const circleStyle: React.CSSProperties = useMemo(
    () => ({
      width: `${blob.size}rem`,
      height: `${blob.size}rem`,
      right: `${blob.right}%`,
      bottom: `-${blob.size}rem`,
      animationDelay: `${delay}s`,
      animationDuration: `${blob.duration}s`,
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
    }),
    [blob, delay]
  );

  useEffect(() => {
    const handleAnimationEnd = (event: AnimationEvent) => {
      console.log("Animation ended", event.animationName);
      // Perform actions after the animation ends
      setBlob({
        size: getRndInteger(5, 10),
        duration: getRndInteger(25, 50),
        right: getRndInteger(0, 90),
      });
    };

    const element = ref.current;

    if (element) {
      //inifnite animations have no end event, so we use animationiteration
      element.addEventListener("animationiteration", handleAnimationEnd);

      return () => {
        element.removeEventListener("animationiteration", handleAnimationEnd);
      };
    }
  }, [blob]);

  return (
    <div
      ref={ref}
      className={classNames(
        styles.circle,
        styles.gradient,
        styles[`circle${getRndInteger(0, 11)}`]
      )}
      key={uuid}
      style={circleStyle}
    ></div>
  );
}
