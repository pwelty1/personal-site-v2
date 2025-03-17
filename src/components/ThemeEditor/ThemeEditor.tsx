import { DialogTitle, DialogContent, TextField } from "@mui/material";
import { Dialog } from "@mui/material";
import { useState, useCallback } from "react";
import { closestColor, hexToRgb } from "../../util/closestColor/closestColor";
// import { closestColor } from "../../util/closestColor/closestColor";
import * as colors from "@mui/material/colors";
export default function BackgroundEditor(props: {
  open: boolean;
  onClose: () => void;
}) {
  const root = document.documentElement;
  console.log(getComputedStyle(root).getPropertyValue("--lamp-color"));
  const [color, setColor] = useState(
    window.localStorage.getItem("lampColor") ??
      getComputedStyle(root).getPropertyValue("--lamp-color")
  );

  const handleColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
      root.style.setProperty("--lamp-color", e.target.value);

      const colorPaletteArray = [
        ...Object.values(colors).flatMap((color) => Object.values(color)),
      ];

      const closeColor = closestColor(e.target.value, colorPaletteArray);
      const rgb = hexToRgb(closeColor);
      const rgbString = `${rgb.r} ${rgb.g} ${rgb.b}`;

      root.style.setProperty("--primary-color", closeColor);
      window.localStorage.setItem("primaryColor", closeColor);
      root.style.setProperty("--mui-palette-primary-main", closeColor);
      root.style.setProperty("--mui-palette-secondary-main", closeColor);
      root.style.setProperty("--mui-palette-text-primary", closeColor);
      root.style.setProperty("--mui-palette-primary-mainChannel", rgbString);
      root.style.setProperty("--mui-palette-secondary-mainChannel", rgbString);
      window.localStorage.setItem("lampColor", e.target.value);
    },
    [root]
  );

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Edit Theme</DialogTitle>
      <DialogContent>
        <TextField
          type="color"
          value={color}
          label="Lava Color"
          onChange={handleColorChange}
          placeholder="Lava Color"
          sx={{ width: "100%", marginTop: "10px" }}
        />
      </DialogContent>
    </Dialog>
  );
}
