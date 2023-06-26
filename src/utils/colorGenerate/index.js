import { sample } from "lodash";

export function colorGenerate() {
  const color = [
    "#00E99E",
    "#00A3FF",
    "#8F00FF",
    "#FFD702",
    "#000000",
    "#93412b",
    "#032c62",
    "#5F506B",
    "#86BBBD",
    "#533747",
    "#9e2a2b",
    "#31572c",
    "#001d3d",
    "#9381ff",
    "#c1d3fe",
    "#ce4257",
    "#d66ba0",
    "#8fb996",
    "#938581",
    "#e2afff",
  ];

  return sample(color);
}
