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
          score: {
            red: "#FAC8D0",
            orange: "#FAD2B4",
            yellow: "#F0E4A8",
            green: "#C9F0C9",
            blue: "#C4E5F5",
          },
        }
      : {
          background: {
            default: "#181A1F",
          },
          text: {
            primary: "#EBECF0",
          },
          score: {
            red: "#7A2C39",
            orange: "#6B3920",
            yellow: "#705C0B",
            green: "#2D662D",
            blue: "#295266",
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
                backgroundColor: "#FFFFFF",
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
                borderColor: "#70737A",
                backgroundColor: "#131314",
                "&:focus-within": {
                  borderColor: "#5B94FE",
                  boxShadow: "0px 0px 0px 1px #0F62FE",
                },
                "&:hover": {
                  borderColor: "#5B94FE",
                  boxShadow: "0px 0px 0px 1px #0F62FE",
                  "&:before": {
                    borderBottom: "none",
                  },
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

          ...(mode === "light"
            ? {
                "&:hover": {
                  borderColor: "#0F62FE",
                },
              }
            : {
                "&:hover": {
                  borderColor: "#5B94FE",
                },
              }),
        },
        root: {
          boxShadow: "none",
          ...(mode === "light"
            ? {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#0F62FE !important",
                },
              }
            : {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B94FE !important",
                },
              }),
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "0.75rem",
          borderRadius: "0.5rem",
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
    MuiMenu: {
      styleOverrides: {
        list: {
          paddingTop: "0px",
          paddingBottom: "0px",
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
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...(mode === "light"
            ? {
                "&:hover": {
                  backgroundColor: "#F0F5FF",
                },
              }
            : {
                "&:hover": {
                  backgroundColor: "#181B29",
                },
              }),
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
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
    MuiButtonBase: {
      styleOverrides: {
        root: {
          transition: "none",
          "&:hover": {
            outline: "none !important",
          },
          ...(mode === "light"
            ? {
                "& .MuiTouchRipple-root": {
                  color: "#ABBDE0",
                },
              }
            : {
                "& .MuiTouchRipple-root": {
                  color: "#3760AD",
                },
              }),
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        ellipsis: {
          display: "none",
        },
        root: {
          border: "2px solid transparent",
          borderRadius: "4px",
          ...(mode === "light"
            ? {
                "&:hover": {
                  backgroundColor: "#ffffff",
                  transition: "none",

                  border: "2px solid #ABBDE0 ",
                },
                "&.Mui-selected": {
                  backgroundColor: "#ffffff",
                  border: "2px solid #ABBDE0 !important",
                },
              }
            : {
                "&:hover": {
                  backgroundColor: "#131314",
                  transition: "none",

                  border: "2px solid #3760AD",
                },
                "&.Mui-selected": {
                  backgroundColor: "#131314",
                  border: "2px solid #3760AD",
                },
              }),
        },
      },
    },
  },
});

export default getDesignTokens;
