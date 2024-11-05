import colors from "@/styles/colors.module.scss";
import { PaletteMode, ThemeOptions } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: colors.lightBackgroundDefault,
          },
          text: {
            primary: colors.lightTextPrimary,
          },
          score: {
            red: colors.lightScoreRed,
            orange: colors.lightScoreOrange,
            yellow: colors.lightScoreYellow,
            green: colors.lightScoreGreen,
            blue: colors.lightScoreBlue,
          },
        }
      : {
          background: {
            default: colors.darkBackgroundDefault,
          },
          text: {
            primary: colors.darkTextPrimary,
          },
          score: {
            red: colors.darkScoreRed,
            orange: colors.darkScoreOrange,
            yellow: colors.darkScoreYellow,
            green: colors.darkScoreGreen,
            blue: colors.darkScoreBlue,
          },
        }),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          ...(mode === "light"
            ? {
                backgroundColor: colors.lightBackgroundSecond,
              }
            : {
                backgroundColor: colors.darkBackgroundSecond,
              }),
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor:
            mode === "light" ? colors.lightDivider : colors.darkDivider,
          color: mode === "light" ? colors.gray100 : colors.gray200,
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
                color: colors.lightTextPrimary,
                border: `2px solid ${colors.lightBorder}`,
                textTransform: "none",
                backgroundColor: colors.lightBackgroundSecond,
                "&:hover": {
                  backgroundColor: colors.lightHoverBg,
                },
                "&:active": {
                  backgroundColor: colors.lightActiveBg,
                },
              }
            : {
                color: colors.darkTextPrimary,
                backgroundColor: colors.darkBackgroundSecond,
                textTransform: "none",
                border: `2px solid ${colors.darkBorder}`,
                "&:hover": {
                  backgroundColor: colors.darkHoverBg,
                },
                "&:active": {
                  backgroundColor: colors.darkBorder,
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
                fill: colors.lightTextPrimary,
                background: "transparent",
                "&:hover": {
                  backgroundColor: colors.lightHoverBg,
                },
                "&:active": {
                  backgroundColor: colors.lightActiveBg,
                },
              }
            : {
                fill: colors.darkTextPrimary,
                background: "transparent",
                "&:hover": {
                  backgroundColor: colors.darkHoverBg,
                },
                "&:active": {
                  backgroundColor: colors.darkActiveBg,
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
                backgroundColor: colors.lightBackgroundSecond,
                borderColor: colors.gray200,
                "&:focus-within": {
                  borderColor: colors.lightBorderSecondary,
                  boxShadow: `0px 0px 0px 1px ${colors.lightBorderSecondary}`,
                },
                "&:hover": {
                  borderColor: colors.lightBorderSecondary,
                  boxShadow: `0px 0px 0px 1px ${colors.lightBorderSecondary}`,
                },
                "&:focus": {
                  borderColor: colors.lightBorderSecondary,
                  boxShadow: `0px 0px 0px 1px ${colors.lightBorderSecondary}`,

                  outline: "none",
                },
              }
            : {
                borderColor: colors.gray100,
                backgroundColor: colors.darkBackgroundSecond,
                "&:focus-within": {
                  borderColor: colors.darkBorderSecondary,
                  boxShadow: `0px 0px 0px 1px ${colors.darkBorderSecondary}`,
                },
                "&:hover": {
                  borderColor: colors.darkBorderSecondary,
                  boxShadow: `0px 0px 0px 1px ${colors.darkBorderSecondary}`,
                  "&:before": {
                    borderBottom: "none",
                  },
                },
                "&:focus": {
                  borderColor: colors.darkBorderSecondary,
                  boxShadow: `0px 0px 0px 1px ${colors.darkBorderSecondary}`,
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
            color:
              mode === "light"
                ? colors.lightTextPrimary
                : colors.darkTextPrimary,
          },

          ...(mode === "light"
            ? {
                "&:hover": {
                  borderColor: colors.lightBorderSecondary,
                },
              }
            : {
                "&:hover": {
                  borderColor: colors.darkBorderSecondary,
                },
              }),
        },
        root: {
          boxShadow: "none",
          ...(mode === "light"
            ? {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: `${colors.lightBorderSecondary} !important`,
                },
              }
            : {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: `${colors.darkBorderSecondary} !important`,
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
                backgroundColor: colors.lightBackgroundSecond,
              }
            : {
                backgroundColor: colors.darkBackgroundSecond,
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
                backgroundColor: colors.lightBackgroundSecond,
              }
            : {
                backgroundColor: colors.darkBackgroundSecond,
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
                  backgroundColor: colors.lightHoverBg,
                },
              }
            : {
                "&:hover": {
                  backgroundColor: colors.darkHoverBg,
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
                backgroundColor: colors.lightBackgroundSecond,
              }
            : {
                backgroundColor: colors.darkBackgroundSecond,
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
                  color: colors.lightBorder,
                },
              }
            : {
                "& .MuiTouchRipple-root": {
                  color: colors.darkBorder,
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
                  backgroundColor: colors.lightBackgroundSecond,
                  transition: "none",

                  border: `2px solid ${colors.lightBorder}`,
                },
                "&.Mui-selected": {
                  backgroundColor: colors.lightBackgroundSecond,
                  border: `2px solid ${colors.lightBorder} !important`,
                },
              }
            : {
                "&:hover": {
                  backgroundColor: colors.darkBackgroundSecond,
                  transition: "none",

                  border: `2px solid ${colors.darkBorder}`,
                },
                "&.Mui-selected": {
                  backgroundColor: colors.darkBackgroundSecond,
                  border: `2px solid ${colors.darkBorder}`,
                },
              }),
        },
      },
    },
  },
});

export default getDesignTokens;
