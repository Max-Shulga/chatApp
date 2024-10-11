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
    MuiButton: {
      styleOverrides: {
        root: {
          ...(mode === "light"
            ? {
                color: "#252733",
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
// const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {

//           chatItem: {
//             primary: "#FFFFFF",
//             hover: "#F0F5FF",
//             pressed: "#EBECF0",
//           },
//           button: {
//             primary: "#FFFFFF",
//             hover: "#F0F5FF",
//             pressed: "#ABBDE0",
//           },
//           iconButton: {
//             primary: "#252733",
//             container: {
//               primary: "transparent",
//               hover: "#F0F5FF",
//               pressed: "#ABBDE0",
//             },
//           },

//           textField: {
//             bg: "#FFFFFF",
//           },
//         }
//       : {

//           chatItem: {
//             color: "#252733",
//             primary: "#131314",
//             hover: "#181B29",
//             pressed: "#252733",
//           },
//           button: {
//             primary: "#131314",
//             hover: "#181B29",
//             pressed: "#3760AD",
//           },
//           iconButton: {
//             primary: "#EBECF0",
//             container: {
//               primary: "transparent",
//               hover: "#181B29",
//               pressed: "#3760AD",
//             },
//           },
//           text: {
//             primary: "#EBECF0",
//           },
//           textField: {
//             bg: "#131314",
//           },
//         }),
//   },
// });

export default getDesignTokens;
