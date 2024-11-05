import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    score: {
      red: string;
      orange: string;
      yellow: string;
      green: string;
      blue: string;
    };
  }
  interface PaletteOptions {
    score?: {
      red: string;
      orange: string;
      yellow: string;
      green: string;
      blue: string;
    };
  }
}
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
