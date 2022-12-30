import { style, createVar } from "@vanilla-extract/css";

const timeRangeWidth = createVar();

export const mediaControllerStyle = style({
  vars: {
    [timeRangeWidth]: 512,
  },
});

export const timeRangeWrapperStyle = style({
  ":hover": {
    vars: {
      "--media-range-thumb-opacity": 1,
    },
  },
  vars: {
    "--media-range-thumb-opacity": 0,
  },
});
