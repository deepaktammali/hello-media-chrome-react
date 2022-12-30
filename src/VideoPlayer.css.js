import { style } from "@vanilla-extract/css";

export const playButtonWrapperStyle = style({
  ":hover": {
    "--media-icon-color": "black",
  },
  vars: {
    "--media-control-hover-background": "#03ACEF",
    "--media-control-background": "transparent",
    "--media-icon-color": "white",
  },
});
