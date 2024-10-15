import { PaletteMode, ThemeOptions } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#F6F7F8",
          },
          text: {
            primary: "#252733",
          },
        }
      : {
          background: {
            default: "#181A1F",
          },
          text: {
            primary: "#EBECF0",
          },
        }),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          ...(mode === "light"
            ? {
                backgroundColor: "#FFFFFF",
              }
            : {
                backgroundColor: "#131314",
              }),
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: mode === "light" ? "#D5D7DB" : "#414752",
          color: mode === "light" ? "#70737A" : "#B0B3B8",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: "50%",
          },
          ...(mode === "light"
            ? {
                color: "#252733",
                border: "2px solid #ABBDE0",
                textTransform: "none",
                backgroundColor: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#F0F5FF",
                },
                "&:active": {
                  backgroundColor: "#ABBDE0",
                },
              }
            : {
                color: "#EBECF0",
                backgroundColor: "#131314",
                textTransform: "none",
                border: "2px solid #3760AD",
                "&:hover": {
                  backgroundColor: "#181B29",
                },
                "&:active": {
                  backgroundColor: "#3760AD",
                },
              }),
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ...(mode === "light"
            ? {
                fill: "#252733",
                background: "transparent",
                "&:hover": {
                  backgroundColor: "#F0F5FF",
                },
                "&:active": {
                  backgroundColor: "#ABBDE0",
                },
              }
            : {
                fill: "#EBECF0",
                background: "transparent",
                "&:hover": {
                  backgroundColor: "#181B29",
                },
                "&:active": {
                  backgroundColor: "#3760AD",
                },
              }),
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          transition: "border-color 0.3s ease",
          border: "1px solid",
          ...(mode === "light"
            ? {
                borderColor: "#B0B3B8",
                "&:focus-within": {
                  borderColor: "#0F62FE",
                  boxShadow: "0px 0px 0px 1px #0F62FE",
                },
                "&:hover": {
                  borderColor: "#0F62FE",
                  boxShadow: "0px 0px 0px 1px #0F62FE",
                },
                "&:focus": {
                  borderColor: "#0F62FE",
                  boxShadow: "0px 0px 0px 1px #0F62FE",

                  outline: "none",
                },
              }
            : {
                borderColor: "##70737A",
                "&:focus-within": {
                  borderColor: "#5B94FE",
                  boxShadow: "0px 0px 0px 1px #0F62FE",
                },
                "&:hover": {
                  borderColor: "#5B94FE",
                  boxShadow: "0px 0px 0px 1px #0F62FE",
                },
                "&:focus": {
                  borderColor: "#5B94FE",
                  boxShadow: "0px 0px 0px 1px #0F62FE",
                  outline: "none",
                },
              }),
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "::placeholder": {
            color: mode === "light" ? "#252733" : "#EBECF0",
          },
        },
      },
    },
  },
});

export default getDesignTokens;
